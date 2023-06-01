const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {
    const token = req.headers.authorization
    const invalidMsg = "Invalid token"
    const secret = 'please change this secret later!'

    if (!token) return res.status(498).json({ message: invalidMsg })

    jwt.verify(token, secret, (err, decodeToken) => {
        if (err) return res.status(498).json({ message: invalidMsg })
        return next()
    })
}

module.exports = {
    requireAuth
}
