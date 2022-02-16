module.exports = {
	name: "ready",
	async execute(c, client) {
		console.log(`Logged in as : ${client.user.username} ""`);
	}
}