exports.run = (bot, message) => {
  message.delete()
  let memoryStats = process.memoryUsage()
  const embed = {
    // 'description': 'Voici les statistiques à propos du Shard `#' + bot.shard.id + '` sur ' + (bot.shard.count - 1) + " .\nLe robot est divisé en plusieurs morceaux nommés _shard_ afin qu'il soit plus optimisé et qu'il soit plus agréable à l'utilisation.",
    'color': 16761095,
    'footer': {
      'icon_url': message.author.avatarURL,
      'text': 'Requested by ' + message.author.username
    },
    // 'thumbnail': {
    //   'url': 'https://mrrobot.thomasbnt.fr/assets/img/mrrobot-icon.jpg'
    // },
    'author': {
      'name': 'Stats - ' + bot.user.username,
      // 'url': 'https://kimi-protect.fr',
      'icon_url': bot.user.avatarURL
    },
    'fields': [
      {
        'name': 'Number of servers ¬',
        'value': bot.guilds.size.toLocaleString(),
        'inline': true
      },
      {
        'name': 'Number of users ¬',
        'value': bot.guilds.reduce((mem, g) => (mem += g.memberCount), 0),
        'inline': true
      },
      {
        'name': 'Number of emojis ¬',
        'value': bot.emojis.size,
        'inline': true
      },
      {
        'name': 'Number of channels ¬',
        'value': bot.channels.size,
        'inline': true
      },
      {
        'name': 'Memory usage ¬',
        'value': Math.ceil(memoryStats.heapUsed / 1048576) + ' Mo',
        'inline': true
      },
      {
        'name': 'Discord.js version ¬',
        'value': bot.config.DiscordJSVersion,
        'inline': true
      },
      {
        'name': 'Bot version ¬',
        'value': bot.config.version,
        'inline': true
      },
      {
        'name': 'Uptime',
        'value': `${Math.round(bot.uptime / (1000 * 60 * 60))}h ${Math.round(bot.uptime / (1000 * 60)) % 60}min ${Math.round(bot.uptime / 1000) % 60}s`,
        'inline': false
      }
    ]
  }
  message.channel.send({ embed })
}
