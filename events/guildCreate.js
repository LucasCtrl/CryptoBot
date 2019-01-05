module.exports = (bot, privateHook, guild) => {
  // Send a message using the webhook
  privateHook.send('Join **' + guild.name + '** with ' + guild.memberCount + ' users')
}
