const Discord = require('discord.js')
const request = require('request')
const bot = new Discord.Client()

const config = require('./config.json')
const prefix = config.prefix

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', (message) => {
  if (message.author.bot) return

  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  if (command === 'ping') {
    message.reply('Pong !')
  }
  if (command === 'money') {
    let cryptoCurrency = args[0]
    let symbol = args[1] ? args[1] : 'USD'
    request(`https://min-api.cryptocompare.com/data/price?fsym=${cryptoCurrency}&tsyms=${symbol}`, function (err, response, body) {
      if (err) {
        message.channel.send('```' + err + '```')
        return
      }
      try {
        let data = JSON.parse(body)
        console.log(data)
        if (!data[symbol]) {
          message.channel.send('Please select a correct currency or symbol')
        } else {
          message.channel.send(`${data[symbol]} ${symbol}`)
        }
      } catch (err) {
        message.channel.send('```' + err + '```')
      }
    })
  }
})

bot.login(config.token)
