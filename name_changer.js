require('dotenv').config();
const Discord = require('discord.js');
const RandomName = require('node-random-name');
const client = new Discord.Client();
const name_options = {
    first: true,
    gender: 'male',
};
let guild;
let member;

client.on('ready', async()=>{
    console.log(`Logged in as ${client.user.tag}`);
    guild = await client.guilds.fetch(process.env.GUILD_ID);
    member = await guild.members.fetch(process.env.USER_ID);
});

setInterval(()=>{
    if(member)
        member.setNickname(RandomName(name_options));
}, 5000);

client.login(process.env.TOKEN)
