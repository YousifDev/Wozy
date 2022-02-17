const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "repeat",
	aliases: ["loop"],
	async execute(message, args, client) {
		if (!args.join(" ")) return await message.reply(`> ${client.config.emojis.warning}-Missing **arguments**!\n**•** Provide a Type of RepeatMode **[**\`'OFF', 'SONG', 'QUEUE'\`**]**.`);
		if (!message.member.voice.channel) return await message.reply(`> ${client.config.emojis.error}-You're not in a **VoiceChannel**!`)
		if (message.guild.me.voice.channel && message.member.voice.channelId !== message.guild.me.voice.channelId) return await message.reply(`> ${client.config.emojis.error}-You're not in the same **VoiceChannel**!`);
		const queue = client.distube.getQueue(message.guildId);
		if (!queue) return await message.reply(`> ${client.config.emojis.warning}-There's no **queue** in the server!`);
		if (args[0].toLowerCase() === "queue") {
			if (queue.repeatMode === 2) {
				await message.reply(`> ${client.config.emojis.warning}-RepeatMode of Queue is already **Enabled**!`);
			} else {
				await message.reply(`> ${client.config.emojis.success}-RepeatMode of Queue now is **Enable** .`);
				await client.distube.setRepeatMode(message.guildId, 2);
			}
		} else if (args[0].toLowerCase() === "song") {
			if (queue.repeatMode === 1) {
				await message.reply(`> ${client.config.emojis.warning}-RepeatMode of Song is already **Enabled**!`);
			} else {
				await message.reply(`> ${client.config.emojis.success}-RepeatMode of Song now is **Enable** .`);
				await client.distube.setRepeatMode(message.guildId, 1);
			}
		} else if (args[0].toLowerCase() === "disable" || args[0].toLowerCase() === "off") {
			if (queue.repeatMode === 0) {
				await message.reply(`> ${client.config.emojis.warning}-RepeatMode is not **Enabled**!`);
			} else {
				await message.reply(`> ${client.config.emojis.success}-RepeatMode now is **Disable** .`);
				await client.distube.setRepeatMode(message.guildId, 0);
			}
		} else {
			await message.reply(`> ${client.config.emojis.warning}-Missing **arguments** (**Queue, Song, Disable**)!`);
		}
	}
}