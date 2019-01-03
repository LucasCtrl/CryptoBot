module.exports = (bot, privateHook, message) => {
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
  privateHook.send('**' + bot.config.prefix + command + '** - From `' + message.author.tag + '` on `' + message.guild.name + '`')
}
