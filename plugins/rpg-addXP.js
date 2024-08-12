//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ Tag the user'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw 'https://github.com/jayden-official ✳️ Enter the amount of *XP* you want to add'
  if (isNaN(txt)) throw ' https://github.com/jayden-official 🔢 only numbers'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✳️ Mínimum *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`https://github.com/jayden-official ≡ *XP ADDED*
┌──────────────
   *Total:* ${xp}
└──────────────`)
 conn.fakeReply(m.chat, `  Did you recieve \n\n *+${xp} XP*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['economy']
handler.command = ['addxp'] 
handler.rowner = true

export default handler
