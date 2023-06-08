const Mitra = require('../../models/mitra')
const User = require('../../models/user')

const updateUserFCM = async (req, res) => {
    try {
        const { id } = req.params
        const { fcm_token } = req.body
        const user = await User.findByPk(id)

        if (!user) return res.status(404).json({ message: "cant find user record!" })

        const result = await user.update({ fcm_token: fcm_token })
        res.status(200).json({ message: "Success update fcm token", data: result })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const updateMitraFCM = async (req, res) => {
    try {
        const { id } = req.params
        const { fcm_token } = req.body
        const mitra = await Mitra.findByPk(id)

        if (!mitra) return res.status(404).json({ message: "cant find mitra record!" })

        const result = await mitra.update({ fcm_token: fcm_token })
        res.status(200).json({ message: "Success update fcm token", data: result })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}


module.exports = {
    updateUserFCM,
    updateMitraFCM,
}
