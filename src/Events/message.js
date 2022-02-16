module.exports = {
	name: "messageCreate",
	async execute(message, client) {
		if (message.author.bot || !message.guild) return;
		const args = message.content.trim().split(/ +/);
		const cmdName = args.shift().toLowerCase();
		const cmd = client.commands.get(cmdName) || client.aliases.get(cmdName);
		if(!cmd) return;
		try {
			cmd.execute(message, args, client);
		} catch(err) { 
			console.log(err);
		}
	}
}