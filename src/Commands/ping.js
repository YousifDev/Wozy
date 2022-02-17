const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "ping",
	aliases: ["latency"],
	async execute(message, args, client) {
		await message.channel.send({
			embeds: [
				new MessageEmbed().setTitle(`🏓 Global Latency Summary:`).setDescription(`
				Discord API Latency: \`...ms\`
				Discord Request Latency: \`...ms\``).setFooter(`Shanks • Asked by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
					.setTimestamp()
			]
		}).then(async (msg) => {
			await msg.edit({
				embeds: [
					new MessageEmbed().setTitle(`🏓 Global Latency Summary:`).setDescription(`
					Discord API Latency: \`${client.ws.ping}ms\`
					Discord Request Latency: \`${message.createdTimestamp - msg.createdTimestamp}ms\``).setFooter(`Shanks • Asked by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
						.setTimestamp()
				]
			})
		});
	}
}