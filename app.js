/* eslint-disable no-return-assign,no-eval */
const Discord = require('discord.js')
const request = require('request')
const ftploy = require('ftploy')
const JSFtp = require('jsftp')
const fs = require('fs')
const client = new Discord.Client({autoReconnect: true})

const config = require('./config.json')
const prefix = config.prefix

const ftpInformation = {
  username: config.FTPLogin.user,
  password: config.FTPLogin.password,
  host: config.FTPLogin.host,
  port: config.FTPLogin.port,
  localRoot: './',
  remoteRoot: '../../../',
  files: [
    'cryptobotAPI.json'
  ]
}
const Ftp = new JSFtp({
  host: config.FTPLogin.host,
  port: config.FTPLogin.port,
  user: config.FTPLogin.user,
  pass: config.FTPLogin.password
})

const clean = text => {
  if (typeof (text) === 'string') {
    return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203))
  } else {
    return text
  }
}

client.on('guildCreate', guild => {
  Ftp.raw('dele', 'C:\\cryptobotAPI.json')
  let guildsInformation = {
    totalUser: client.guilds.reduce((mem, g) => mem += g.memberCount, 0),
    totalServer: client.guilds.size.toLocaleString()
  }
  fs.writeFile('./cryptobotAPI.json', JSON.stringify(guildsInformation), (err) => {
    if (err) console.error(err)
  })
  ftploy(ftpInformation)
  console.log(`>_ Bot added on : ${guild.name} (${guild.id})`)
  console.log('>_ ' + client.guilds.size.toLocaleString() + ' servers | ' + client.guilds.reduce((mem, g) => mem += g.memberCount, 0) + ' users')
  console.log('>_ ')
  client.user.setGame('$help - ' + client.guilds.size.toLocaleString() + ' servers | ' + client.guilds.reduce((mem, g) => mem += g.memberCount, 0) + '  Users')
})
client.on('guildDelete', guild => {
  Ftp.raw('dele', 'C:\\cryptobotAPI.json')
  let guildsInformation = {
    totalUser: client.guilds.reduce((mem, g) => mem += g.memberCount, 0),
    totalServer: client.guilds.size.toLocaleString()
  }
  fs.writeFile('./cryptobotAPI.json', JSON.stringify(guildsInformation), (err) => {
    if (err) console.error(err)
  })
  ftploy(ftpInformation)
  console.log(`>_ Bot deleted on : ${guild.name} (${guild.id})`)
  console.log('>_ ' + client.guilds.size.toLocaleString() + ' servers | ' + client.guilds.reduce((mem, g) => mem += g.memberCount, 0) + ' users')
  console.log('>_')
  client.user.setGame('$help - ' + client.guilds.size.toLocaleString() + ' servers | ' + client.guilds.reduce((mem, g) => mem += g.memberCount, 0) + '  Users')
})

client.on('guildMemberAdd', (member) => {
  Ftp.raw('dele', 'C:\\cryptobotAPI.json')
  let guildsInformation = {
    totalUser: client.guilds.reduce((mem, g) => mem += g.memberCount, 0),
    totalServer: client.guilds.size.toLocaleString()
  }
  fs.writeFile('./cryptobotAPI.json', JSON.stringify(guildsInformation), (err) => {
    if (err) console.error(err)
  })
  ftploy(ftpInformation)
  const guild = member.guild
  client.user.setGame('$help - ' + client.guilds.size.toLocaleString() + ' servers | ' + client.guilds.reduce((mem, g) => mem += g.memberCount, 0) + '  Users')
  console.log(`>_ ${member.user.username}#${member.user.discriminator} as join ${guild.name} (${guild.id})`)
})
client.on('guildMemberRemove', (member) => {
  Ftp.raw('dele', 'C:\\cryptobotAPI.json')
  let guildsInformation = {
    totalUser: client.guilds.reduce((mem, g) => mem += g.memberCount, 0),
    totalServer: client.guilds.size.toLocaleString()
  }
  fs.writeFile('./cryptobotAPI.json', JSON.stringify(guildsInformation), (err) => {
    if (err) console.error(err)
  })
  ftploy(ftpInformation)
  const guild = member.guild
  client.user.setGame('$help - ' + client.guilds.size.toLocaleString() + ' servers | ' + client.guilds.reduce((mem, g) => mem += g.memberCount, 0) + '  Users')
  console.log(`>_ ${member.user.username}#${member.user.discriminator} as left ${guild.name} (${guild.id})`)
})

client.on('ready', () => {
  Ftp.raw('dele', 'C:\\cryptobotAPI.json')
  let guildsInformation = {
    totalUser: client.guilds.reduce((mem, g) => mem += g.memberCount, 0),
    totalServer: client.guilds.size.toLocaleString()
  }
  fs.writeFile('./cryptobotAPI.json', JSON.stringify(guildsInformation), (err) => {
    if (err) console.error(err)
  })
  ftploy(ftpInformation)
  console.log('########################################')
  console.log('#                                      #')
  console.log('#               CryptoBot              #')
  console.log('#                V_' + config.botVersion + '               #')
  console.log('#                                      #')
  console.log('########################################')
  console.log('>_ ' + client.guilds.size + ' servers | ' + client.guilds.reduce((mem, g) => mem += g.memberCount, 0) + ' users')
  console.log('>_ ')
  client.user.setGame('$help - ' + client.guilds.size + ' servers | ' + client.guilds.reduce((mem, g) => mem += g.memberCount, 0) + ' users')
})

client.on('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  function mentionUser () {
    for (let i = -2; i < args.length; i++) {
      const element = args[i]
      if (element === '<@' + client.user.id + '>') {
        return true
      }
    }
  }
  if (command === 'money') {
    message.delete()
    message.channel.send({
      embed: {
        color: 16750848,
        title: 'Please wait ...'
      }
    })
      .then((message) => {
        request('https://api.coinmarketcap.com/v1/ticker/?limit=0', function (err, response, body) {
          if (err) {
            message.channel.sendMessage('```Error! ' + err + '```')
            return false
          }
          const data = JSON.parse(body)

          var moneyId

          function isAvailable () {
            for (let prop in data) {
              if (args[0] === data[prop].id || args[0] === data[prop].name || args[0] === data[prop].symbol) {
                moneyId = data[prop].id
                return true
              }
            }
          }

          if (isAvailable() === true) {
            request('https://api.coinmarketcap.com/v1/ticker/' + moneyId + '/', function (err, response, body) {
              if (err) {
                message.channel.sendMessage('```Error! ' + err + '```')
                return false
              }

              const data = JSON.parse(body)
              const embed = new Discord.RichEmbed()
                .setColor('#ffc107') // Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
                .setTitle(data[0].name + ' (' + data[0].symbol + ') stats')
                .setDescription('[More info here](https://coinmarketcap.com/currencies/' + data[0].id + '/)')
                .setThumbnail('https://files.coinmarketcap.com/static/img/coins/32x32/' + data[0].id + '.png')
                .addField('Price (in USD)', '$' + data[0].price_usd)
                .addField('Percentage Change (1hr)', data[0].percent_change_1h + '%')
                .addField('Percentage Change (24hr)', data[0].percent_change_24h + '%')
              message.edit({embed})
            })
          }
          if (isAvailable() !== true) {
            const embed = new Discord.RichEmbed()
              .setColor('#ffc107')
              .setTitle('Not available')
            message.edit({embed})
          }
        })
      })
  }
  if (command === 'marketcap') {
    message.delete()
    message.channel.send({
      embed: {
        color: 16750848,
        title: 'Please wait ...'
      }
    })
      .then((message) => {
        request('https://api.coinmarketcap.com/v1/global/', function (err, response, body) {
          if (err) {
            message.channel.sendMessage('```Error! ' + err + '```')
            return false
          }

          const data = JSON.parse(body)
          const embed = new Discord.RichEmbed()
            .setColor('#ffc107') // Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
            .setTitle('Market Capitalization Stats')
            .setDescription('[More info here](https://coinmarketcap.com/)')
            .setThumbnail('https://coinmarketcap.com/static/img/CoinMarketCap.png')
            .addField('Total Market Cap (in USD)', '$' + data.total_market_cap_usd)
            .addField('Last 24 hour (in USD)', '$' + data.total_24h_volume_usd)
            .addField('Total Bitcoin percentage', data.bitcoin_percentage_of_market_cap + '%')
          message.edit({embed})
        })
      })
  }
  if (command === 'stats') {
    const embed = new Discord.RichEmbed()
      .setColor('#ffc107') // Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
      // .setAuthor('CryptoBot', 'https://files.coinmarketcap.com/static/img/coins/32x32/bitcoin.png')
      // .setTitle('This is your title, it can hold 256 characters')
      // .setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')
      // .setDescription('This is the main body of text, it can hold 2048 characters.')
      .setThumbnail('https://files.coinmarketcap.com/static/img/coins/32x32/bitcoin.png')
      .addField('Total server', client.guilds.size, true)
      .addField('Total users', client.guilds.reduce((mem, g) => mem += g.memberCount, 0), true)
      .addField('Version:', config.botVersion, true)
      .addField('Discord.js version:', '11.2.1', true)
      .addField('Made by:', (Math.round(client.uptime / (1000 * 60 * 60))) + ' hour(s), ' + (Math.round(client.uptime / (1000 * 60)) % 60) + ' minute(s), and ' + (Math.round(client.uptime / 1000) % 60) + ' second(s)', true)
      // .addBlankField(true)
      // .addField('Inline Field 3', 'You can have a maximum of 25 fields.', true)
      // .setImage('http://i.imgur.com/yVpymuV.png')
      // .setFooter('This is the footer text, it can hold 2048 characters', 'http://i.imgur.com/w1vhFSR.png')
      // .setTimestamp()
    message.channel.send({embed})
  }
  if (command === 'help') {
    const embed = new Discord.RichEmbed()
      .setColor('#ffc107') // Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
      .setAuthor('CryptoBot', 'https://files.coinmarketcap.com/static/img/coins/32x32/bitcoin.png')
      .addField(':information_source: INFORMATIONS', 'Some informations about the bot')
      .addField('Add the bot to your server', 'https://cryptobot.lucasalt.fr/', true)
      .addField('Version:', config.botVersion, true)
      .addField('Discord.js version:', '11.2.1', true)
      .addField('Made by:', '<@176759285366128641>', true)
      .addField('Join me here:', 'https://discord.gg/4HqYAjy', true)
      .addField('Now available on GitHub:', 'https://github.com/MrDragonXM15/CryptoBot')
      .addField(':level_slider: COMMANDS', 'All commands for the bot')
      .addField('$help', 'See all commands in DM')
      .addField('$hhelp', 'See all commands in global channel')
      .addField('$money <money>', 'See the value of a currency. \nSupport name and symbol \n__Example :__ `$money bitcoin` or `$money BTC`')
      .addField('$marketcap', 'See all informations about the martket cap')
      .addField('$stats', 'Some stats about the bot')
      .addField(':dollar: SUPPORT ME', 'You can send me some cryptocurrencies to help me in the development of the bot')
      .addField('Dogecoin', '`DNbD8 Dnts staV JxeC 54gT wdGL LdLW XuTgX`')
      .addField('Litecoin', '`LPTu 5JMw BVAw RLni5 Jv6R 9xK9 Y9QX vXo1f`')
      .addField('Dash', '`XTxxG FTdY f2sv rAi2 Ym3S GUbG XnBL 12gor`')
      .addField('Ethereum', '`0x58 94e3 2413 34df 48f5b 1992 1444 2bfd b0bf f4b5b`')
    message.reply('A message containing the bot commands has been sent to you!')
    message.author.send({embed})
  }
  if (command === 'hhelp') {
    const embed = new Discord.RichEmbed()
      .setColor('#ffc107') // Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
      .setAuthor('CryptoBot', 'https://files.coinmarketcap.com/static/img/coins/32x32/bitcoin.png')
      .addField(':information_source: INFORMATIONS', 'Some informations about the bot')
      .addField('Add the bot to your server', 'https://cryptobot.lucasalt.fr/', true)
      .addField('Version:', config.botVersion, true)
      .addField('Discord.js version:', '11.2.1', true)
      .addField('Made by:', '<@176759285366128641>', true)
      .addField('Join me here:', 'https://discord.gg/4HqYAjy', true)
      .addField('Now available on GitHub:', 'https://github.com/MrDragonXM15/CryptoBot')
      .addField(':level_slider: COMMANDS', 'All commands for the bot')
      .addField('$help', 'See all commands in DM')
      .addField('$hhelp', 'See all commands in global channel')
      .addField('$money <money>', 'See the value of a currency. \nSupport name and symbol \n__Example :__ `$money bitcoin` or `$money BTC`')
      .addField('$marketcap', 'See all informations about the martket cap')
      .addField('$stats', 'Some stats about the bot')
      .addField(':dollar: SUPPORT ME', 'You can send me some cryptocurrencies to help me in the development of the bot')
      .addField('Dogecoin', '`DNbD8 Dnts staV JxeC 54gT wdGL LdLW XuTgX`')
      .addField('Litecoin', '`LPTu 5JMw BVAw RLni5 Jv6R 9xK9 Y9QX vXo1f`')
      .addField('Dash', '`XTxxG FTdY f2sv rAi2 Ym3S GUbG XnBL 12gor`')
      .addField('Ethereum', '`0x58 94e3 2413 34df 48f5b 1992 1444 2bfd b0bf f4b5b`')
    message.channel.send({embed})
  }
  if (command === 'eval') {
    if (message.author.id !== config.ownerID) return
    try {
      const code = args.join(' ')
      let evaled = eval(code)
      if (typeof evaled !== 'string') {
        evaled = require('util').inspect(evaled)
      }
      message.channel.send(clean(evaled), {code: 'xl'})
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)
    }
  }
  if (mentionUser() || message.content.startsWith('<@' + client.user.id + '>')) {
    message.react('👌')
  }
})

client.login(config.token.prod)
