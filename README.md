# CryptoBot
> CryptoBot, your best friend on your discord server

![Bot version: 2.0.0](https://img.shields.io/badge/Bot%20version-2.0.0-brightgreen.svg?style=flat-square)
![Discord.js: 11.4.2](https://img.shields.io/badge/Discord.js-11.4.2-blue.svg?style=flat-square)

A discord bot that allows you to search for the value of all cryptocurrency available on [CryptoCompare](https://www.cryptocompare.com/).

If you want to add it on your server, it's simple, you just need to click here: [Bot invitation link](https://discordapp.com/oauth2/authorize?client_id=390170456067538944&scope=bot&permissions=75776).<br>
To see all the commands available on the bot, just write `$help` in a text channel.

## Installation

```sh
git clone https://github.com/LucasCtrl/CryptoBot
cd CryptoBot
yarn install
```

## Usage

Edit the `config.example.json` file with your informations and rename it to `config.json` and enjoy with

```sh
yarn start
```

## Release History
* 2.0.0
    * Rewriting the robot
* 1.2.3
    * Display the currency valur of a cryptocurrency in Satoshi in the `$money` command
    * Added a percent change to the `$sats` command
    * No longer adds reaction when you mention it (performance problem)
    * Add some config for FTP connection
* 1.2.2
    * Add `$sats` command that displays the current value of a cryptocurrency in satoshi
    * Fix `$help` and `$hhelp` embed message
    * Call less API in this version
* 1.2.1
    * Now the bot add a reaction when you mention it
    * No longer responds in DM channels
* 1.2.0
    * Modification of the embed message system
    * Send `$help` command in a private channel
    * Initial commit
* 1.1.3
    * Add an eval command for administration
* 1.1.2
    * Create an "API" for the official website
* 1.1.1
    * Add an information command
* 1.1.0
    * Display total users and servers
* 1.0.0
    * Initial version

## Join me

Twitter – [@LucasCtrlAlt](https://twitter.com/lucasctrlalt)<br>
Mastodon – [@LucasAlt@mstdn.io](https://mstdn.io/@lucasalt)<br>
Reddit – [MrDragonXM15](https://www.reddit.com/user/MrDragonXM15/)

Distributed under the MIT license. See [LICENSE](https://github.com/LucasCtrl/CryptoBot/blob/master/LICENSE) for more information.

## Author/Contributor

* **LucasAlt** _alias_ [@LucasCtrl](https://github.com/LucasCtrl)
* **Chet Michals** _alias_ [@chetmichals](https://github.com/chetmichals)
* [And more](https://github.com/LucasCtrl/CryptoBot/graphs/contributors)

## Contributing

1. Fork it (<https://github.com/LucasCtrl/CryptoBot/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
