const { EmbedBuilder } = require('discord.js');
module.exports = (queue) => {
    const emptyQueue = new EmbedBuilder()
    .setAuthor({name: `I ran out of sound to conjure. ❌`})
    .setColor('#2f3136')

    queue.metadata.send({ embeds: [emptyQueue] })
}
