//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348142909904";
global.sudo = process.env.SUDO || "2348142909904";
global.owner = process.env.OWNER_NUMBER || "2349048967115";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0txNWh1ZlhmQ0pGVnpUaUVxcXFFaDY1MlExTFp5Y3M1eG5xaHYyUWFXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDJrSDM2Nk1VWSt5OUFidFI3cklGWlcvdU1HTlFFdDlXbVVyOHdRYmRVUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSEdJbGFrQkNmUExrdEdzaCtlckxYbGtGWVNuSDB3N3RDdVdwdVJXWkcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPcE1UN0J0bTJ6Y0s0TWdnWjQ2MU9pSlJFRHh1eURMME1FSy9IK0NLTWxNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCYWpTNFl3U1p2RmMyQ2kyaFo3a3JCM1JqbWVrQVVGQjhySGdFSmJlM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IksvajJPNmxqSTB5eWQ4MEdBT0FDb0Z4eGJDcG1uODVFd3BJUk5Pb1AzQ2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0c0czRpOE9HV0xrTEJLY1h2ZFJkREF1SzRvWktMN0ZMVjRNUGtnY0lubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1NCUVU4amVtZUliRUpqRmxydFlISTc5TG1oSGxtaWIxRXNVNWtUbWhVWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo5WGFrKzJVRFF1ck9RQ05DQjZYVXNPdXBRK1NiUk92Tml3Y0tlYmdYaU12czZ6UW5TYURtcElBUUtZeW0yTFdhSHF1MXQxZGc2WHVaVFNDa09DckN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6ImNFR3lsZDNuZjhLWUtoY21WeStPTHoxT3ZHeFJjUFhMTzZMU21vSEpEbGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzAyNTk2MjQwNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1Mjk2Q0MxNzNFQTc2RTIyNDNDMDUwMzhDRjMwM0U5MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNDcyODAyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzVFlkN3FpVlNoMjVNYW91WjVHODVBIiwicGhvbmVJZCI6ImQ2MTA3NjMwLWUzYzEtNDhiMC04ODYyLTlmODVlOWUyMzg1NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmQStsVDdkVjlJNEFRQzluVkE5dGN0N1lOY2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXd5Y210ajdIWW1haGJ1eEhvZUdqOFY2RmdZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFEVkZNSzkyIiwibWUiOnsiaWQiOiIyMzQ3MDI1OTYyNDA2OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTG9uZXkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04reThkY0JFTlBXazdrR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IllRdTUwRFAzUE8zS3ZDTnJFUE5nOXpValh1Yy84UCtaS21YZCs2aC9Mazg9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlBWVR4ZDh0aTF1cmczOGp1Rmt6cXdOc0lGT05EejZaYk1sejc4K2N1QnpQZlFUYkJkeDRZd3FXVmRQdGRBUFpMTXlST2syRExWRS9kbzF0aG43a0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvOXNkQTJ5c01mcFB5WGc0Y2c5WDhuRlVSUVlYakhnSXVjWnpkblpKam1rUU5MSHNDNlFKMG0yc0hjZFNpWEFzTDduT1BvWk9VOVJtVk1NZEwzQXhEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMjU5NjI0MDY6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXRUx1ZEF6OXp6dHlyd2pheER6WVBjMUkxN25QL0QvbVNwbDNmdW9meTVQIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNDcyODAwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpuUCJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "RICHY_TECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
