module.exports = (bot, privateHook, guild) => {
  // Send a message using the webhook
  privateHook.send('Leave **' + guild.name + '** with ' + guild.memberCount + ' users')
}
