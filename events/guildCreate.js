module.exports = (bot, hook, guild) => {
  // Send a message using the webhook
  const embeds = [{
    'color': 3983420,
    'description': `Join **${guild.name}**`,
    'fields': [
      {
        'name': '___',
        'value': ':round_pushpin: **GUILD INFO**',
        'inline': false
      },
      {
        'name': 'Guild name',
        'value': guild.name,
        'inline': true
      },
      {
        'name': 'Guild id',
        'value': guild.id,
        'inline': true
      },
      {
        'name': 'Guild size',
        'value': guild.memberCount,
        'inline': true
      },
      {
        'name': 'Guild owner',
        'value': `**${guild.owner.user.tag}** ${guild.owner.id}`,
        'inline': false
      }
    ]
  }]
  hook.send({ embeds })
  console.log(guild)
}
