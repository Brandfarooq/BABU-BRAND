module.exports.config = {
    name: "leave",
    eventType: ["log:unsubscribe"],
    version: "1.0.0",
    credits: "Farooq Khan",
    description: "Thông báo Bot hoặc người dùng rời khỏi nhóm có random gif/ảnh/video",
    dependencies: {
        "fs-extra": "",
        "path": ""
    }
};

const checkttPath = __dirname + '/../commands/checktuongtac/'


module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "leaveGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function ({ api, event, Users, Threads }) {
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const { createReadStream, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
    const hours = moment.tz("Asia/Kolkata").format("HH");
    const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
    const iduser = event.logMessageData.leftParticipantFbId;
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
    const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝘁𝘂̛̣ 𝗯𝗮̂́𝗺 𝗻𝘂́𝘁 𝗯𝗶𝗲̂́𝗻" : "𝗯𝗶̣ 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝘀𝘂́𝘁 𝗯𝗮𝘆 𝗺𝗮̀𝘂";
  const path = join(__dirname, "cache", "leaveGif");
  const gifPath = join(path, `${threadID}.gìf`);
    var msg, formPush

    if (existsSync(checkttPath + threadID + '.json')) {
        const threadData = JSON.parse(readFileSync(checkttPath + threadID + '.json'));
        const userData_week_index = threadData.week.findIndex(e => e.id == event.logMessageData.leftParticipantFbId);
        const userData_day_index = threadData.day.findIndex(e => e.id == event.logMessageData.leftParticipantFbId);
        const userData_total_index = threadData.total.findIndex(e => e.id == event.logMessageData.leftParticipantFbId);
        if (userData_total_index != -1) {
            threadData.total.splice(userData_total_index, 1);
        }
        if (userData_week_index != -1) {
            threadData.week.splice(userData_week_index, 1);
        }
        if (userData_day_index != -1) {
            threadData.day.splice(userData_day_index, 1);
        }

        writeFileSync(checkttPath + threadID + '.json', JSON.stringify(threadData, null, 4));
    }
    if (existsSync(path)) mkdirSync(path, { recursive: true });

    (typeof data.customLeave == "undefined") ? msg = "𝗜𝘀𝗶 𝗞𝗲 𝗦𝗮𝘁𝗵 𝗕𝗮𝗹𝗹 𝗕𝗮𝘂𝗻𝗱𝗿𝘆 𝗞𝗲 𝗕𝗮𝗵𝗮𝗿 😹\n━━━━━━━━━━━━━\n {name} 𝗠𝗲𝗿𝗲 𝗗𝗼𝘀𝘁 𝗠𝗲𝗿𝗲 𝗬𝗮𝗿 𝗠𝗲𝗿𝗲 𝗗𝗶𝗹𝗱𝗮𝗿. 𝗕𝘂𝗿𝗮 𝗛𝘂𝗮 𝗧𝘂𝗺𝗵𝗮𝗿𝗲 𝗦𝗮𝘁𝗵 {name} 𝗧𝘂𝗺𝗵𝗮𝗿𝗮 𝗧𝗼𝗵 𝗪𝗶𝗰𝗸𝗲𝗱 𝗨𝗱 𝗚𝗮𝘆𝗮 😹 . 𝗢 𝗠𝘆 𝗚𝗮𝗮𝗱 😒 🍑\n𝗨𝗥𝗟: https://m.facebook.com/{iduser} 🌸\n━━━━━━━━━━━━━\n[ {time} ]" : msg = data.customLeave;
  var getData = await Users.getData(event.author)
var nameAuthor = typeof getData.name == "undefined" ? "" : getData.name
    msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{iduser}/g, iduser).replace(/\{author}/g, nameAuthor).replace(/\{time}/g, time);

  const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

    if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
    else if (randomPath.length != 0) {
    const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom) }
    }
    else formPush = { body: msg }

    return api.sendMessage(formPush, threadID);
}
