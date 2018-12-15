module.exports = (bot) => {
  console.log(`Ready to serve ${bot.guilds.size} servers`)

  bot.user.setActivity(`${bot.config.prefix}help`, { type: 'WATCHING' })
    .catch(console.error)

  setInterval(game1 => {
    bot.user.setActivity(`${bot.guilds.size.toLocaleString()} servers - ${bot.guilds.reduce((mem, g) => (mem += g.memberCount), 0)} users`, { type: 'WATCHING' })
      .catch(console.error)
    setTimeout(game2 => {
      bot.user.setActivity(`${bot.config.prefix}help`, { type: 'WATCHING' })
        .catch(console.error)
    }, 100000)
  }, 200000)
}
