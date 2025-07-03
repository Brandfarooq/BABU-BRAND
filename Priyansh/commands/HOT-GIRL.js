module.exports.config = {
  name: "8907",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FAROOQ BABU",
  description: "hot girls photos",
  commandCategory: "Random-IMG",
  usages: "Hot Girl",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/W1QtVxm.jpeg","https://i.imgur.com/0mjQW3T.jpeg","https://i.imgur.com/lWEkGlr.jpeg","https://i.imgur.com/ppJHIpb.jpeg","https://i.imgur.com/NkEZ7ya.jpeg","https://i.imgur.com/gFaISHO.jpeg","https://i.imgur.com/m39H7a2.jpeg","https://i.imgur.com/WojjoVv.jpeg","https://i.imgur.com/hqJ7HCZ.jpeg","https://i.imgur.com/g7dNYxR.jpeg","https://i.imgur.com/eNyOG2v.jpeg","https://i.imgur.com/2qqsoXz.jpeg","https://i.imgur.com/tq6wtrO.jpeg","https://i.imgur.com/qHaQqX0.jpeg","https://i.imgur.com/ZR5Hm1I.jpeg","https://i.imgur.com/nrEvhAC.jpeg","https://i.imgur.com/mn6AAnH.jpeg","https://i.imgur.com/2aG32pz.jpeg","https://i.imgur.com/PWOV3bP.jpeg","https://i.imgur.com/Qt8511N.jpeg","https://i.imgur.com/ykS0S5z.jpeg","https://i.imgur.com/P6uZUF7.jpeg","https://i.imgur.com/AcqZ5It.jpeg","https://i.imgur.com/Xp82D81.jpeg","https://i.imgur.com/dggKc1D.jpeg","https://i.imgur.com/FAIaALf.jpeg","https://i.imgur.com/lNeDjYF.jpeg","https://i.imgur.com/HFipSyl.jpeg","https://i.imgur.com/Z999bfk.jpeg","https://i.imgur.com/ntCL39i.jpeg","https://i.imgur.com/mNwyVqZ.jpeg","https://i.imgur.com/GuuGzuP.jpeg","https://i.imgur.com/b5C4Ilm.jpeg","https://i.imgur.com/NAffKom.jpeg","https://i.imgur.com/4cIrOZO.jpeg","https://i.imgur.com/l7XkUBE.jpeg","https://i.imgur.com/jgzi6Bq.jpeg","https://i.imgur.com/S1StP3a.jpeg","https://i.imgur.com/HIB1WDK.jpeg"
         ];
         var callback = () => api.sendMessage({body:`💝💝`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
          return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
       };
