const Sequelize = require('sequelize')
const sequelize = require('../util/sequelize')

const Room = sequelize.define('room', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING
	},
	video: {
		type: Sequelize.STRING
	},
	vid: {
		type: Sequelize.INTEGER
	},
	status: {
		type: Sequelize.ENUM,
		values: ["直播", "录播"],
		defaultValue: "录播"
	}
}, {
	comment: "直播室信息",
	tableName: "room",
	paranoid: true,
	underscored: false
})

module.exports = Room