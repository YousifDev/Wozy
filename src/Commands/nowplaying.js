const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "nowplaying",
	aliases: ["np"],
	async execute(message, args, client) {
		const queue = client.distube.getQueue(message.guild.id);
		if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);
		const progress = queue.createProgressBar();
		const timestamp = queue.getPlayerTimestamp();
		if (timestamp.progress == 'Infinity') return message.channel.send(`Playing a live, no data to display 🎧`);
		message.channel.send(`${progress} (**${timestamp.progress}**%)`);
	}
}
