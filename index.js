const Discord = require('discord.js-self')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`--------------------------\nConnected to ${client.user.tag}\n--------------------------`)
    client.user.setPresence({
        afk: true,
        status: 'idle',
        activity:{
            name: 'Testing | AFK',
            type: 'WATCHING'
        }
    }
    )
})

client.on('messageReactionAdd', (reaction, user) => {
    let shouldReact = false

    if(reaction.emoji.name == '🎉'){
        if(user.id === client.user.id) return
        else{
            if(user.bot === false){
                shouldReact = true
            }
        }
    }

    if(shouldReact === true){
        setTimeout(() => {
            reaction.message.react('🎉')
        }, 5000)
    }
})

require('dotenv-flow').config()
const token = process.env.TOKEN
client.login(token)