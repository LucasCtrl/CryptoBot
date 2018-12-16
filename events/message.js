module.exports = (bot, hook, message) => {
  // Ignore all bots
  if (message.author.bot) return

  // Ignore bot itself
  if (message.author.id === bot.user.id) return

  // Ignore Private Message
  if (message.channel.recipient) return

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(bot.config.prefix) !== 0) return

  // Our standard argument/command name definition.
  const args = message.content.slice(bot.config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  // Grab the command data from the client.commands Enmap
  const cmd = bot.commands.get(command)

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return

  // Run the command
  cmd.run(bot, message, args)

  // Send a message using the webhook
  const embeds = [{
    'color': 16761095,
    'description': `**${bot.config.prefix}${command}** - From ${message.author.tag}`,
    'fields': [
      {
        'name': '___',
        'value': ':round_pushpin: **GUILD INFO**',
        'inline': false
      },
      {
        'name': 'Guild name',
        'value': message.guild.name,
        'inline': true
      },
      {
        'name': 'Guild id',
        'value': message.guild.id,
        'inline': true
      },
      {
        'name': 'Guild size',
        'value': message.guild.memberCount,
        'inline': true
      },
      {
        'name': 'Guild owner',
        'value': `**${message.guild.owner.user.tag}** ${message.guild.owner.id}`,
        'inline': false
      }
    ]
  }]
  hook.send({ embeds })
}
