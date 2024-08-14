const { EmbedBuilder } = require('discord.js');

module.exports = (queue) => {
    if (!client.config.app.ExtraMessages) return

    const audioTracksAdd = new EmbedBuilder()
    .setAuthor({name: `All sounds have been added to my memory ✅`})
    .setColor('#2f3136')

queue.metadata.send({ embeds: [audioTracksAdd] })

}
