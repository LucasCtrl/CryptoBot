exports.run = (bot, message) => {
  message.delete()
  const embed = {
    // 'description': 'Voici les statistiques à propos du Shard `#' + bot.shard.id + '` sur ' + (bot.shard.count - 1) + " .\nLe robot est divisé en plusieurs morceaux nommés _shard_ afin qu'il soit plus optimisé et qu'il soit plus agréable à l'utilisation.",
    'color': 16761095,
    // 'thumbnail': {
    //   'url': bot.user.avatarURL
    // },
    // 'author': {
    //   'name': 'Stats - ' + bot.user.username,
    //   'icon_url': bot.user.avatarURL
    // },
    'fields': [
      {
        'name': '___',
        'value': ':round_pushpin:  **INFORMATIONS**',
        'inline': false
      },
      {
        'name': 'Add CryptoBot on your server',
        'value': 'https://discordapp.com/oauth2/authorize?client_id=390170456067538944&scope=bot&permissions=75776',
        'inline': true
      },
      {
        'name': 'Support',
        'value': 'https://discord.gg/nEDcagb',
        'inline': true
      },
      {
        'name': 'Source code',
        'value': 'https://github.com/LucasCtrl/CryptoBot',
        'inline': true
      },
      {
        'name': ':file_folder: Version',
        'value': bot.config.version,
        'inline': true
      },
      {
        'name': '___',
        'value': ':round_pushpin:  **COMMANDS LIST**',
        'inline': false
      },
      {
        'name': `${bot.config.prefix}money <MONEY> <CURRENCY> :moneybag:`,
        'value': 'Get value of a cryptocurrency. You can convert the value of a cryptocurrency into the currency you want with <CURRENCY>. By default the currency is convert to USD',
        'inline': true
      },
      {
        'name': `${bot.config.prefix}dailymarket <CURRENCY> :money_with_wings:`,
        'value': 'Daily marketcap (Updated daily at 00:00 GTM). By default the currency is USD but you can use BTC, EUR, ETH and many more',
        'inline': true
      },
      {
        'name': `${bot.config.prefix}stats :notepad_spiral:`,
        'value': 'Display some info about CryptoBot',
        'inline': true
      },
      {
        'name': `${bot.config.prefix}help :question:`,
        'value': 'Display this menu',
        'inline': true
      }
    ]
  }
  message.author.send({ embed })
  message.channel.send(':round_pushpin: The commands list have been sent to you as a private message').then(m => {
    setTimeout(() => { m.delete() }, 5000)
  })
}
