import discord

class BotBrd(discord.Client):
    async def on_ready(self):
        print(f'Logged on as {self.user}!')

    async def on_message(self, message):
        print(f'Message from {message.author}: {message.content}')

client = BotBrd()
client.run('MTEyMjYyMjE3NDIyMjYzNTExMA.GQnrZT.GTAB5zsA7q5m8kSg5bpSVYQcrV5bqPWUdM8E9s')