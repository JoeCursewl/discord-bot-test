import { Client } from 'discord.js'
import { configDotenv } from 'dotenv'

configDotenv()

const { BRD_BOT_TOKEN } = process.env;
const client = new Client({ intents: 3276799 })

client.on('ready', () => {
    console.log(`BRD | BOT'S READY... ${client.user.tag}`)
})

client.login(BRD_BOT_TOKEN);