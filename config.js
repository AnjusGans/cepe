/**
   * Create By Dika Ardnt.
   * Recode By Kahfi-XD 
   * Contact Me on wa.me/6281238142144
   * Follow https://github.com/Maxxy-Md 
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6281238142144']
global.ownernomer = "6281238142144"
global.premium = ['6281238142144','6285718252075']
global.packname = 'KennBot'
global.author = 'KennBot'
global.wm = 'KennBot'
global.sessionName = 'session'  //jangan diganti bro nanti error
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    nsfw: 'Fitur Nsfw Belum Aktif, hubungi owner agar enable nsfw',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "∞",
    free: 15
}
global.thumb = fs.readFileSync('./image/kenn.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
