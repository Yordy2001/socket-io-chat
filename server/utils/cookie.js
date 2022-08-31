const expressSession = require('express-session')

module.exports = expressSession({
    secret: 'session-chat',
    aveUninitialized: false,
    cookie: { secure: false, maxAge:
        new Date(Date.now() + 8 * 3600000)}
})
