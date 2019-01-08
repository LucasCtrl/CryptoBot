const request = require('request')

exports.run = (bot, message, args) => {
  message.delete()
  let symbol = args[0] ? args[0].toUpperCase() : 'USD'
  request(`https://min-api.cryptocompare.com/data/exchange/histoday?tsym=${symbol}&limit=1`, function (err, response, body) {
    if (err) {
      message.channel.send('```' + err + '```Please, report this error on github with a screenshot https://github.com/LucasCtrl/CryptoBot/issues/new')
      return
    }
    try {
      let data = JSON.parse(body)
      if (!data) {
        message.reply('Please select a correct symbol (USD, EUR, ...)').then(m => { setTimeout(() => { m.delete() }, 5000) })
      } else {
        message.channel.send(`Total marketcap: ${data.Data[0].volume} ${symbol}`)
      }
    } catch (err) {
      message.channel.send('```' + err + '```Please select a correct symbol (USD, EUR, ...) or report this error on github with a screenshot https://github.com/LucasCtrl/CryptoBot/issues/new')
    }
  })
}
