const { joinVoiceChannel } = require("@discordjs/voice");
const { VoiceChannel } = require("../config.json");
module.exports = {
	name: "ready",
	async execute(c, client) {
		console.log(`Logged in as : ${client.user.username} ""`);
		const guild = client.guilds.cache.get("836791390100258897");
		await joinVoiceChannel({
			channelId: VoiceChannel,
			guildId: "836791390100258897",
			adapterCreator: guild.voiceAdapterCreator
		})
		setInterval(async () => {
			await joinVoiceChannel({
				channelId: VoiceChannel,
				guildId: "836791390100258897",
				adapterCreator: guild.voiceAdapterCreator
			})
		}, 60000 * 30);
	}
}