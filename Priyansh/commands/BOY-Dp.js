module.exports.config = {
  name: "boydp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "FAROOQ BABU",
  description: "boy Dp photos",
  commandCategory: "Random-IMG",
  usages: "boy dp",
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
      "https://i.imgur.com/hXdXZAZ.jpeg","https://i.imgur.com/jPmvQCV.jpeg","https://i.imgur.com/gSx59Wp.jpeg","https://i.imgur.com/vLIlUMv.jpeg","https://i.imgur.com/l2Kt4Yt.jpeg","https://i.imgur.com/b8hxinW.jpeg","https://i.imgur.com/rBkuBOG.jpeg","https://i.imgur.com/WRZwkel.jpeg","https://i.imgur.com/1hmWSY3.jpeg","https://i.imgur.com/RtXQ3PZ.jpeg","https://i.imgur.com/exr1MPd.jpeg","https://i.imgur.com/0X7t8Lz.jpeg","https://i.imgur.com/TAsta3l.jpeg","https://i.imgur.com/yMFaPSA.jpeg","https://i.imgur.com/AMVze0y.jpeg","https://i.imgur.com/Y1sschi.jpeg","https://i.imgur.com/9n3X4Kd.jpeg","https://i.imgur.com/kWyyoiR.jpeg","https://i.imgur.com/K0QckQP.jpeg","https://i.imgur.com/GlPxpUK.jpeg","https://i.imgur.com/rZHX86E.jpeg","https://i.imgur.com/Sd2eabW.jpeg","https://i.imgur.com/y3mUnjo.jpeg","https://i.imgur.com/Mc8HDig.jpeg","https://i.imgur.com/VTNEnQr.jpeg","https://i.imgur.com/ajNDapG.jpeg","https://i.imgur.com/89Si8BY.jpeg","https://i.imgur.com/SqMevPR.jpeg","https://i.imgur.com/4Gh2P80.jpeg","https://i.imgur.com/tpiXwRz.jpeg","https://i.imgur.com/rCjss3O.jpeg","https://i.imgur.com/qmadeKR.jpeg","https://i.imgur.com/oT2Kzzn.jpeg","https://i.imgur.com/C7YsSMY.jpeg","https://i.imgur.com/92xz5ab.jpeg"
           ];
     var callback = () => api.sendMessage({body:`💝💝💝`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
