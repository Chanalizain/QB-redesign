const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Job = sequelize.define('Job', {
    title: { type: DataTypes.STRING, allowNull: false },
    desc: { type: DataTypes.TEXT, allowNull: false },
    category: { type: DataTypes.STRING, defaultValue: 'Engineering' },
    type: { type: DataTypes.STRING, defaultValue: 'Full-Time' },
    location: { type: DataTypes.STRING, defaultValue: 'Remote' },
    status: {
        type: DataTypes.ENUM('Open', 'Closed'),
        defaultValue: 'Open'
    }
});

module.exports = Job;