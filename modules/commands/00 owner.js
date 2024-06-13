module.exports.config = {
  name: "owner",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description:" owner information ",
  usePrefix: false,
  commandCategory: "noprefix",
  usages: "owner",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("owner")==0 || (event.body.indexOf("Romim")==0) || event.body.indexOf("ROMIM")==0 ||
event.body.indexOf("আলিফ")==0 ||
event.body.indexOf("@alif\______ :* 3:) ;* 3:) ;* ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎")==0 ||
event.body.indexOf("owner ke re")==0 ||
event.body.indexOf("ai Bot er admin ke")==0 ||
event.body.indexOf("boss")==0 ||
event.body.indexOf("Boss")==0|| event.body.indexOf("Owner")==0 || event.body.indexOf("alif")==0 || event.body.indexOf("100061374463417")==0 ||  event.body.indexOf("Owner koi re")==0 ||
event.body.indexOf("ALIF")==0|| event.body.indexOf("Admin")==0 ||
event.body.indexOf("admin")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/L8gsxbR.jpeg",

      
"https://i.imgur.com/L8gsxbR.jpeg",

      
"https://i.imgur.com/L8gsxbR.jpeg"];
     var callback = () => api.sendMessage({body:`\n•┄┅════❁🌺❁════┅┄•\n\n আসসালামু আলাইকুম-!!🖤💫\n•—»✨𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n 𝗡𝗮𝗺𝗲 : ➣「𝐁𝐎𝐒𝐒 𝐀𝐋𝐈𝐅」 𝐂𝐇𝐀𝐓 𝘽𝙊𝙏\n 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : 「 𝐁𝐎𝐒𝐒 𝐀𝐋𝐈𝐅  」 \n 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻 : 𝗜𝘀𝗹𝗮𝗺 \n 𝗼𝘄𝗻𝗲𝗿 𝗮𝗴𝗲 : 18+ \n 𝗼𝘄𝗻𝗲𝗿 𝗹𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : SECRET \n\n•┄┅════❁🌺❁════┅┄•\n`,attachment: fs.createReadStream(__dirname + "https://i.imgur.com/8fi99cc.jpeg")}, event.threadID, () => fs.unlinkSync(__dirname + "https://i.imgur.com/8fi99cc.jpeg"), event.messageID);
  const timeStart = Date.now();
  const dcm = process.uptime(); 
 var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vt = Math.floor(dcm % 60);
const res = await
axios.get(`http://scrapi.apibot.repl.co/thinh`);
var thinh = res.data.url;
let ext = res.data.data.substring(res.data.url.lastIndexOf(".") + 1);
      const PREFIX = config.PREFIX;
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"https://i.imgur.com/8fi99cc.jpeg")).on("close",() => callback());
}
  
  module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
		"successText": `🧠`,
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success!",
	}
    }
  module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
	if (typeof data["owner"] == "undefined" || data["owner"] == true) data["owner"] = false;
	else data["owner"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
api.sendMessage(`${(data["owner"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}      




  
    }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   }; 
