const df = require('date-fns')

//because we want a time with a little limp

module.exports = class LimpTime {
  constructor(ms) {
    this.current = null
    this.init(ms)
  }

  init(ms) {
    setInterval(() => {
      this.updateCurrentTime()
    }, ms)
  }

  getTimeRightNow() {
    return df.format(Date())
  }

  updateCurrentTime() {
    this.current = this.getTimeRightNow()
  }
}
