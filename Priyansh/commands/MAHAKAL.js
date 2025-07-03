const fs = require("fs");
module.exports.config = {
  name: "shiv",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "FAROOQ BRAND", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("ALLAH") ||
     react.includes("ALLAH") ||
     react.includes("ALLAH") ||
react.includes("ALLAH")) {
    var msg = {
        body: ` لا إله إلا ٱللَّٰهِ محمد رسول ٱللَّٰهُ
        
        *❥⋆⃝─Ξ𝐀ʟʟᴀʜ 𝐂ᴀɴ 𝐂ʜᴀɴɢᴇ 𝐄ᴠᴇʀʏᴛʜɪɴɢ 𝐈ɴ ᴀ 𝐁ʟɪɴᴋ⎯꯭⟶🩷🌙🌦️•*
        ________________________
        कर देखो,कोई दुःख तुमारे पास __________________________
        
        नहीआएगा । ༄ᶦᶰᵈ᭄🔥⃝נαι мαнαкαℓ❤️❥❥═══༄ᶦᶰᵈ᭄🙏👈`,attachment: fs.createReadStream(__dirname + `/noprefix/shiv.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
