import { Client } from 'discord.js'

const client = new Client({ intents: 3276799 })
const BRD_BOT_ALL_THING = 'MTEyMjYyMjE3NDIyMjYzNTExMA.GQnrZT.GTAB5zsA7q5m8kSg5bpSVYQcrV5bqPWUdM8E9s'

client.on('ready', () => {
    console.log(`BRD | BOT'S READY... ${client.user.tag}`)
})

client.login(BRD_BOT_ALL_THING);