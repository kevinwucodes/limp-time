const LimpTime = require('./LimpTime')

const limptime = new LimpTime(4000)

console.log('limptime:   ', limptime)

const doit = async () => await limptime.result()

setInterval(() => {
  doit()
    .then(asdf => console.log('finish: ', asdf))
    .catch(err => console.log('err', err))
}, 1000)
