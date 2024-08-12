import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
let id = m.chat
if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0
this.tekateki = this.tekateki ? this.tekateki : {}
if (!(id in this.tekateki)) return m.reply('❗𝗧𝗛𝗘 𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡 𝗜𝗦 𝗔𝗟𝗥𝗘𝗔𝗗𝗬 𝗔𝗡𝗦𝗪𝗘𝗥𝗘𝗗❗')
if (m.quoted.id == this.tekateki[id][0].id) {
let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += this.tekateki[id][2]
m.reply(`*✅𝗖𝗢𝗥𝗥𝗘𝗖𝗧 𝗔𝗡𝗦𝗪𝗘𝗥✅!*\n+${this.tekateki[id][2]} Exp`)
clearTimeout(this.tekateki[id][3])
delete this.tekateki[id]
} else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) m.reply(`‼️𝗬𝗢𝗨 𝗔𝗥𝗘 𝗖𝗟𝗢𝗦𝗘𝗥 𝗧𝗢 𝗧𝗛𝗘 𝗔𝗡𝗦𝗪𝗘𝗥‼️!`)
else m.reply('‼️𝗜𝗡𝗖𝗢𝗥𝗥𝗘𝗖𝗧‼️')}
return !0
}
handler.exp = 0
export default handler