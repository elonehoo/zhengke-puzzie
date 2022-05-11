<template>
  <div class="lee-puzzle" ref="puzzle">
    <div class="lee-begin" v-if="isBegin">
      <div class="lee-diff">
        <span @click="diff('x')">{{ props.initData.x }}</span>
        <span>*</span>
        <span @click="diff('y')">{{ props.initData.y }}</span>
      </div>
      <div class="lee-point" @click="selectPoint">
        <span>第</span>
        {{ Checkpoint + 1 }}
        <span>关</span>
      </div>
      <button @click="begin">开始</button>
    </div>
    <canvas ref="cvs" width="800" height="600"></canvas>
    <div
      class="lee-replace"
      ref="replace"
      @mousedown="mouseDown"
      @touchstart="touchDown"
      @mouseup="mouseUp"
      @touchend="touchUp"
    >
      <div class="lee-replace-old" ref="old" v-show="isShowOld"></div>
      <div class="lee-replace-new" ref="new" v-show="isShowNew"></div>
    </div>
    <div
      class="lee-over"
      v-if="isFinish"
      :style="{ lineHeight: height + 'px' }"
    >
      good!
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed, nextTick } from "vue";
const ctx = ref();
const puzzle = ref();
const cvs = ref();
const oldEle = ref();
const newEle = ref();
const replace = ref();
const img = ref("");
const width = ref(0); // 整个画布大小
const height = ref(0);
const partWidth = ref(0); // 画布上的小图片大小
const partHeight = ref(0);
const originPartWidth = ref(0); // 原始图片每块的大小
const originPartHeight = ref(0);
const l = ref(0); // 大盒子在文档中的位置
const t = ref(0);
const x = ref(0); // 鼠标在小盒子中的坐标
const y = ref(0);
const centerX = ref(0); // 中心点坐标
const centerY = ref(0);
const oldX = ref(); // 旧图片位置
const oldY = ref();
const newX = ref(0); // 新图片位置
const newY = ref(0);
const repX = ref(0); // 旧图片在原图片上面的位置
const repY = ref(0);
const repXX = ref(0);
const repYY = ref(0);
const i = ref(0); // down时的小盒子位置（0，1，2）
const j = ref(0); // up时的小盒子位置（0，1，2）
const orginArr = ref([] as any[]);
const randomArr = ref([] as any[]);
const isShowOld = ref(false);
const isShowNew = ref(false);
const isFinish = ref(false);
const isBegin = ref(false);
const isMove = ref(false); // 判断鼠标是否移动
const Checkpoint = ref(0); // 当前关卡

interface initDataType {
  x: number;
  y: number;
  imgUrl: any[];
}

const props = defineProps<{ initData: initDataType }>();

const isTouch = computed(() => {
  return document.body.clientWidth < 992; // 小屏幕touch，大屏幕mouse
});
const pointNum = computed(() => {
  return props.initData.imgUrl.length; // 关卡总数
});

const loadImg = (src: string) => {
  let promise = new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve.bind(null, img);
    img.onerror = reject;
    img.src = src;
  });
  return promise;
};

const _initCanvas = () => {
  ctx.value = cvs.value.getContext("2d");
  width.value = puzzle.value.offsetWidth;
  height.value = puzzle.value.offsetHeight;
  partWidth.value = width.value / props.initData.x;
  partHeight.value = height.value / props.initData.y;
  cvs.value.width = width.value;
  cvs.value.height = height.value;

  // replace.value = $refs["replace"];
  // oldEle.value = $refs["old"];
  // newEle = $refs["new"];
  oldEle.value.style.width = newEle.value.style.width = partWidth.value + "px";
  oldEle.value.style.height = newEle.value.style.height =
    partHeight.value + "px";
};

const random = (arr: any[]) => {
  arr.sort(() => {
    return Math.random() - 0.5;
  });
};

// 绘制初始随机图片
const drawBackground = () => {
  ctx.value.clearRect(0, 0, width.value, height.value);
  loadImg(props.initData.imgUrl[Checkpoint.value])
    .then((imgsrc: any) => {
      img.value = imgsrc;
      // @ts-ignore
      originPartWidth.value = img.value.width / props.initData.x;
      // @ts-ignore
      originPartHeight.value = img.value.height / props.initData.y;
      randomArr.value.forEach((value, i) => {
        ctx.value.drawImage(
          img.value,
          value[0] * originPartWidth.value,
          value[1] * originPartHeight.value,
          originPartWidth.value,
          originPartHeight.value,
          orginArr.value[i][0] * partWidth.value,
          orginArr.value[i][1] * partHeight.value,
          partWidth.value,
          partHeight.value
        );
      });
    })
    .catch((arr) => {
      throw "图片地址错误";
    });
};

const init = () => {
  console.log(event);

  // 初始化坐标
  for (var i = 0; i < props.initData.x; i++) {
    for (var j = 0; j < props.initData.y; j++) {
      orginArr.value.push([i, j]);
      randomArr.value.push([i, j]);
    }
  }
  random(randomArr.value); // 随机数组
};

async function down(pageXX: any, pageYY: any) {
  isMove.value = false;
  // canvas距离文档的距离
  l.value = puzzle.value.parentNode.offsetLeft;
  t.value = puzzle.value.parentNode.offsetTop;
  // 鼠标在canvas内的坐标
  let left = pageXX - l.value;
  let top = pageYY - t.value;
  // 鼠标按下时所对应的当前小图片的顶部坐标
  oldX.value = Math.floor(left / partWidth.value) * partWidth.value;
  oldY.value = Math.floor(top / partHeight.value) * partHeight.value;
  // 显示old小盒子
  isShowOld.value = true;
  oldEle.value.style.left = oldX.value + "px";
  oldEle.value.style.top = oldY.value + "px";
  oldEle.value.style.outline = "1px solid #f69";
  // 鼠标按下时所对应的小盒子位置（[0,0],[0,1],[0,2]...）
  let a = Math.floor(left / partWidth.value);
  let b = Math.floor(top / partHeight.value);
  // 查找鼠标按下时的小盒子是打乱数组的index项
  i.value = 0;
  orginArr.value.forEach((val, index) => {
    if (val[0] == a && val[1] == b) {
      i.value = index;
    }
  });
  // 鼠标按下时所对应的当前小图片的顶部坐标（在未打乱图片中的位置）
  repX.value = randomArr.value[i.value][0] * partWidth.value;
  repY.value = randomArr.value[i.value][1] * partHeight.value;
  // 当前点击的图片换成背景图位置
  oldEle.value.style.background =
    "url(" +
    props.initData.imgUrl[Checkpoint.value] +
    ") no-repeat top " +
    -1 * repY.value +
    "px left " +
    -1 * repX.value +
    "px";
  oldEle.value.style.backgroundSize = width.value + "px " + height.value + "px";

  await nextTick(() => {
    // 鼠标在小盒子中的位置
    x.value = left - oldEle.value.offsetLeft;
    y.value = top - oldEle.value.offsetTop;
    if (isTouch.value) {
      replace.value.addEventListener("touchmove", move(), false);
    } else {
      replace.value.addEventListener("mousemove", move(), false);
    }
  });
}

function mouseDown() {
  if (isTouch.value) return;

  down(event.pageX, event.pageY);
}
async function move() {
  isMove.value = true;
  await nextTick(() => {
    ctx.value.clearRect(
      oldX.value,
      oldY.value,
      partWidth.value,
      partHeight.value
    );
    if (isTouch.value && !!event.touches) {
      var left = event.touches[0].clientX - l.value - x.value;
      var top = event.touches[0].pageY - t.value - y.value;
    } else {
      var left = event.pageX - l.value - x.value;
      var top = event.pageY - t.value - y.value;
    }
    left = left < 0 ? 0 : left;
    top = top < 0 ? 0 : top;
    left =
      left > width.value - partWidth.value
        ? width.value - partWidth.value
        : left;
    top =
      top > height.value - partHeight.value
        ? height.value - partHeight.value
        : top;
    oldEle.value.style.left = left + "px";
    oldEle.value.style.top = top + "px";

    // 移动的盒子的中心点坐标
    centerX.value = left + partWidth.value / 2;
    centerY.value = top + partHeight.value / 2;
    // 计算中心点在哪一块位置
    newX.value = Math.floor(centerX.value / partWidth.value) * partWidth.value;
    newY.value =
      Math.floor(centerY.value / partHeight.value) * partHeight.value;
    isShowNew.value = true;
    newEle.value.style.left = newX.value + "px";
    newEle.value.style.top = newY.value + "px";
    newEle.value.style.outline = "1px solid #69f";
    // 鼠标移动过程中所对应的小盒子位置（[0,0],[0,1],[0,2]...）
    let a = Math.floor(newX.value / partWidth.value);
    let b = Math.floor(newY.value / partHeight.value);
    // 查找鼠标移动时的小盒子是打乱数组的index项
    j.value = 0;
    orginArr.value.forEach((val, index) => {
      if (val[0] == a && val[1] == b) {
        j.value = index;
      }
    });
    // 鼠标移动时所对应的当前小图片的顶部坐标（在未打乱图片中的位置）
    repXX.value = randomArr.value[j.value][0] * partWidth.value;
    repYY.value = randomArr.value[j.value][1] * partHeight.value;
    // newEle.style.background="url(" + initData.imgUrl + ") no-repeat top " + -1 * repXX + "px left " + -1 * repYY + "px";
  });
}
function mouseUp() {
  isShowOld.value = false;
  isShowNew.value = false;

  oldEle.value.style.outline = "0px solid #f69";
  newEle.value.style.outline = "0px solid #69f";
  // 判断鼠标是否移动
  if (isMove.value) {
    ctx.value.clearRect(
      newX.value,
      newY.value,
      partWidth.value,
      partHeight.value
    );
    // 交换坐标位置
    [randomArr.value[i.value], randomArr.value[j.value]] = [
      randomArr.value[j.value],
      randomArr.value[i.value],
    ];
    // 交换两块位置（重绘）
    ctx.value.drawImage(
      img,
      randomArr.value[j.value][0] * originPartWidth.value,
      randomArr.value[j.value][1] * originPartHeight.value,
      originPartWidth.value,
      originPartHeight.value,
      newX.value,
      newY.value,
      partWidth.value,
      partHeight.value
    );
    ctx.value.drawImage(
      img,
      randomArr.value[i.value][0] * originPartWidth.value,
      randomArr.value[i.value][1] * originPartHeight.value,
      originPartWidth,
      originPartHeight,
      oldX,
      oldY,
      partWidth,
      partHeight
    );
  }

  if (isTouch.value) {
    replace.value.removeEventListener("touchmove", move, false);
  } else {
    replace.value.removeEventListener("mousemove", move, false);
  }
  if (JSON.stringify(randomArr.value) == JSON.stringify(orginArr.value)) {
    if (Checkpoint.value >= pointNum.value - 1) {
      isFinish.value = true;
    } else {
      Checkpoint.value++;
      orginArr.value = [];
      randomArr.value = [];
      _initCanvas();
      init();
      drawBackground();
    }
  }
}
function touchDown() {
  event.preventDefault();
  down(event.touches[0].clientX, event.touches[0].clientY);
}
function touchUp() {
  mouseUp();
}
function begin() {
  _initCanvas();
  init();
  drawBackground();
  isBegin.value = false;
}
function diff(type: any) {
  let temp = props.initData[type];
  props.initData[type] = temp > 9 ? 2 : temp + 1;
}
function selectPoint() {
  let temp = Checkpoint.value;
  Checkpoint.value = temp >= pointNum.value - 1 ? 0 : temp + 1;
}
</script>

<style scoped lang="scss">
@mixin posi {
  position: absolute;
  top: 0px;
  left: 0px;
}
.lee-puzzle {
  width: 100%;
  height: 100%;
  outline: 1px solid #ccc;
  position: absolute;
  canvas {
    @include posi;
  }
  .lee-replace {
    width: 100%;
    height: 100%;
    @include posi;
    .lee-replace-old,
    .lee-replace-new {
      @include posi;
    }
    .lee-replace-old {
      z-index: 1;
    }
  }
}
.lee-over,
.lee-begin {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  color: #fff;
  font-size: 80px;
  user-select: none;
}
.lee-begin {
  z-index: 2;
  background-color: rgba(60, 180, 180, 0.8);
  .lee-diff {
    width: 100%;
    position: absolute;
    top: 10%;
  }
  .lee-point {
    width: 100%;
    position: absolute;
    top: 25%;
    & > span {
      font-size: 50px;
      position: relative;
      top: -11px;
    }
  }
  button {
    width: 100px;
    height: 40px;
    background-color: #69f;
    outline: none;
    position: absolute;
    top: 46%;
    left: 50%;
    cursor: pointer;
    margin-left: -50px;
    font: 700 20px/30px "Microsoft Yahei";
    color: #fff;
  }
}

@media screen and (max-width: 768px) {
  canvas,
  .lee-over,
  .lee-begin {
    width: 100%;
    height: 100%;
    margin: 0;
    top: 0;
    left: 0;
  }
}
</style>
