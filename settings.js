/**
 * Knight Bot Settings Configuration
 * Enhanced settings for Knight Bot with Ladybug Commands
 * Copyright (c) 2024 Professor
 */

const settings = {
  // Bot Information
  packname: 'LADYBUG BOT',
  author: 'Professor',
  botName: "Knight Bot MD",
  botOwner: 'Professor',
  ownerNumber: '919876543210', // Set your number here without + symbol
  
  // Command Configuration
  prefix: '.',
  commandMode: "public", // public, private, group
  description: "Advanced WhatsApp Bot with Ladybug Commands for managing groups and automating tasks.",
  version: "2.1.0",
  
  // Owner Configuration
  owner: ['919876543210'], // Array of owner numbers
  premium: ['919876543210'], // Premium users
  
  // API Keys
  giphyApiKey: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  weatherApiKey: '', // Add your weather API key
  translateApiKey: '', // Add your Google Translate API key
  
  // Bot Features
  features: {
    autoRead: true,
    autoTyping: false,
    autoRecording: false,
    autoStatus: true,
    welcomeMessage: true,
    antiLink: false,
    antiSpam: true,
    groupOnly: false,
    privateOnly: false
  },
  
  // Spam Protection
  spamProtection: {
    enabled: true,
    maxCommands: 5, // Max commands per minute
    cooldown: 60000, // 1 minute cooldown
    warningMessage: "⚠️ Please don't spam commands! Wait a moment before using another command."
  },
  
  // Welcome & Goodbye Messages
  messages: {
    welcome: "👋 Welcome to the group! Please read the group rules and enjoy your stay.",
    goodbye: "👋 Goodbye! Thanks for being part of our group.",
    promote: "🎉 Congratulations! You have been promoted to admin.",
    demote: "📉 You have been demoted from admin position."
  },
  
  // Group Settings
  groupSettings: {
    antiLink: {
      enabled: false,
      action: 'warn', // warn, kick, delete
      whitelist: ['chat.whatsapp.com']
    },
    antiSpam: {
      enabled: true,
      maxMessages: 10,
      timeWindow: 60000, // 1 minute
      action: 'warn' // warn, mute, kick
    },
    wordFilter: {
      enabled: false,
      words: [], // Add filtered words
      action: 'delete' // delete, warn, kick
    }
  },
  
  // Database Configuration
  database: {
    enabled: false,
    type: 'json', // json, mongodb, mysql
    path: './database/',
    mongodb: {
      uri: '',
      dbName: 'knightbot'
    }
  },
  
  // Logging Configuration
  logging: {
    enabled: true,
    level: 'info', // error, warn, info, debug
    saveToFile: true,
    logPath: './logs/',
    maxFileSize: '10MB',
    maxFiles: 5
  },
  
  // Performance Settings
  performance: {
    maxConcurrentCommands: 10,
    commandTimeout: 30000, // 30 seconds
    memoryLimit: '512MB',
    autoRestart: {
      enabled: false,
      interval: 86400000 // 24 hours
    }
  },
  
  // Security Settings
  security: {
    rateLimiting: true,
    maxRequestsPerMinute: 20,
    blockSuspiciousUsers: true,
    logSuspiciousActivity: true,
    allowedFileTypes: ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'mp3', 'pdf'],
    maxFileSize: 50 * 1024 * 1024 // 50MB
  },
  
  // External Services
  services: {
    weather: {
      provider: 'openweathermap',
      apiKey: '',
      units: 'metric'
    },
    translate: {
      provider: 'google',
      apiKey: '',
      defaultTarget: 'en'
    },
    urlShortener: {
      provider: 'tinyurl',
      apiKey: ''
    },
    qrCode: {
      provider: 'qr-server',
      size: '200x200'
    }
  },
  
  // Social Media Links
  social: {
    github: 'https://github.com/mrunqiuehacker',
    youtube: 'https://youtube.com/@mruniquehacker',
    telegram: '',
    instagram: '',
    website: ''
  },
  
  // Bot Status Messages
  status: {
    online: "🟢 Knight Bot is Online",
    offline: "🔴 Knight Bot is Offline",
    maintenance: "🔧 Knight Bot is under maintenance",
    busy: "⚡ Knight Bot is processing commands"
  },
  
  // Command Categories
  categories: {
    general: '📋 General Commands',
    fun: '🎮 Fun Commands',
    utility: '🛠️ Utility Commands',
    group: '👥 Group Management',
    owner: '👑 Owner Commands',
    download: '📥 Download Commands',
    search: '🔍 Search Commands',
    convert: '🔄 Converter Commands'
  },
  
  // Auto Response Settings
  autoResponse: {
    enabled: false,
    responses: {
      'hello': 'Hello! How can I help you today?',
      'hi': 'Hi there! 👋',
      'thanks': 'You\'re welcome! 😊',
      'bot': 'Yes, I\'m Knight Bot! How can I assist you?'
    }
  },
  
  // Backup Settings
  backup: {
    enabled: false,
    interval: 86400000, // 24 hours
    location: './backups/',
    maxBackups: 7,
    includeMedia: false
  },
  
  // Plugin System
  plugins: {
    enabled: true,
    autoLoad: true,
    directory: './plugins/',
    whitelist: [], // Specific plugins to load
    blacklist: [] // Plugins to ignore
  },
  
  // Development Settings
  development: {
    debug: false,
    verbose: false,
    testMode: false,
    mockResponses: false
  },
  
  // Maintenance Mode
  maintenance: {
    enabled: false,
    message: "🔧 Bot is currently under maintenance. Please try again later.",
    allowOwner: true,
    estimatedTime: "30 minutes"
  },
  
  // Session Configuration
  session: {
    name: 'knight-bot-session',
    saveInterval: 30000, // 30 seconds
    maxRetries: 3,
    retryDelay: 5000 // 5 seconds
  }
};

// Global variables
global.botname = settings.botName;
global.ownername = settings.botOwner;
global.owner = settings.owner;
global.packname = settings.packname;
global.author = settings.author;
global.prefa = settings.prefix;

// Environment-based overrides
if (process.env.NODE_ENV === 'production') {
  settings.development.debug = false;
  settings.development.verbose = false;
  settings.logging.level = 'warn';
}

if (process.env.NODE_ENV === 'development') {
  settings.development.debug = true;
  settings.development.verbose = true;
  settings.logging.level = 'debug';
}

// Validation function
const validateSettings = () => {
  const errors = [];
  
  if (!settings.ownerNumber || settings.ownerNumber === '919876543210') {
    errors.push('Please set your owner number in settings.js');
  }
  
  if (settings.owner.includes('919876543210')) {
    errors.push('Please update the owner array with your actual number');
  }
  
  if (settings.features.antiSpam && !settings.spamProtection.enabled) {
    errors.push('Anti-spam feature is enabled but spam protection is disabled');
  }
  
  if (errors.length > 0) {
    console.warn('⚠️ Settings validation warnings:');
    errors.forEach(error => console.warn(`   - ${error}`));
  }
};

// Run validation
validateSettings();

// Export settings
module.exports = settings;

// Helper functions
module.exports.isOwner = (jid) => {
  return settings.owner.some(owner => jid.includes(owner));
};

module.exports.isPremium = (jid) => {
  return settings.premium.some(premium => jid.includes(premium));
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

// Settings updater function
module.exports.updateSetting = (key, value) => {
  const keys = key.split('.');
  let obj = settings;
  
  for (let i = 0; i < keys.length - 1; i++) {
    if (!obj[keys[i]]) obj[keys[i]] = {};
    obj = obj[keys[i]];
  }
  
  obj[keys[keys.length - 1]] = value;
  return true;
};

// Get setting function
module.exports.getSetting = (key) => {
  const keys = key.split('.');
  let obj = settings;
  
  for (const k of keys) {
    if (obj[k] === undefined) return null;
    obj = obj[k];
  }
  
  return obj;
};
