const { EmbedBuilder } = require('discord.js');

module.exports = (queue, track) => {

    const playerSkip = new EmbedBuilder()
    .setAuthor({name: `I have banished **${track.title}** to the shadow realm. ❌`, iconURL: track.thumbnail})
    .setColor('#EE4B2B')

queue.metadata.send({ embeds: [playerSkip] })


}
