/**
 * Ladybug Bot Settings Configuration
 * Enhanced settings for Ladybug Bot with Advanced Features
 * Copyright (c) 2024 MR NTANDO OFC
 */

const settings = {
  // Bot Information
  packname: '🐞 LADYBUG BOT',
  author: 'MR NTANDO OFC',
  botName: "🐞 LADYBUG MD",
  botOwner: 'MR NTANDO OFC',
  ownerNumber: '263777124998', // Set your number here without + symbol
  
  // Command Configuration
  prefix: '.',
  commandMode: "public", // public, private, group
  description: "🐞 Advanced WhatsApp Bot with Premium Features - Voice Cloning, AI Art, Logo Maker & More!",
  version: "2.0.0",
  
  // Owner Configuration
  owner: ['263777124998'], // Array of owner numbers
  premium: ['263777124998'], // Premium users
  mods: [], // Moderator users
  
  // API Keys & Services
  apiKeys: {
    giphy: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
    weather: '', // OpenWeatherMap API key
    translate: '', // Google Translate API key
    openai: '', // OpenAI API key for AI features
    elevenlabs: '', // ElevenLabs API for voice cloning
    stability: '', // Stability AI for image generation
    removebg: '', // Remove.bg API key
    unsplash: '', // Unsplash API for images
    youtube: '', // YouTube Data API v3
    spotify: '', // Spotify Web API
    instagram: '', // Instagram Basic Display API
    tiktok: '', // TikTok API
    github: '' // GitHub API token
  },
  
  // Auto Features Configuration
  autoFeatures: {
    alwaysOnline: true,
    autoRead: true,
    autoTyping: true,
    autoRecording: true,
    autoStatusView: true,
    autoStatusLike: true,
    autoReact: true,
    welcomeMessage: true,
    goodbyeMessage: true,
    antiLink: false,
    antiSpam: true,
    autoBackup: true,
    autoUpdate: false
  },
  
  // Ladybug Bot Special Features
  ladybugFeatures: {
    voiceCloning: {
      enabled: true,
      maxDuration: 300, // 5 minutes
      supportedVoices: ['male', 'female', 'child', 'robot', 'celebrity'],
      quality: 'high'
    },
    logoMaker: {
      enabled: true,
      maxText: 50,
      styles: ['modern', 'vintage', 'neon', '3d', 'minimalist', 'gaming'],
      formats: ['png', 'jpg', 'svg']
    },
    photoEditor: {
      enabled: true,
      effects: ['blur', 'sharpen', 'vintage', 'bw', 'sepia', 'enhance'],
      maxSize: '10MB',
      formats: ['jpg', 'png', 'webp']
    },
    aiArt: {
      enabled: true,
      styles: ['realistic', 'anime', 'cartoon', 'abstract', 'oil-painting'],
      maxPromptLength: 200,
      resolution: '1024x1024'
    },
    premiumFeatures: {
      enabled: true,
      voiceCloning: true,
      aiArt: true,
      logoMaker: true,
      photoEditor: true,
      unlimitedDownloads: true,
      prioritySupport: true
    }
  },
  
  // Spam Protection
  spamProtection: {
    enabled: true,
    maxCommands: 8, // Max commands per minute
    cooldown: 60000, // 1 minute cooldown
    warningMessage: "🐞 Please don't spam commands! Ladybug needs time to process. Wait a moment before using another command.",
    banDuration: 300000, // 5 minutes ban
    maxWarnings: 3
  },
  
  // Welcome & Goodbye Messages
  messages: {
    welcome: "🐞 Welcome to the group! I'm Ladybug Bot, your advanced assistant. Type *.menu* to see all my amazing features!",
    goodbye: "👋 Goodbye! Thanks for being part of our group. Ladybug Bot will miss you!",
    promote: "🎉 Congratulations! You have been promoted to admin by Ladybug Bot.",
    demote: "📉 You have been demoted from admin position by Ladybug Bot.",
    mute: "🔇 User has been muted by Ladybug Bot.",
    unmute: "🔊 User has been unmuted by Ladybug Bot.",
    ban: "🚫 User has been banned by Ladybug Bot.",
    unban: "✅ User has been unbanned by Ladybug Bot."
  },
  
  // Group Management Settings
  groupSettings: {
    antiLink: {
      enabled: false,
      action: 'delete', // warn, kick, delete, mute
      whitelist: ['chat.whatsapp.com', 'github.com/mrnta-source'],
      punishment: 'warn',
      maxWarnings: 3
    },
    antiSpam: {
      enabled: true,
      maxMessages: 15,
      timeWindow: 60000, // 1 minute
      action: 'mute', // warn, mute, kick
      muteDuration: 300000 // 5 minutes
    },
    wordFilter: {
      enabled: false,
      words: [], // Add filtered words
      action: 'delete', // delete, warn, kick, mute
      customMessage: "🐞 Ladybug detected inappropriate content!"
    },
    autoModeration: {
      enabled: true,
      detectSpam: true,
      detectFlood: true,
      detectCaps: true,
      capsThreshold: 80 // Percentage of caps to trigger
    }
  },
  
  // Database Configuration
  database: {
    enabled: true,
    type: 'json', // json, mongodb, mysql
    path: './database/',
    mongodb: {
      uri: '',
      dbName: 'ladybugbot'
    },
    mysql: {
      host: 'localhost',
      user: '',
      password: '',
      database: 'ladybugbot'
    },
    backup: {
      enabled: true,
      interval: 3600000, // 1 hour
      maxBackups: 24
    }
  },
  
  // Logging Configuration
  logging: {
    enabled: true,
    level: 'info', // error, warn, info, debug
    saveToFile: true,
    logPath: './logs/',
    maxFileSize: '20MB',
    maxFiles: 10,
    logCommands: true,
    logErrors: true,
    logUsers: true,
    logGroups: true
  },
  
  // Performance Settings
  performance: {
    maxConcurrentCommands: 15,
    commandTimeout: 45000, // 45 seconds
    memoryLimit: '1GB',
    autoRestart: {
      enabled: true,
      interval: 86400000, // 24 hours
      condition: 'memory' // memory, time, error
    },
    caching: {
      enabled: true,
      ttl: 300000, // 5 minutes
      maxSize: 100
    }
  },
  
  // Security Settings
  security: {
    rateLimiting: true,
    maxRequestsPerMinute: 30,
    blockSuspiciousUsers: true,
    logSuspiciousActivity: true,
    allowedFileTypes: ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'mp3', 'pdf', 'webp', 'wav', 'ogg'],
    maxFileSize: 100 * 1024 * 1024, // 100MB
    encryptSensitiveData: true,
    sessionSecurity: true,
    ipWhitelist: [],
    ipBlacklist: []
  },
  
  // External Services
  services: {
    weather: {
      provider: 'openweathermap',
      apiKey: '',
      units: 'metric',
      language: 'en'
    },
    translate: {
      provider: 'google',
      apiKey: '',
      defaultTarget: 'en',
      maxLength: 5000
    },
    urlShortener: {
      provider: 'tinyurl',
      apiKey: '',
      customDomain: ''
    },
    qrCode: {
      provider: 'qr-server',
      size: '300x300',
      format: 'png'
    },
    imageUpload: {
      provider: 'catbox',
      apiKey: '',
      maxSize: '50MB'
    }
  },
  
  // Social Media Links
  social: {
    github: 'https://github.com/mrnta-source',
    youtube: 'https://youtube.com/@mrnta-source',
    telegram: 'https://t.me/mrnta_source',
    instagram: 'https://instagram.com/mrnta_source',
    website: 'https://mrnta-source.github.io',
    whatsapp: 'https://wa.me/263777124998',
    support: 'https://wa.me/263777124998?text=Hello%20Ladybug%20Support'
  },
  
  // Bot Status Messages
  status: {
    online: "🟢 Ladybug Bot is Online & Ready!",
    offline: "🔴 Ladybug Bot is Offline",
    maintenance: "🔧 Ladybug Bot is under maintenance - Back soon!",
    busy: "⚡ Ladybug Bot is processing your request...",
    premium: "💎 Premium Ladybug Features Active",
    error: "❌ Ladybug encountered an error",
    success: "✅ Ladybug completed the task successfully"
  },
  
  // Command Categories
  categories: {
    general: '⚙️ General Commands',
    youtube: '🎵 YouTube Downloader',
    anime: '🎌 Anime Collection',
    nsfw: '🔞 NSFW Content',
    fun: '🎮 Fun & Entertainment',
    utility: '🛠️ Utility Tools',
    premium: '💎 Premium Features',
    logo: '🎨 Logo Maker',
    photo: '📸 Photo Editor',
    voice: '🎤 Voice Tools',
    ai: '🤖 AI Powered',
    social: '📱 Social Media',
    owner: '👑 Owner Only',
    group: '👥 Group Management',
    download: '📥 Download Commands',
    search: '🔍 Search Commands',
    convert: '🔄 Converter Commands',
    other: '📋 Other Commands'
  },
  
  // Auto Response Settings
  autoResponse: {
    enabled: true,
    responses: {
      'hello': '🐞 Hello! I\'m Ladybug Bot. How can I help you today?',
      'hi': '👋 Hi there! Ladybug at your service!',
      'thanks': 'You\'re welcome! 😊 Ladybug is always happy to help!',
      'bot': 'Yes, I\'m Ladybug Bot! 🐞 Your advanced WhatsApp assistant!',
      'menu': 'Type *.menu* to see all my amazing features! 🌟',
      'help': 'Need help? Type *.menu* or contact my developer! 💬'
    },
    customTriggers: {
      'ladybug': '🐞 You called? I\'m here to help!',
      'voice': '🎤 Try my voice cloning feature with *.voiceclone*!',
      'logo': '🎨 Create amazing logos with *.logo*!',
      'ai': '🤖 Experience AI art with *.aiart*!'
    }
  },
  
  // Backup Settings
  backup: {
    enabled: true,
    interval: 21600000, // 6 hours
    location: './backups/',
    maxBackups: 20,
    includeMedia: false,
    includeDatabase: true,
    includeLogs: true,
    compression: true,
    encryption: false
  },
  
  // Plugin System
  plugins: {
    enabled: true,
    autoLoad: true,
    directory: './plugins/',
    whitelist: [], // Specific plugins to load
    blacklist: [], // Plugins to ignore
    hotReload: true,
    sandboxed: true
  },
  
  // Development Settings
  development: {
    debug: false,
    verbose: false,
    testMode: false,
    mockResponses: false,
    devCommands: false,
    errorReporting: true,
    performanceMonitoring: true
  },
  
  // Maintenance Mode
  maintenance: {
    enabled: false,
    message: "🔧 Ladybug Bot is currently under maintenance. Please try again later. We'll be back soon with new features! 🐞",
    allowOwner: true,
    allowPremium: false,
    estimatedTime: "30 minutes",
    reason: "System updates and improvements"
  },
  
  // Session Configuration
  session: {
    name: 'ladybug-bot-session',
    saveInterval: 30000, // 30 seconds
    maxRetries: 5,
    retryDelay: 3000, // 3 seconds
    autoReconnect: true,
    qrTimeout: 60000, // 1 minute
    authTimeout: 60000 // 1 minute
  },
  
  // Notification Settings
  notifications: {
    startup: true,
    shutdown: true,
    errors: true,
    warnings: true,
    newUsers: true,
    newGroups: true,
    commands: false,
    updates: true
  },
  
  // Update System
  updates: {
    autoCheck: true,
    checkInterval: 3600000, // 1 hour
    autoDownload: false,
    autoInstall: false,
    notifyOwner: true,
    backupBeforeUpdate: true,
    updateChannel: 'stable' // stable, beta, alpha
  },
  
  // Analytics & Statistics
  analytics: {
    enabled: true,
    trackCommands: true,
    trackUsers: true,
    trackGroups: true,
    trackErrors: true,
    trackPerformance: true,
    reportInterval: 86400000, // 24 hours
    maxDataAge: 2592000000 // 30 days
  }
};

// Global variables
global.botname = settings.botName;
global.ownername = settings.botOwner;
global.owner = settings.owner;
global.packname = settings.packname;
global.author = settings.author;
global.prefa = settings.prefix;
global.ladybugVersion = settings.version;

// Environment-based overrides
if (process.env.NODE_ENV === 'production') {
  settings.development.debug = false;
  settings.development.verbose = false;
  settings.logging.level = 'warn';
  settings.autoFeatures.autoUpdate = true;
}

if (process.env.NODE_ENV === 'development') {
  settings.development.debug = true;
  settings.development.verbose = true;
  settings.logging.level = 'debug';
  settings.development.devCommands = true;
}

// Validation function
const validateSettings = () => {
  const errors = [];
  const warnings = [];
  
  // Critical validations
  if (!settings.ownerNumber || settings.ownerNumber === '263777124998') {
    errors.push('🚨 Please set your owner number in settings.js');
  }
  
  if (settings.owner.includes('263777124998')) {
    errors.push('🚨 Please update the owner array with your actual number');
  }
  
  // Feature validations
  if (settings.autoFeatures.antiSpam && !settings.spamProtection.enabled) {
    warnings.push('⚠️ Anti-spam feature is enabled but spam protection is disabled');
  }
  
  if (settings.ladybugFeatures.voiceCloning.enabled && !settings.apiKeys.elevenlabs) {
    warnings.push('⚠️ Voice cloning is enabled but ElevenLabs API key is missing');
  }
  
  if (settings.ladybugFeatures.aiArt.enabled && !settings.apiKeys.openai && !settings.apiKeys.stability) {
    warnings.push('⚠️ AI Art is enabled but no AI API keys are configured');
  }
  
  // Display results
  if (errors.length > 0) {
    console.error('🐞 Ladybug Bot - Critical Configuration Errors:');
    errors.forEach(error => console.error(`   ${error}`));
    console.error('   Please fix these errors before starting the bot!\n');
  }
  
  if (warnings.length > 0) {
    console.warn('🐞 Ladybug Bot - Configuration Warnings:');
    warnings.forEach(warning => console.warn(`   ${warning}`));
    console.warn('   These features may not work properly without proper configuration.\n');
  }
  
  if (errors.length === 0 && warnings.length === 0) {
    console.log('🐞 Ladybug Bot - Configuration validated successfully! ✅\n');
  }
  
  return { errors, warnings };
};

// Run validation
const validation = validateSettings();

// Export settings
module.exports = settings;

// Helper functions
module.exports.isOwner = (jid) => {
  return settings.owner.some(owner => jid.includes(owner));
};

module.exports.isPremium = (jid) => {
  return settings.premium.some(premium => jid.includes(premium));
};

module.exports.isMod = (jid) => {
  return settings.mods.some(mod => jid.includes(mod));
};

module.exports.getPrefix = () => {
  return settings.prefix;
};

module.exports.getBotName = () => {
  return settings.botName;
};

module.exports.getVersion = () => {
  return settings.version;
};

module.exports.getOwnerNumber = () => {
  return settings.ownerNumber;
};

// Settings updater function
module.exports.updateSetting = (key, value) => {
  try {
    const keys = key.split('.');
    let obj = settings;
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!obj[keys[i]]) obj[keys[i]] = {};
      obj = obj[keys[i]];
    }
    
    obj[keys[keys.length - 1]] = value;
    console.log(`🐞 Setting updated: ${key} = ${value}`);
    return true;
  } catch (error) {
    console.error(`🐞 Error updating setting ${key}:`, error);
    return false;
  }
};

// Get setting function
module.exports.getSetting = (key) => {
  try {
    const keys = key.split('.');
    let obj = settings;
    
    for (const k of keys) {
      if (obj[k] === undefined) return null;
      obj = obj[k];
    }
    
    return obj;
  } catch (error) {
    console.error(`🐞 Error getting setting ${key}:`, error);
    return null;
  }
};

// Feature checker functions
module.exports.isFeatureEnabled = (feature) => {
  return settings.autoFeatures[feature] || settings.ladybugFeatures[feature]?.enabled || false;
};

module.exports.hasApiKey = (service) => {
  return settings.apiKeys[service] && settings.apiKeys[service].length > 0;
};

// Configuration status
module.exports.getConfigStatus = () => {
  return {
    isValid: validation.errors.length === 0,
    errors: validation.errors,
    warnings: validation.warnings,
    featuresEnabled: Object.keys(settings.autoFeatures).filter(key => settings.autoFeatures[key]).length,
    apiKeysConfigured: Object.keys(settings.apiKeys).filter(key => settings.apiKeys[key]).length
  };
};

// Welcome message
console.log(`
🐞═══════════════════════════════════════════════════════════════🐞
    🌟 LADYBUG BOT SETTINGS LOADED SUCCESSFULLY! 🌟
🐞═══════════════════════════════════════════════════════════════🐞

📊 Configuration Status:
   • Bot Name: ${settings.botName}
   • Version: ${settings.version}
   • Owner: ${settings.botOwner}
   • Prefix: ${settings.prefix}
   • Features Enabled: ${Object.keys(settings.autoFeatures).filter(key => settings.autoFeatures[key]).length}
   • API Keys Configured: ${Object.keys(settings.apiKeys).filter(key => settings.apiKeys[key]).length}

🚀 Ready to start Ladybug Bot with advanced features!
💻 Developer: MR NTANDO OFC
🌐 GitHub: https://github.com/mrnta-source

🐞═══════════════════════════════════════════════════════════════🐞
`);
