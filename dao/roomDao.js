const Sequelize = require('sequelize')
const {Room} = require('../model')
const {Code} = require('../config/resource')

module.exports = {
    get model() {
        return Room
    },

    getRoomInfoById(id) {
        return Room.find({
            where: {
                id
            }
        })
    }
}
