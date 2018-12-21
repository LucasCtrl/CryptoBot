module.exports = (bot) => {
  console.log(`Ready to serve ${bot.guilds.size} servers`)

  bot.user.setActivity(`${bot.config.prefix}help`, { type: 'STREAMING' })
    .catch(console.error)

  setInterval(game1 => {
    bot.user.setActivity(`${bot.guilds.size.toLocaleString()} servers - ${bot.guilds.reduce((mem, g) => (mem += g.memberCount), 0)} users`, { type: 'STREAMING' })
      .catch(console.error)
    setTimeout(game2 => {
      bot.user.setActivity(`${bot.config.prefix}help`, { type: 'STREAMING' })
        .catch(console.error)
      setTimeout(game3 => {
        bot.user.setActivity(`https://discord.gg/nEDcagb for support`, { type: 'STREAMING' })
          .catch(console.error)
        setTimeout(game4 => {
          bot.user.setActivity(`V2 launch ! More powerful, consumes less`, { type: 'STREAMING' })
            .catch(console.error)
        }, 100000)
      }, 100000)
    }, 100000)
  }, 400000)
}
