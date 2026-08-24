module.exports = {
  config: {
    name: "help",
    aliases: ["menu", "commands"],
    version: "1.0.0",
    author: "SINZU",
    role: 0,
    category: "system",
    shortDescription: "Show bot commands"
  },

  onStart: async function ({ api, event }) {
    const message = `
╭━━━━━━━❍
  📜 𝙎𝙄𝙉𝙕𝙐 𝙈𝙀𝙎𝙎𝙉𝙂𝙍𝘽𝙊𝙏 ✨
╰━━━━━━━━━━━━━━━❍

 𝟶1 ❯ AI
 ╰┈➤ ai
 ╰┈➤ ask
 ╰┈➤ chat

 𝟶2 ❯ SYSTEM
 ╰┈➤ help
 ╰┈➤ ping
 ╰┈➤ uptime
 ╰┈➤ info

 𝟶3 ❯ UTILITY
 ╰┈➤ calc
 ╰┈➤ time
 ╰┈➤ weather
 ╰┈➤ translate

 𝟶4 ❯ ADMIN
 ╰┈➤ adduser
 ╰┈➤ removeuser
 ╰┈➤ setadmin
 ╰┈➤ groupinfo
 ╰┈➤ permissions

 𝟶5 ❯ CONFIG
 ╰┈➤ prefix
 ╰┈➤ settings
 ╰┈➤ autoreply

 𝟶6 ❯ ECONOMY
 ╰┈➤ balance
 ╰┈➤ daily
 ╰┈➤ bet
 ╰┈➤ transfer
 ╰┈➤ top
 ╰┈➤ topexp

 𝟶7 ❯ GAME
 ╰┈➤ slot
 ╰┈➤ megaslot

 𝟶8 ❯ FUN
 ╰┈➤ kiss
 ╰┈➤ hug
 ╰┈➤ joke
 ╰┈➤ 8ball
 ╰┈➤ roll

 𝟶9 ❯ MEDIA
 ╰┈➤ song
 ╰┈➤ yt
 ╰┈➤ lyrics
 ╰┈➤ gif

 𝟷0 ❯ IMAGE
 ╰┈➤ pin
 ╰┈➤ rbg
 ╰┈➤ imginfo

 𝟷1 ❯ OWNER
 ╰┈➤ admin
 ╰┈➤ cmd
 ╰┈➤ plugins
 ╰┈➤ logs
 ╰┈➤ restart

 𝟷2 ❯ GUIDE
 ╰┈➤ tuts
 ╰┈➤ rules
 ╰┈➤ about

 𝟷3 ❯ TOOL
 ╰┈➤ uid
 ╰┈➤ uuid
 ╰┈➤ qr

━━━━━━━━━━━━━━━━━━
 📊 𝚃𝚘𝚝𝚊𝚕 : 50 𝙲𝚖𝚍𝚜
 🤖 𝙱𝚘𝚝   : 𝙎𝙄𝙉𝙕𝙐 𝙈𝙚𝙨𝙨𝙣𝙜𝙧𝘽𝙤𝙩
 👤 𝙳𝙚𝚟   : 𝙎𝙄𝙉𝙕𝙐
 🌐 𝚂𝚝𝚊𝚝𝚞𝚜 : 𝙾𝚗𝚕𝚒𝚗𝚎 🟢
━━━━━━━━━━━━━━━━━━
`;

    api.sendMessage(message, event.threadID);
  }
};
