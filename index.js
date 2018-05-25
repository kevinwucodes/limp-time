const LimpTime = require('./LimpTime')

const limptime = new LimpTime(4000)

console.log(
  'attempting to get limptime every 1 second, even though LimpTime will update itself every 4 seconds'
)

setInterval(() => {
  console.log(limptime)
}, 1000)
