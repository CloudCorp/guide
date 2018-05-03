module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	execute(message) {
		message.channel.send(`Pong! \`${client.pings[0]}ms\``);
	},
};
