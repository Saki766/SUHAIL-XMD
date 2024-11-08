const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || ".save";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_22_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNyxcbiAgICAgICAgNixcbiAgICAgICAgODMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk0LFxuICAgICAgICA1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDUxLFxuICAgICAgICA0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyLFxuICAgICAgICA4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyLFxuICAgICAgICA2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkp4RUZOeXR2TEcrSkUvVFE4ZURTSDRYQWNBS2RpZWQyNjF6UXBlM1Z5UHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlKN19QVTVJVEJlZ0FudGlzOGpRWEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWMzZTMxZGItMWY3Ni00MmFlLTliYjItYjI2ZDRhODI0ZmU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNCxcbiAgICAgIDI0OCxcbiAgICAgIDgwLFxuICAgICAgNTQsXG4gICAgICAxMyxcbiAgICAgIDIwMyxcbiAgICAgIDE2NixcbiAgICAgIDI1NSxcbiAgICAgIDI0NixcbiAgICAgIDI0NixcbiAgICAgIDEzLFxuICAgICAgMjQsXG4gICAgICA3NyxcbiAgICAgIDIxNCxcbiAgICAgIDExMCxcbiAgICAgIDE0LFxuICAgICAgMTcxLFxuICAgICAgNDgsXG4gICAgICA4MSxcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjYsXG4gICAgICAyNDgsXG4gICAgICAxNjIsXG4gICAgICA4NyxcbiAgICAgIDQzLFxuICAgICAgNjQsXG4gICAgICA0NCxcbiAgICAgIDgzLFxuICAgICAgMjIsXG4gICAgICAyMjIsXG4gICAgICAyMDcsXG4gICAgICAxMDAsXG4gICAgICA1NCxcbiAgICAgIDI0MyxcbiAgICAgIDM1LFxuICAgICAgMTQsXG4gICAgICAyNDQsXG4gICAgICAyNDYsXG4gICAgICAyNDMsXG4gICAgICA4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSRzVaRUhLUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDU1MDU0NzU1OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3MjE1MTcyNjA2Mzg1Mjo0NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNaWU5TThIRUo3Y3Rya0dHQkFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImsxYWd3aEJsb3pxSnZTaU1pVm84K0ZEOVZaTmZSM21Ob0o0bzhJTiswWFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR1d5cXM1ZU5zSXdRT2JqNUxEdmNwODRDb2tXOU1ScWFJQ1hWQi9vVzl2WW5XRUNHc0s5Qm0zVVNNWEJiWXF2VTg4UDJpVk8zUVdRWG85L1RiUmRxREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZThpc0liaWdFbVhneFE5UnpWR0FQSmVtNnZPNVVaVDFmYTB6RHc1aFZ6dzNXYTB1VHNJTTM3eHZXMkQ3ZFBMaTl4bE5mQmJwcEluc0Nyd1hQS0M4QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDU1MDU0NzU1OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTA0Njk0NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpCS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkJLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWDcrYkJKOUErSDFManc2NjFYZWNSVEp0ZGlmL1hqZG5aZ1NtN2lIcDRRdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDQ2NjI3NjU2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
