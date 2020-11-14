const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
   if (!message.guild) {
  return }
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.channel.send("<:639093401928597517:638807997522378752> Bu Komutu Kullanabilmek İçin **Premium Üye** Olmalısın")}else{
      if( kullanıcı == 'gold'){
 if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
    const botunmesajyonet = new Discord.RichEmbed()
      .setColor('8e0505')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Mesajları silebilmem için `Mesajları Yönet` yetkisine sahip olmalıyım.')
    return message.author.sendEmbed(botunmesajyonet);
  }
  let messagecount = parseInt(args.join(' '));  
  message.channel.fetchMessages({
    limit: 100
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
     .setColor('8e0505')
    .setTimestamp()
    .addField('<:639092965439963146:638808006674350119> Eylem:', 'Sohbet silme <:639092965439963146:638808006674350119>')
    .addField('<:639092965439963146:638808006674350119> Silen Premium Üye: <:639092965439963146:638808006674350119>', message.author.username)
    .addField('<:639092965439963146:638808006674350119> Sonuç: <:639092965439963146:638808006674350119>', `Başarılı`)
    return message.channel.sendEmbed(sohbetsilindi);
    console.log("Sohbet " + message.member + " tarafından silindi!");
    }
  }
  
};

    
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pre-sil',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};