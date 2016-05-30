var config = {}; // That you do not need, do not pay attention!

config.account = {}; // That you do not need, do not pay attention!

config.verbosityLevel = 1; // 0 = Shows small amount of logs | 1 = Shows default logs | 2 = Shows most logs

config.createUUID = false; // This function is responsible for the creation of a stable uuid, on the server side !

config.userAgent = 'AgarLucky'; // Useragent the bot will use.

config.reconnectServer = true; // Reconnect to server.

config.webSocket = "ws"//127.0.0.1:8081"; 

config.standartServer = "ws://127.0.0.1:8081"; // The standartServer connects your node script with your browser (mouse coordinates & commands)

config.serverPort = 8081; // It will run on this port

config.client_uuid = "Your_uuid"; // UUID

config.proxies = "proxy.txt"; // Location of your proxy files with HTTP and SOCKS4/5 proxies !

config.botsPerIp = 1; // BotsPerIp connecting to server.

config.onboardingTimer = 5000; // Connection timer .

config.maxBots = 128; // Maximum number of bots to load

config.useRandomSkinName = true; // Not Working , in the near future, this function will be deleted permanently!

config.botMode = "TestMode"; // The test events !

config.minimumMassBeforeFeed = 0; // Edit this value so bots collect mass before coming towards the player

config.enableSaveMoveTo = true; // Not Working , in the near future, this function will be deleted permanently!

module.exports = config; // That you do not need, do not pay attention!
