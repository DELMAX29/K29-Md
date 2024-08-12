/* By https://github.com/ALBERTO9883/NyanCatBot-MD */
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `https://github.com/jayden-official *[❗]  example  USING the command ${usedPrefix + command}* https://getstickerpack.com/stickers/flork-memes-4-1`
try {
let url = text
let res = await fetch(`https://api.akuari.my.id/downloader/stickerpack?link=${url}`)
let json = await res.json()
for (let data of (json.result || json)) {
const stikers = await sticker(false, data, global.packname, global.author)
conn.sendFile(m.chat, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': true }}, { quoted: m })
//await delay(1500)
}} catch {   
await m.reply('https://github.com/jayden-official *[❗] 𝙴𝚁𝚁𝙾𝚁, please try again later*')  
}}
handler.command = /^stickerpack$/i
export default handler
//const delay = time => new Promise(res => setTimeout(res, time))
