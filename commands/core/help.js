const { AttachmentBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    name: 'help',
    description: "All I have to offer.",
    showHelp: false,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .setDescription('we watch.')
        .addFields([ { name: `Enabled - ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') } ])
        .setTimestamp()
        .setFooter({ text: 'beanjuice ❤️', iconURL: inter.member.avatarURL({ dynamic: true })});

        inter.editReply({ embeds: [embed] });
    },
};