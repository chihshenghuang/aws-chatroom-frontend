const merge = require('lodash/merge')


const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
    // apiUrl: 'https://jsonplaceholder.typicode.com',
    // apiUrl: 'http://127.0.0.1:3000',
    apiUrl: 'http://ec2-18-191-250-169.us-east-2.compute.amazonaws.com:3000',
    // apiUrl: '/',
    // fbAppId: '991453140998882',
    // googleClientId: '464712936089-q953apdu1bjiqtcjndktnnk1ts4f2cgv.apps.googleusercontent.com',
    // gtmId: 'GTM-WX5ZNVC',
  },
  test: {},
  development: {},
  production: {
    // apiUrl: 'http://127.0.0.1:3000',
    apiUrl: 'http://ec2-18-191-250-169.us-east-2.compute.amazonaws.com:3000',
    // apiUrl: '/',
  },
}

module.exports = merge(config.all, config[config.all.env])
