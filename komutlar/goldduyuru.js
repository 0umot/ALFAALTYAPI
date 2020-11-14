const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

module.exports.run = async (client, message, args) => {
 if (!message.guild) {
  return }  
let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.channel.send(":x: Bu Komutu Kullanabilmek İçin **Premium Üye** Olmalısın")
  }else{
      if( kullanıcı == 'gold'){

if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu Komutu Kullana Bilmek için \`Yönetici`\ Yetkisine Sahip Olman Gerek :no_entry:')

  
let dkanal = message.mentions.channels.first()
  
    if (!dkanal) {
        return message.channel.send(`Duyuru kanalı olarak ayarlamak istediğin kanalı etiketlemelisin.`)
    }
  
  if (!dkanal) return;
  
    db.set(`duyuruk_${message.guild.id}`, dkanal.name)
    message.channel.send(`Duyuru kanalı başarıyla \`#${dkanal.name}\` olarak ayarlandı.`)
}

}
  
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
  kategori: 'ayarlar',
    permLevel: 3
}

exports.help = {
    name: 'pre-duyuru-kanal',
    description: 'Duyuru kanalını ayarlar.',
    usage: 'duyuru-kanal-ayarla <#kanal>'
}