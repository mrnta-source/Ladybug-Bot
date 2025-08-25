/**
 * Ladybug Bot - Auto Downloader & Launcher
 * Copyright (c) 2024 Mr Ntando Ofc
 * 
 * This program automatically downloads Ladybug.js and runs Ladybug Bot
 * Credits: MR NTANDO OFC & Ladybug Team
 */

const fs = require('fs')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')

// Configuration
const GITHUB_CONFIG = {
    baseUrl: 'https://raw.githubusercontent.com/mangwiroangela146-lgtm/Ladybugofc/main/'
}

// Alternative URLs for fallback
const FALLBACK_URLS = [
    'https://raw.githubusercontent.com/ladybug-mods/ladybug-bot/main/',
    'https://cdn.jsdelivr.net/gh/mrntandoofc/ladybug-bot@main/',
    'https://raw.githubusercontent.com/Ladybug-Mods/Ladybug-Bot/main/',
    'https://raw.githubusercontent.com/MrNtandoOfc/Ladybug-Bot/main/'
]

// Files to download
const REQUIRED_FILES = [
    {
        name: 'Ladybug.js',
        path: 'plugin/Ladybug.js',
        localPath: './Ladybug.js',
        required: true,
        description: '🐞 Ladybug Command Handler'
    },
    {
        name: 'myfunc.js',
        path: 'lib/myfunc.js',
        localPath: './lib/myfunc.js',
        required: true,
        description: '⚙️ Core Functions Library'
    },
    {
        name: 'exif.js',
        path: 'lib/exif.js',
        localPath: './lib/exif.js',
        required: true,
        description: '🏷️ Sticker Metadata Handler'
    },
    {
        name: 'serialize.js',
        path: 'lib/serialize.js',
        localPath: './lib/serialize.js',
        required: false,
        description: '📦 Message Serializer'
    },
    {
        name: 'database.js',
        path: 'lib/database.js',
        localPath: './lib/database.js',
        required: false,
        description: '🗄️ Database Handler'
    },
    {
        name: 'color.js',
        path: 'lib/color.js',
        localPath: './lib/color.js',
        required: false,
        description: '🎨 Console Color Handler'
    },
    {
        name: 'uploader.js',
        path: 'lib/uploader.js',
        localPath: './lib/uploader.js',
        required: false,
        description: '☁️ File Uploader'
    },
    {
        name: 'scraper.js',
        path: 'lib/scraper.js',
        localPath: './lib/scraper.js',
        required: false,
        description: '🔍 Web Scraper Functions'
    }
]

// Directories to create (excluding session)
const DIRECTORIES = ['./data', './lib', './temp', './media', './plugin', './database']

// Display banner
function showBanner() {
    console.clear()
    console.log(chalk.cyan.bold(`
╭─────────────────────────────────────────────────────╮
│           🐞 LADYBUG BOT AUTO DOWNLOADER            │
│  👑 Owner: MR NTANDO OFC                           │
│  📱 WhatsApp: +263777124998                        │
│  📺 YouTube: MR NTANDO OFC                         │
│  🐞 Powered by Ladybug Engine                      │
╰─────────────────────────────────────────────────────╯
    `))
}

// Create directories and files
function createDirectories() {
    console.log(chalk.yellow('📁 Creating directories...'))
    
    DIRECTORIES.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
            console.log(chalk.green(`✅ Created: ${dir}`))
        }
    })
    
    // Create essential data files
    const dataFiles = [
        { path: './data/owner.json', content: '["263777124998"]' },
        { path: './data/premium.json', content: '[]' },
        { path: './data/banned.json', content: '[]' },
        { path: './data/antilink.json', content: '[]' },
        { path: './data/welcome.json', content: '[]' },
        { path: './database/user.json', content: '{}' },
        { path: './database/group.json', content: '{}' }
    ]
    
    dataFiles.forEach(file => {
        if (!fs.existsSync(file.path)) {
            fs.writeFileSync(file.path, file.content)
            console.log(chalk.green(`✅ Created: ${file.path}`))
        }
    })
}

// Download file with multiple URL attempts
async function downloadFile(file, baseUrl) {
    const urls = [baseUrl + file.path, ...FALLBACK_URLS.map(url => url + file.path)]
    const localPath = file.localPath || `./${file.name}`
    
    for (let i = 0; i < urls.length; i++) {
        try {
            console.log(chalk.yellow(`📥 Downloading ${file.description}... (${i + 1}/${urls.length})`))
            
            const response = await axios({
                method: 'GET',
                url: urls[i],
                timeout: 30000,
                headers: {
                    'User-Agent': 'Ladybug-Bot-Downloader/1.0',
                    'Accept': 'text/plain,application/javascript,*/*'
                }
            })
            
            const dir = path.dirname(localPath)
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true })
            }
            
            fs.writeFileSync(localPath, response.data)
            console.log(chalk.green(`✅ Downloaded: ${file.name} (${response.data.length} bytes)`))
            return true
            
        } catch (error) {
            console.log(chalk.red(`❌ Failed URL ${i + 1}: ${error.message}`))
            if (i === urls.length - 1 && file.required) {
                console.log(chalk.red(`💥 Critical file ${file.name} could not be downloaded!`))
                return false
            }
        }
    }
    return !file.required // Return true for non-required files even if download fails
}

// Create fallback Ladybug.js if download fails
function createFallbackLadybug() {
    console.log(chalk.yellow('🔧 Creating fallback Ladybug.js...'))
    
    const fallbackLadybug = `/**
 * Fallback Ladybug.js - Basic Command Handler
 * Owner: MR NTANDO OFC
 */

const fs = require('fs')
const chalk = require('chalk')

module.exports = async (XeonBotInc, m, chatUpdate, store) => {
    try {
        if (!m.body) return
        
        const prefix = '.'
        const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : ''
        
        console.log(chalk.blue(\`📱 Message from \${m.pushName || 'Unknown'}: \${m.body}\`))
        
        switch (cmd) {
            case 'ping':
                await XeonBotInc.sendMessage(m.chat, {
                    text: '🏓 Pong! Ladybug Bot is running with fallback engine'
                }, { quoted: m })
                break
                
            case 'alive':
                await XeonBotInc.sendMessage(m.chat, {
                    text: \`🐞 *LADYBUG BOT IS ALIVE!*\\n\\n👑 Owner: MR NTANDO OFC\\n📱 WhatsApp: +263777124998\\n📺 YouTube: MR NTANDO OFC\\n🐞 Engine: Fallback Ladybug\\n⏰ Time: \${new Date().toLocaleString()}\\n🤖 Bot: Ladybug Bot MD\`
                }, { quoted: m })
                break
                
            case 'menu':
            case 'help':
                await XeonBotInc.sendMessage(m.chat, {
                    text: \`🐞 *LADYBUG BOT MENU*\\n\\n📋 *Available Commands:*\\n• \${prefix}ping - Check bot status\\n• \${prefix}alive - Bot alive status\\n• \${prefix}menu - Show this menu\\n• \${prefix}owner - Owner contact\\n• \${prefix}script - Get bot script\\n\\n👑 Owner: MR NTANDO OFC\\n📺 YouTube: MR NTANDO OFC\`
                }, { quoted: m })
                break
                
            case 'owner':
                await XeonBotInc.sendMessage(m.chat, {
                    text: \`👑 *BOT OWNER*\\n\\n📱 WhatsApp: +263777124998\\n🌐 GitHub: mrntandoofc\\n📺 YouTube: MR NTANDO OFC\\n🤖 Bot: Ladybug Bot MD\\n\\n_Contact owner for bot inquiries_\`
                }, { quoted: m })
                break
                
            case 'script':
            case 'sc':
                await XeonBotInc.sendMessage(m.chat, {
                    text: \`📜 *LADYBUG BOT SCRIPT*\\n\\n🐞 Bot Name: Ladybug Bot\\n👑 Owner: MR NTANDO OFC\\n📺 YouTube: MR NTANDO OFC\\n🌐 GitHub: Coming Soon\\n\\n_This is a WhatsApp Multi-Device Bot_\`
                }, { quoted: m })
                break
        }
        
    } catch (error) {
        console.error(chalk.red('Error in fallback Ladybug:'), error)
    }
}`

    fs.writeFileSync('./Ladybug.js', fallbackLadybug)
    console.log(chalk.green('✅ Created fallback Ladybug.js'))
}

// Create fallback lib files
function createFallbackLibFiles() {
    console.log(chalk.yellow('🔧 Creating fallback lib files...'))
    
    // myfunc.js
    if (!fs.existsSync('./lib/myfunc.js')) {
        const myfuncContent = `const fs = require('fs')
const axios = require('axios')
const { proto } = require("@whiskeysockets/baileys")

const smsg = (conn, m, store) => {
    if (!m) return m
    if (m.key) {
        m.id = m.key.id
        m.chat = m.key.remoteJid
        m.fromMe = m.key.fromMe
        m.isGroup = m.chat.endsWith('@g.us')
        m.sender = conn.decodeJid(m.fromMe && conn.user.id || m.participant || m.key.participant || m.chat || '')
        m.pushName = m.pushName || 'Unknown'
    }
    if (m.message) {
        m.mtype = Object.keys(m.message)[0]
        m.msg = m.message[m.mtype]
        m.body = m.message.conversation || m.msg.caption || m.msg.text || ''
    }
    m.text = m.msg?.text || m.msg?.caption || m.message?.conversation || ''
    m.reply = (text, chatId = m.chat, options = {}) => conn.sendMessage(chatId, { text }, { quoted: m, ...options })
    return m
}

const getBuffer = async (url, options = {}) => {
    try {
        const response = await axios({
            method: 'GET',
            url,
            responseType: 'arraybuffer',
            ...options
        })
        return response.data
    } catch (error) {
        throw error
    }
}

const fetchJson = async (url, options = {}) => {
    try {
        const response = await axios({
            method: 'GET',
            url,
            ...options
        })
        return response.data
    } catch (error) {
        throw error
    }
}

module.exports = {
    smsg,
    sleep: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    isUrl: (url) => url.match(/https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b/gi),
    getBuffer,
    fetchJson,
    runtime: (seconds) => {
        seconds = Number(seconds)
        var d = Math.floor(seconds / (3600 * 24))
        var h = Math.floor(seconds % (3600 * 24) / 3600)
        var m = Math.floor(seconds % 3600 / 60)
        var s = Math.floor(seconds % 60)
        var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : ""
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : ""
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : ""
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : ""
        return dDisplay + hDisplay + mDisplay + sDisplay
    }
}`
        fs.writeFileSync('./lib/myfunc.js', myfuncContent)
        console.log(chalk.green('✅ Created fallback lib/myfunc.js'))
    }

    // exif.js
    if (!fs.existsSync('./lib/exif.js')) {
        const exifContent = `const fs = require('fs')
const { spawn } = require('child_process')
const path = require('path')

const imageToWebp = async (media) => {
    const tmpFileOut = path.join(__dirname, '../temp', \`\${Date.now()}.webp\`)
    const tmpFileIn = path.join(__dirname, '../temp', \`\${Date.now()}.jpg\`)
    
    fs.writeFileSync(tmpFileIn, media)
    
    await new Promise((resolve, reject) => {
        spawn('ffmpeg', [
            '-i', tmpFileIn,
            '-vcodec', 'libwebp',
            '-filter:v', 'fps=fps=20',
            '-lossless', '1',
            '-loop', '0',
            '-preset', 'default',
            '-an',
            '-vsync', '0',
            tmpFileOut
        ])
        .on('close', resolve)
        .on('error', reject)
    })
    
    const buff = fs.readFileSync(tmpFileOut)
    fs.unlinkSync(tmpFileOut)
    fs.unlinkSync(tmpFileIn)
    return buff
}

const videoToWebp = async (media) => {
    const tmpFileOut = path.join(__dirname, '../temp', \`\${Date.now()}.webp\`)
    const tmpFileIn = path.join(__dirname, '../temp', \`\${Date.now()}.mp4\`)
    
    fs.writeFileSync(tmpFileIn, media)
    
    await new Promise((resolve, reject) => {
        spawn('ffmpeg', [
            '-i', tmpFileIn,
            '-vcodec', 'libwebp',
            '-filter:v', 'fps=fps=15,scale=320:320:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=320:320:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1',
            '-loop', '0',
            '-ss', '00:00:00',
            '-t', '00:00:05',
            '-preset', 'default',
            '-an',
            '-vsync', '0',
            tmpFileOut
        ])
        .on('close', resolve)
        .on('error', reject)
    })
    
    const buff = fs.readFileSync(tmpFileOut)
    fs.unlinkSync(tmpFileOut)
    fs.unlinkSync(tmpFileIn)
    return buff
}

const writeExifImg = async (media, metadata) => {
    let wMedia = await imageToWebp(media)
    const tmpFileIn = path.join(__dirname, '../temp', \`\${Date.now()}.webp\`)
    const tmpFileOut = path.join(__dirname, '../temp', \`\${Date.now()}.webp\`)
    fs.writeFileSync(tmpFileIn, wMedia)
    
    if (metadata.packname || metadata.author) {
        const img = new webp.Image()
        const json = { "sticker-pack-id": "https://github.com/mrntandoofc/ladybug-bot", "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

const writeExifVid = async (media, metadata) => {
    let wMedia = await videoToWebp(media)
    const tmpFileIn = path.join(__dirname, '../temp', \`\${Date.now()}.webp\`)
    const tmpFileOut = path.join(__dirname, '../temp', \`\${Date.now()}.webp\`)
    fs.writeFileSync(tmpFileIn, wMedia)
    
    if (metadata.packname || metadata.author) {
        const img = new webp.Image()
        const json = { "sticker-pack-id": "https://github.com/mrntandoofc/ladybug-bot", "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

module.exports = {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid
}`
        fs.writeFileSync('./lib/exif.js', exifContent)
        console.log(chalk.green('✅ Created fallback lib/exif.js'))
    }

    // color.js
    if (!fs.existsSync('./lib/color.js')) {
        const colorContent = `const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
    return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

module.exports = {
    color,
    bgcolor
}`
        fs.writeFileSync('./lib/color.js', colorContent)
        console.log(chalk.green('✅ Created fallback lib/color.js'))
    }
}

// Create fallback files
function createFallbackFiles() {
    // Settings
    if (!fs.existsSync('./settings.js')) {
        const settingsContent = `module.exports = {
    ownerNumber: "263777124998",
    botName: "LADYBUG BOT",
    ownerName: "MR NTANDO OFC",
    prefix: ".",
    public: true,
    youtube: "MR NTANDO OFC",
    github: "mrntandoofc"
}

global.owner = ["263777124998"]
global.botname = "LADYBUG BOT"
global.ownername = "MR NTANDO OFC"
global.themeemoji = "🐞"
global.packname = "LADYBUG BOT"
global.author = "MR NTANDO OFC"
global.youtube = "MR NTANDO OFC"
global.github = "mrntandoofc"`

        fs.writeFileSync('./settings.js', settingsContent)
        console.log(chalk.green('✅ Created settings.js'))
    }

    createFallbackLibFiles()
}

// Main execution
async function main() {
    showBanner()
    
    console.log(chalk.yellow('🚀 Starting Ladybug Bot setup...'))
    
    // Create directories and fallback files
    createDirectories()
    createFallbackFiles()
    
    // Try to download all files
    let downloadedFiles = 0
    let totalFiles = REQUIRED_FILES.length
    
    for (const file of REQUIRED_FILES) {
        const success = await downloadFile(file, GITHUB_CONFIG.baseUrl)
        if (success) {
            downloadedFiles++
        } else if (file.required) {
            console.log(chalk.yellow(`⚠️ Creating fallback for ${file.name}...`))
            if (file.name === 'Ladybug.js') {
                createFallbackLadybug()
            }
        }
    }
    
    console.log(chalk.cyan(`📊 Download Summary: ${downloadedFiles}/${totalFiles} files downloaded successfully`))
    
    if (downloadedFiles === 0) {
        console.log(chalk.yellow('⚠️ No files downloaded, using fallback files...'))
    }
    
    console.log(chalk.green('✅ Setup complete! Starting Ladybug Bot...'))
    
    // Start the bot
    setTimeout(() => {
        require('./ladybug-bot.js')
    }, 2000)
}

// Create ladybug-bot.js (main bot file)
if (!fs.existsSync('./ladybug-bot.js')) {
    const ladybugBotContent = `require('./settings')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const { smsg } = require('./lib/myfunc')
const { 
    default: makeWASocket,
    useMultiFileAuthState, 
    fetchLatestBaileysVersion,
    jidDecode,
    jidNormalizedUser,
    makeCacheableSignalKeyStore,
    delay
} = require("@whiskeysockets/baileys")
const NodeCache = require("node-cache")
const pino = require("pino")
const readline = require("readline")

const store = {
    messages: {},
    contacts: {},
    chats: {},
    bind: function(ev) {
        ev.on('messages.upsert', ({ messages }) => {
            messages.forEach(msg => {
                if (msg.key && msg.key.remoteJid) {
                    this.messages[msg.key.remoteJid] = this.messages[msg.key.remoteJid] || {}
                    this.messages[msg.key.remoteJid][msg.key.id] = msg
                }
            })
        })
    },
    loadMessage: async (jid, id) => this.messages[jid]?.[id] || null
}

let phoneNumber = "263777124998"
global.botname = "LADYBUG BOT"

const pairingCode = process.argv.includes("--pairing-code")
const rl = process.stdin.isTTY ? readline.createInterface({ input: process.stdin, output: process.stdout }) : null

async function startBot() {
    let { version } = await fetchLatestBaileysVersion()
    const { state, saveCreds } = await useMultiFileAuthState('./session')
    const msgRetryCounterCache = new NodeCache()

    const XeonBotInc = makeWASocket({
        version,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
        },
        markOnlineOnConnect: true,
        getMessage: async (key) => {
            let jid = jidNormalizedUser(key.remoteJid)
            let msg = await store.loadMessage(jid, key.id)
            return msg?.message || ""
        },
        msgRetryCounterCache,
    })

    store.bind(XeonBotInc.ev)

    XeonBotInc.ev.on('messages.upsert', async chatUpdate => {
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (!XeonBotInc.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            
            const m = smsg(XeonBotInc, mek, store)
            
            if (fs.existsSync('./Ladybug.js')) {
                try {
                    require('./Ladybug')(XeonBotInc, m, chatUpdate, store)
                } catch (err) {
                    console.error("Error in Ladybug handler:", err)
                }
            }
        } catch (err) {
            console.error("Error in messages.upsert:", err)
        }
    })

    XeonBotInc.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    XeonBotInc.public = true

    if (pairingCode && !XeonBotInc.authState.creds.registered) {
        let phoneNumber = await (rl ? new Promise((resolve) => rl.question('Enter your WhatsApp number: ', resolve)) : Promise.resolve("263777124998"))
        phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
        
        setTimeout(async () => {
            try {
                let code = await XeonBotInc.requestPairingCode(phoneNumber)
                code = code?.match(/.{1,4}/g)?.join("-") || code
                console.log(chalk.green('🐞 Your Pairing Code: '), chalk.white(code))
            } catch (error) {
                console.error('Error requesting pairing code:', error)
            }
        }, 3000)
    }

    XeonBotInc.ev.on('connection.update', async (s) => {
        const { connection, lastDisconnect } = s
        if (connection == "open") {
            console.log(chalk.green('🐞 Ladybug Bot Connected Successfully!'))
            console.log(chalk.cyan('👑 Owner: MR NTANDO OFC'))
            console.log(chalk.cyan('📺 YouTube: MR NTANDO OFC'))
        }
        if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
            startBot()
        }
    })

    XeonBotInc.ev.on('creds.update', saveCreds)
    return XeonBotInc
}

startBot().catch(console.error)`

    fs.writeFileSync('./ladybug-bot.js', ladybugBotContent)
    console.log(chalk.green('✅ Created ladybug-bot.js'))
}

// Start the setup
main().catch(console.error)
