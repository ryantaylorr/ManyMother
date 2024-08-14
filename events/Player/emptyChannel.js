const { EmbedBuilder } = require('discord.js');
module.exports = (queue) => {

    const emptyChannel = new EmbedBuilder()
    .setAuthor({name: `I am alone, back to the shadows.  ❌`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [emptyChannel] })
}
