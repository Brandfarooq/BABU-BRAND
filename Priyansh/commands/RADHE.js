const fs = require("fs");
module.exports.config = {
  name: "HARTLESS",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐅𝐀𝐑𝐎𝐎𝐐 𝐊𝐇𝐀𝐍", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("ALLAH HU AKBAR") ||
     react.includes("ALLAH") || react.includes("Hartless") || react.includes("@Hartless Queen") ||
react.includes("ALLAH") ||
react.includes("ALLAH") ||     
react.includes("ALLAH")) {
    var msg = {
        body: `*❥⋆⃝─Ξ𝐀ʟʟᴀʜ 𝐂ᴀɴ 𝐂ʜᴀɴɢᴇ 𝐄ᴠᴇʀʏᴛʜɪɴɢ 𝐈ɴ ᴀ 𝐁ʟɪɴᴋ⎯꯭⟶🩷🌙🌦️•*
        
        `,attachment: fs.createReadStream(__dirname + `/noprefix/ALLAH.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
