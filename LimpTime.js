const df = require('date-fns')

//because we want a time with a little limp

module.exports = class LimpTime {
  constructor(ms) {
    this.result = this.result.bind(this)
    this.__current = null
    this.init(ms)
  }

  init(ms) {
    this.repeat(ms, () => {
      this.updateCurrentTime()
    })
  }

  getTimeRightNow() {
    return df.format(Date())
  }

  updateCurrentTime() {
    this.__current = this.getTimeRightNow()
  }

  //////////////////

  repeat(ms, fn) {
    return new Promise(resolve => {
      const intervalId = setInterval(fn, ms)
    })
  }

  ///////////////////

  result() {
    return new Promise((resolve, reject) => {
      //do we have a value already?
      if (this.__current) {
        //yes -- resolve now
        resolve(this.__current)
      } else {
        //no value found, so we setInterval (3000 ms) to get one eventually
        const intervalId = setInterval(() => {
          //do we have a value now?
          if (this.__current) {
            //yes -- clear this interval and resolve it
            clearInterval(intervalId)
            resolve(this.__current)
          }
        }, 3000)
      }
    })
  }
}
