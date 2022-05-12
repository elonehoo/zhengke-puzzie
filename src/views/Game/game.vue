<template>
  <div>
    <div class="puzzle_map" id="puzzleMap" ref="puzzleMap">
      <div class="puzzle_map_head">
        <a class="puzzle_map_back" href="javascript:hidePuzzleMap();"></a>
        选择关卡
      </div>
      <ul class="puzzle_map_body" id="puzzleList" ref="puzzleList"></ul>
      <div class="puzzle_map_footer">
        难度：
        <input
          type="radio"
          value="1"
          name="difficulty"
          class="puzzle_difficulty"
        />
        <input
          type="radio"
          value="2"
          name="difficulty"
          class="puzzle_difficulty"
        />
        <input
          type="radio"
          value="3"
          name="difficulty"
          class="puzzle_difficulty"
        />
        <input
          type="radio"
          value="4"
          name="difficulty"
          class="puzzle_difficulty"
        />
        <input
          type="radio"
          value="5"
          name="difficulty"
          class="puzzle_difficulty"
        />
        <input
          type="radio"
          value="6"
          name="difficulty"
          class="puzzle_difficulty"
        />
        <input
          type="radio"
          value="7"
          name="difficulty"
          class="puzzle_difficulty"
        />
        <input
          type="radio"
          value="8"
          name="difficulty"
          class="puzzle_difficulty"
        />
        <input
          type="radio"
          value="9"
          name="difficulty"
          class="puzzle_difficulty"
        />
        <input
          type="radio"
          value="10"
          name="difficulty"
          class="puzzle_difficulty"
        />
      </div>
    </div>
    <!-- 游戏画布 -->
    <canvas class="puzzle_game" id="puzzleGame" ref="puzzleGame"></canvas>
    <!-- 暂停时的广告 -->
    <div class="puzzle_ad" id="puzzleAd" ref="puzzleAd">
      <div class="puzzle_ad_main">
        <a href="//jd.com">
          <div class="puzzle_ad_img"></div>
        </a>
        <div class="puzzle_ad_close" onclick="puzzle.turnOn()"></div>
      </div>
      <div class="puzzle_ad_back" onclick="back()"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Puzzle from "./Puzzle";
import aBig from "@/assets/images/pictures/a.jpg";
import bBig from "@/assets/images/pictures/b.jpg";
import cBig from "@/assets/images/pictures/c.jpg";
import dBig from "@/assets/images/pictures/d.jpg";
import eBig from "@/assets/images/pictures/e.jpg";

import aSmall from "@/assets/images/pictures/a.jpg";
import bSmall from "@/assets/images/pictures/b.jpg";
import cSmall from "@/assets/images/pictures/c.jpg";
import dSmall from "@/assets/images/pictures/d.jpg";
import eSmall from "@/assets/images/pictures/e.jpg";

// 关卡信息
const levels = [
  {
    // 大图
    picture: aBig,
    // 小图
    thumb: aSmall,
    // 描述
    instr: "秋天的银杏树",
    // 免费
    free: true,
  },
  {
    // 大图
    picture: bBig,
    // 小图
    thumb: bSmall,
    // 描述
    instr: "毕加索的画 ---- 少女",
    // 免费
    free: true,
  },
  {
    // 大图
    picture: cBig,
    // 小图
    thumb: cSmall,
    // 描述
    instr: "毕加索的画 ---- 树",
    // 免费
    free: true,
  },
  {
    // 大图
    picture: dBig,
    // 小图
    thumb: dSmall,
    // 描述
    instr: "毕加索的画 ---- 桥",
    // 免费
    free: true,
  },
  {
    // 大图
    picture: eBig,
    // 小图
    thumb: eSmall,
    // 描述
    instr: "不知道哪里来的美女",
    // 免费
    free: true,
  },
];

// 从 localStorage 中读取记录
const record = JSON.parse(localStorage.getItem("puzzle-record")) || {
  level: -1,
  difficulty: 2,
};
const puzzleList = ref();
const puzzleMap = ref();
const puzzleGame = ref();
const puzzleAd = ref();
onMounted(() => {
  // 初始化列表
  puzzleList.value.innerHTML = levels
    .map(
      (level, index) =>
        `
      <li
        onclick="this.className === \'puzzle_lock\' || selectLevel(${index})"
        ${
          record.level < index && level.free !== true
            ? 'class="puzzle_lock"'
            : ""
        }
      >
        <span class="puzzle_map_thumb">
          <img src="${level.thumb}">
        </span>
        <span class="puzzle_map_instr">
          ${level.instr}<br>
          <b>${level.free === true ? "免费" : "解锁可玩"}</b>
        </span>
      </li>
    `
    )
    .join("\n");

  const puzzleLevel = puzzleList.value.querySelectorAll("li");
  // 显示地图
  global.showPuzzleMap = function () {
    puzzleMap.value.className = "puzzle_map show";
  };
  // 隐藏地图
  global.hidePuzzleMap = function () {
    puzzleMap.value.className = "puzzle_map";
  };

  // 选择关卡
  global.selectLevel = function (index) {
    puzzleGame.value.className = "puzzle_game show";
    setTimeout(function () {
      puzzle.enter(levels[index].picture);
      record.level = index;
      updateRecord();
    }, 600);
  };

  // 返回
  global.back = function () {
    puzzleAd.value.style.display = "none";
    puzzleGame.value.className = "puzzle_game";
  };

  // 更新记录
  const updateRecord = function () {
    localStorage.setItem("puzzle-record", JSON.stringify(record));
  };

  // 设置难度
  const setDifficulty = function (difficulty) {
    difficulty = difficulty | 0;
    difficulty = difficulty > 1 ? difficulty : 1;
    difficultyOpts[difficulty - 1].checked = "checked";
    puzzle.difficulty = difficulty;
    puzzle.totalTime = difficulty * 120;
  };

  // 创建拼图对象
  const puzzle = new Puzzle();

  // 默认进入第一张图
  puzzle.init();
  // 设置倒计时
  puzzle.totalTime = 60;

  // 通关
  puzzle.event.on("pass", function () {
    if (record.level < levels.length - 1) {
      // 解锁
      puzzleLevel[++record.level].className = "";
      puzzle.enter(levels[record.level].picture);
      updateRecord();
    } else {
      alert("游戏结束");
    }
  });

  // 游戏结束
  puzzle.event.on("gameover", function () {
    alert("超时了");
  });

  // 暂停显示广告
  puzzle.event.on("pause", function () {
    puzzleAd.value.style.display = "block";
  });

  // 恢复隐藏广告
  puzzle.event.on("resume", function () {
    puzzleAd.value.style.display = "none";
  });

  // 难度选项
  const difficultyOpts = document.querySelectorAll(".puzzle_difficulty");
  difficultyOpts.forEach(function (opt) {
    opt.addEventListener("click", function () {
      record.difficulty = this.value;
      puzzle.difficulty = this.value;
      updateRecord();
    });
  });

  // 同步游戏难度
  setDifficulty(record.difficulty);

  // // 玩过
  // if (record.level >= 0) {
  //   resumeGame.className = "puzzle_btn";
  //   resumeGame.onclick = function () {
  //     selectLevel(record.level);
  //   };
  // }
  // // 没玩过
  // else {
  //   resumeGame.className = "puzzle_btn disabled";
  // }

  global.puzzle = puzzle;
});
</script>

<style>
.puzzle {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #ebebeb;
}

.puzzle_home {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/cover.jpg") 0 0 no-repeat;
  background-size: cover;
  opacity: 0.6;
}

.puzzle_map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(97, 144, 231, 0.86);
  color: #fff;
  pointer-events: none;
  opacity: 0.6;
  -webkit-transition: opacity 0.6s ease;
}
.puzzle_map.show {
  opacity: 1;
  pointer-events: unset;
}

.puzzle_map_head {
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  background-color: rgba(97, 144, 231, 1);
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.puzzle_map_back,
.puzzle_map_back:visited {
  position: absolute;
  color: inherit;
  width: 40px;
  height: 40px;
  top: 0;
  left: 0;
}

.puzzle_map_back::after {
  content: "";
  position: absolute;
  top: 20px;
  left: 12px;
  width: 12px;
  height: 12px;
  border: 1px solid currentColor;
  border-right-style: none;
  border-bottom-style: none;
  -webkit-transform-origin: left top;
  -webkit-transform: rotateZ(-45deg);
}

.puzzle_map_body {
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  top: 40px;
  left: 0;
  bottom: 40px;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 0;
}

.puzzle_map_body li {
  display: block;
  padding: 10px;
}

.puzzle_map_body li:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.08);
}

.puzzle_map_thumb {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 100px;
  height: 100px;
  overflow: hidden;
}

.puzzle_lock .puzzle_map_thumb::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5) url("@/assets/images/lock.png") center
    no-repeat;
  background-size: 25px 25px;
}

.puzzle_map_thumb img {
  position: absolute;
  width: 100%;
  height: auto;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
}

.puzzle_map_instr {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  margin-left: 16px;
}

.puzzle_map_instr b {
  color: #f5d328;
}

.puzzle_map_footer {
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 12px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  background-color: rgba(97, 144, 231, 1);
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
}

.puzzle_game {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  -webkit-transition: -webkit-transform 0.1s ease;
  -webkit-transform: translate3d(100%, 0, 0);
  z-index: 2;
}

.puzzle_game.show {
  -webkit-transform: translate3d(0, 0, 0);
}

.puzzle_menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transition: transform 0.3s ease;
}

.puzzle_menu.hide {
  -webkit-transform: translate3d(-100%, 0, 0);
}

.puzzle_high_score {
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin: 20px auto 80px;
  height: 24px;
}

.puzzle_btn,
.puzzle_btn:hover,
.puzzle_btn:visited {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  margin: 15px auto;
  border-radius: 20px;
  background-color: #6190e8;
  text-shadow: 2px 2px 5px #000;
  box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 0.3);
}

.puzzle_btn.disabled,
.puzzle_btn.disabled:hover,
.puzzle_btn.disabled:visited {
  background-color: #354665;
  opacity: 0.8;
}

.puzzle_ad {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
}

.puzzle_ad_main {
  position: absolute;
  width: 300px;
  height: 543px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) scale(0.8);
}

.puzzle_ad_back {
  position: absolute;
  width: 32px;
  height: 32px;
  background: url("@/assets/images/back.png") 0 0 no-repeat;
  background-size: 100% 100%;
  top: 20px;
  left: 20px;
}

.puzzle_ad_img {
  display: block;
  width: 100%;
  height: 100%;
  background: url("@/assets/images/ad@2x.jpg") 0 0 no-repeat;
}

.puzzle_ad_close {
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.5);
  top: -12px;
  right: -12px;
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 1);
  -webkit-transform: scale(1.5);
}

.puzzle_ad_close::before,
.puzzle_ad_close::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 1px;
  left: 4px;
  top: 11px;
  background-color: #fff;
  -webkit-transform: rotateZ(45deg);
}

.puzzle_ad_close::after {
  -webkit-transform: rotateZ(-45deg);
}

.puzzle_difficulty {
  position: relative;
  top: -2px;
  appearance: none;
  -webkit-appearance: none;
  display: inline-block;
  vertical-align: middle;
  color: #70bf41;
  width: 18px;
  height: 18px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid currentColor;
  border-radius: 100%;
  outline: none;
}

.puzzle_difficulty:checked {
  color: #c82506;
  border-width: 3px;
}

.puzzle_difficulty:checked::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: currentColor;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
}
</style>
