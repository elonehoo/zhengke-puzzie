/*
	@ author: leeenx
	@ name: 网格随机分布算法
*/
// @ts-nocheck
export default class Gridistribution {
  constructor(...args) {
    this.init(...args);
  }
  // 初始化
  init({ width, height, cell = { width: 10 }, rectangles = [] }) {
    width = width >> 0;
    height = height >> 0;
    // 格子的高默认与它的宽一样
    cell.height === undefined && (cell.height = cell.width);
    // 列数
    let col = (width / cell.width) >> 0;
    // 行数
    let row = (height / cell.height) >> 0;
    // 宽高修正
    [cell.width, cell.height] = [width / col, height / row];
    // 表格数组
    this.grid = new Array(col * row);
    for (let i = 0; i < row; ++i) {
      for (let j = 0; j < col; ++j) {
        let index = i * col + j;
        this.grid[index] = {
          index,
          x: cell.width * j,
          y: cell.height * i,
          width: cell.width,
          height: cell.height,
        };
      }
    }
    // 挂载属性
    Object.assign(this, { row, col, width, height, cell: cell });
    // 剔除不可分布成员
    this.trim(rectangles);
  }
  // 重置
  reset(...args) {
    this.init(...args);
  }
  _shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }
  // 从数组中剔除空洞
  trim(rectangles: any[]) {
    rectangles.forEach(({ x, y, width, height }) => {
      // 把 rectangle 框起的范围从 grid 中删除
      let startCol = (x / this.cell.width) >> 0;
      let startRow = (y / this.cell.height) >> 0;
      let endCol = ((x + width) / this.cell.width) >> 0;
      let endRow = ((y + height) / this.cell.height) >> 0;
      for (let i = startRow; i <= endRow; ++i) {
        for (let j = startCol; j <= endCol; ++j) {
          let index = i * this.col + j;
          this.grid[index].isRemoved = true;
        }
      }
    });
    // 生成压缩后的格子
    this.cells = this.grid.filter((cell) => !cell.isRemoved);
    this.shuffleCells = this._shuffle(this.cells.concat([]));
  }
  // 随机返回 count 个格子
  pick(count: any) {
    if (count > this.shuffleCells.length) {
      // throw("超出范围");
      return [];
    }
    return this.shuffleCells.slice(0, count);
  }
}
