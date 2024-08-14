const { EmbedBuilder } = require('discord.js');

module.exports = (queue) => {

 const Disconnect = new EmbedBuilder()
    .setAuthor({name: `I have been released to the shadows. ❌`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [Disconnect] })
}
