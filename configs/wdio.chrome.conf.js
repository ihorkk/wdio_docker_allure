const { config } = require("./wdio.conf");

const chromeConfig = {
    ...config,
    services: [['selenium-standalone', {chrome: 'latest'}]],
    capabilities: [{
        maxInstances: 2,
        browserName: "chrome",
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--start-maximized'],
        }
    }],
};

exports.config = chromeConfig;