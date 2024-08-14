const { EmbedBuilder } = require('discord.js');

module.exports = (queue, error) => {
    
    const ErrorEmbed = new EmbedBuilder()
    .setAuthor({name: `I don't have enough mana to conjure music, please tell my owner.`})
    .setColor('#EE4B2B')

queue.metadata.send({ embeds: [ErrorEmbed] })

console.log(`Error emitted from the PLayer ${error.message}`);
}
