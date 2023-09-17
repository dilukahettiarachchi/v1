
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
Share Chuti Suduu Bot Link And Support. Git Link `
let img = 'https://i.ibb.co/WyR2Bff/Chuti-Sudu-MD.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
