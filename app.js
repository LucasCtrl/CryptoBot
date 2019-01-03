const Discord = require('discord.js')
const Enmap = require('enmap')
const fs = require('fs')

const config = require('./config.json')

const bot = new Discord.Client()
const privateHook = new Discord.WebhookClient(config.webhookPrivate.id, config.webhookPrivate.token)

// Pass data through bot
bot.config = config
bot.commands = new Enmap()

// Call all events
fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    const event = require(`./events/${file}`)
    let eventName = file.split('.')[0]
    bot.on(eventName, event.bind(null, bot, privateHook))
  })
})

// Call all commands
fs.readdir('./commands/', (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    if (!file.endsWith('.js')) return
    let props = require(`./commands/${file}`)
    let commandName = file.split('.')[0]
    // console.log(`Attempting to load command ${commandName}`)
    bot.commands.set(commandName, props)
  })
})

bot.login(config.token)
