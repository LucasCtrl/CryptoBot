const request = require('request')

exports.run = (bot, message, args) => {
  message.delete()
  let cryptoCurrency = args[0]
  let symbol = args[1] ? args[1] : 'USD'
  request(`https://min-api.cryptocompare.com/data/price?fsym=${cryptoCurrency}&tsyms=${symbol}`, function (err, response, body) {
    if (err) {
      message.channel.send('```' + err + '```')
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
      message.channel.send('```' + err + '```')
    }
  })
}
