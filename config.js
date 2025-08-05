const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU9oMXZCR0JkMGd3R1k0bkxieFViS0hBVUxhbGtlZm5ENG9sNUI1MlZrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzREL2NIRFF5YW95SG0rcVNHU25maUdOVTlYbkdVNlpXbXI3c1o5b3ZRRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQ2wxeEVQYnJhWnJwT1NjSzdiYnhnblpkbjhadWRUUHVySnB6TEorMUhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOSkhUMTVXL25rdkpZRUpHUERXTkw1T3hBaXJta2YrR21lTDFIcVlHWkNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNNQkZCNVNqVm8rSDh2QWkrWmgwS2Y2aWZSeldSYjhJU1dsUytRU09qVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVZdmpVcFo0K3o2MTVhM3FqWDBFVkMxcmFRWUJOZVhYU2hycU1SdjVURm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0hvVmtMY01NcUpSOXBKSE9mL0pKWld2WUErdTZsVWN3eGtrYzk4Uy8zZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFk5WVRVZVVLVERiL2FpdExucEVnTXExOHF0ODRPYzhjVzhiaFBIMnNIRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBYWEJYaFJmVWdRWTVQb2NzVzdFaVJHQVdta0RqYmdWNTZpN04zSW00S0E4TnJpL25lYWI2TU84UXJwS2JmRDJtZHZ6WVZiaUlJU2NGeHZKWno5dER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMsImFkdlNlY3JldEtleSI6ImhCSElva000Qk82VzJ0VUdlNmE2cXo1NHk1V3UrdFBGZVhQWGo1SDUrLzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjE4OERFVDJTIiwibWUiOnsiaWQiOiI5MjMxNzY2OTkwNjY6OUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjkxMTkxMjgyNTQ4OTYxOjlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPbUYrc2dCRUk3cnlNUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4bTJ3ckpCNStlQUVxdkpEM1U2MXlKS1hveG9kZklrM2tiYVFKRHV4cUJVPSIsImFjY291bnRTaWduYXR1cmUiOiJqdDhESVlZbmxpT1VVSE9sS2dudmd0Mmc4MmVaMWRtR1ZLZjdoandMMzdocHpXSGFyQmZBUmdsaERxc29ILzh5WTZ1U2ZXTTU1NnBBNGFmYk1DS3hBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUS9lVWxQQnZsZTBBU1RSYy93OFIxTmZtTzRMSHovWGJQdnk2K24wdEtrVlZwUTJ2OE0zZ2FDcFJoZGFkZE9lSG1KaFNOWUJFWjRzQVc5cUIzMkxWRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNzY2OTkwNjY6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmSnRzS3lRZWZuZ0JLcnlROTFPdGNpU2w2TWFIWHlKTjVHMmtDUTdzYWdWIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ0MTI0MzUsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVZWIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SHAHZAR-KHAN-Bot 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/7jv0qe.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SHAHZAR-KHAN-Bot",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHAHZAR-KHAN-Bot",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923176699066",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*SHAHZAR KHAN*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ SHAHZAR KHAN Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/7jv0qe.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923176699066",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
