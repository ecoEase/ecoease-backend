const Chatroom = require('../../models/chatroom')
const Mitra = require('../../models/mitra')
const User = require('../../models/user')

const postChatroom = async (req, res) => {
    try {
        const chatroom = req.body
        const result = await Chatroom.create(chatroom)
        res.status(200).json({ message: "Success post new chatroom", data: result })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const getChatrooms = async (req, res) => {
    const includeModels = [
        { model: Mitra },
        { model: User },
    ]
    try {
        const { userId, mitraId } = req.query
        let result
        if (userId) {
            result = await Chatroom.findAll({ include: includeModels, where: { user_id: userId } })
        } else if (mitraId) {
            result = await Chatroom.findAll({ include: includeModels, where: { mitra_id: mitraId } })
        } else {
            result = await Chatroom.findAll({ include: includeModels })
        }

        if (result.length == 0) return res.status(404).json({ message: "no chatroom data" })

        res.status(200).json({ message: "Success post new chatroom", data: result })
    } catch (error) {
        res.status(500).json({ message: "Error: " + error })
    }
}

const deleteChatroom = async (req, res) => {
    try {
        const { id } = req.params
        const chatroom = await Chatroom.findByPk(id)
        if (!chatroom) res.status(404).json({ message: "no chat room data" })

        const result = await Chatroom.destroy({
            where: { id },
        });
        res.status(200).json({ message: "Success delete chatroom", data: result })
    } catch (error) {
        res.status(500).json({ message: "Error: " + error })
    }
}

module.exports = {
    getChatrooms,
    postChatroom,
    deleteChatroom
};
