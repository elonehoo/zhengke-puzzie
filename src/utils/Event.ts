/*
	@ author: leeenx
	@ 事件封装
	@ object.on(event, fn) // 监听一个事件
	@ object.off(event, fn) // 取消监听
	@ object.once(event, fn) // 只监听一次事件
	@ object.dispacth(event, arg) // 触发一个事件
*/
// @ts-nocheck
export default class Event {
  constructor() {
    // 定义的事件与回调
    this.defineEvent = {};
  }

  // 注册事件
  register(event: any, cb: any) {
    if (!this.defineEvent[event]) {
      this.defineEvent[event] = [cb];
    } else {
      this.defineEvent[event].push(cb);
    }
  }

  // 派遣事件
  dispatch(event: any, arg: any) {
    if (this.defineEvent[event]) {
      {
        for (let i = 0, len = this.defineEvent[event].length; i < len; ++i) {
          this.defineEvent[event][i] && this.defineEvent[event][i](arg);
        }
      }
    }
  }

  // on 监听
  on(event: any, cb: any) {
    return this.register(event, cb);
  }

  // off 方法
  off(event: any, cb: any) {
    if (this.defineEvent[event]) {
      if (typeof cb == "undefined") {
        delete this.defineEvent[event]; // 表示全部删除
      } else {
        // 遍历查找
        for (let i = 0, len = this.defineEvent[event].length; i < len; ++i) {
          if (cb == this.defineEvent[event][i]) {
            this.defineEvent[event][i] = null; // 标记为空 - 防止dispath 长度变化
            // 延时删除对应事件
            setTimeout(() => this.defineEvent[event].splice(i, 1), 0);
            break;
          }
        }
      }
    }
  }

  // once 方法，监听一次
  once(event: any, cb: any) {
    let onceCb = () => {
      cb && cb();
      this.off(event, onceCb);
    };
    this.register(event, onceCb);
  }

  // 清空所有事件
  clean() {
    this.defineEvent = {};
  }
}
