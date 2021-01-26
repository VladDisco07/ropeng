//outdated (editing this in 2021)

const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'no';

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Bun venit ${member} pe _Club Penguin Romania_! Inainte de a scrie in chat, te rugam sa citesti regulamentul`);
});

client.login(token);
