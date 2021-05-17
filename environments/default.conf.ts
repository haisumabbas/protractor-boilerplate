import { browser, Config } from 'protractor'

export let config: Config = {
    directConnect: true,
    remote: {
        'baseUrl': 'https://www.google.com'
    },
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            args: [
                "--incognito",
                //'--start-fullscreen',
                // '--headless'
            ]
        }
    },
    framework: 'jasmine',
    specs: [
        'tests/workflows/*spec.js'
    ],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 100000
    },
    SELENIUM_PROMISE_MANAGER: false
};