//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2349123731026";
global.sudo = process.env.SUDO || "2348070780776";
global.owner = process.env.OWNER_NUMBER || "2348070780776";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUEwN09mUXY2STdUQ1ZHTHRaZHR6Zll2U1YrVkM4aG8venM2ZW1MdnkwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUQ4cFhkOTRjOVhlWENMb0NJMXNadFl1VlJBTzJCSG03R1NGc1J4TU93ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFR0NHUGtWRU5LdEtwdkQ5eVdVL1IraXcwcXQyL0JXbzgreXZUWkJMNzBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJabkcwVXp1d0NNRUFRTW5jQWVHRGVWMTc5azNIc054Y2gwclpJUUlGZmpnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNDd3FBcEN3L0Y5M1g1cXdFU0NhWWFiVlpwdmNwWktvQzEzNkh3UXpMVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5MQ1pYZVJldkNGcEZvL3dQditoemxWQkNQMno1M01lUTlkMm5JRitlR1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUphb2VZd1ZQTUpYUjkyRWpTSFJvUXRkRjN5SC9CSGprZHRKM2h3Z05HMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTZCQzY1ejdXY0RCNUVZZWkyaUk3dnV5cWVtdWc0ZCtDN2FXbnlDRkdDND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN0UktSZk9Oby9DS1B0UGtueGN6SG82dHRjQUVDZ1hBU3FWSnFPa0hzalZFM0tidURsMDZOeWx0eGZrTTJzVlRxSjZCY3pHQVRHaFZBMW1IMFZRamp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc5LCJhZHZTZWNyZXRLZXkiOiJDNXB4UXZWVUluYVVTVjVPTkxzbnFNVlFTLy8wMXlFWllqVWd5U3dFR3lVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNQnpBZ2tEOFItcVpqMUdmRXVBMWNnIiwicGhvbmVJZCI6IjUyNDVlZmUxLTE4NGUtNDYxNS04MDg3LWM0YmY4ZjM0MTEzOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqVWNibEhSbXA4Zm1mSTBHN01rN0krUDZ0WE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzB3K3poYXdoeldCOGszVWhTMng4Z24wWldzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNBRkRLVzVCIiwibWUiOnsiaWQiOiIyMzQ4MDcwNzgwNzc2OjIxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBST0YgRURVIENPTlNVTFQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BxVXMvZ0dFUGVIL2JnR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZSeVcxTS9RK1I3RytoYnNqaWM0dUZSK0xlL1JPTUM5VFVaeFUwUGFqREk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InFiTTI3bUUyWHM5Um94V1R5bllmOEVVdDNzUFNEU01DN1orZVNmRTlIaTlDUWVwdVh0cmh1aUU0MnpsekloMSswZ2tyQlUyd083SWlYeGlEZmRicENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQdm9OYlRZVlY3SGJvSHBpU2N6VDdRUW5kNlBIaG4xL01LTFlRSEZ3YTFYRkYzZEhGR1lHamh5cmxiLzdiMHl2RVlxVTFFam8xYXVJK2Y5YWZtejhndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNzA3ODA3NzY6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlVjbHRUUDBQa2V4dm9XN0k0bk9MaFVmaTN2MFRqQXZVMUdjVk5EMm93eSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDEwMjI3N30="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
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
