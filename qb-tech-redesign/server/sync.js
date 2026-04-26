const sequelize = require('./config/db');
const Job = require('./models/Job');
const Inquiry = require('./models/Inquiry');

const syncDatabase = async () => {
    try {
        // { alter: true } updates tables without losing data
        // Use { force: true } only if you want to wipe everything and start over
        await sequelize.sync({ alter: true });
        console.log('✅ Database tables synced successfully!');
        process.exit(0); // Exit script after finishing
    } catch (error) {
        console.error('❌ Error syncing database:', error);
        process.exit(1);
    }
};

syncDatabase();