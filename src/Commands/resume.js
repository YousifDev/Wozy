module.exports = {
	name: "resume",
	aliases: ["res"],
	permissions: [],
	clientPermissions: [],
	async execute(message, args, client) {
		if (!message.member.voice.channel) return await message.reply(`> ${client.config.emojis.error}-You're not in a **VoiceChannel**!`)
		if (message.guild.me.voice.channel && message.member.voice.channelId !== message.guild.me.voice.channelId) return await message.reply(`> ${client.config.emojis.error}-You're not in the same **VoiceChannel**!`);
		const queue = client.distube.getQueue(message.guildId);
		if (!queue) return await message.reply(`> ${client.config.emojis.warning}-There's no **queue** in the server!`);
		if (queue.songs.length <= 0) return await message.reply(`> ${client.config.emojis.warning}-There's no song **playing**!`);
		if (queue.playing) return await message.reply(`> ${client.config.emojis.warning}-Song is already **resumed** .`);
		await client.distube.resume(message.guildId);
		await message.reply(`> ${client.config.emojis.music}-Song has been just **resumed** .`);
	}
}