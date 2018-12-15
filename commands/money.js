const request = require('request')

exports.run = (bot, message, args) => {
  message.delete()
  let cryptoCurrency = args[0].toUpperCase()
  let symbol = args[1] ? args[1].toUpperCase() : 'USD'
  request(`https://min-api.cryptocompare.com/data/price?fsym=${cryptoCurrency}&tsyms=${symbol}`, function (err, response, body) {
    if (err) {
      message.channel.send('```' + err + '```Please, report this error here with a screenshot https://github.com/LucasCtrl/CryptoBot/issues/new')
      return
    }
    try {
      let data = JSON.parse(body)
      if (!data[symbol]) {
        message.channel.send('Please select a correct currency or symbol')
      } else {
        message.channel.send(`1 ${cryptoCurrency} costs ${data[symbol]} ${symbol}`)
      }
    } catch (err) {
      message.channel.send('```' + err + '```Please, report this error here with a screenshot https://github.com/LucasCtrl/CryptoBot/issues/new')
    }
  })
}
