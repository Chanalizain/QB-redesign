const sequelize = require('./config/db');
const Job = require('./models/Job');

const seedJobs = async () => {
    const jobs = [
        { title: "DevOps Engineer", desc: "Design and build scalable backend systems and APIs powering our enterprise platforms.", category: "Engineering", type: "Full-Time", location: "Remote" },
        { title: "Mobile Developer", desc: "Create responsive, high-performance web applications using modern frontend frameworks.", category: "Engineering", type: "Full-Time", location: "Remote" },
        { title: "Frontend Developer", desc: "Develop and deploy modern, responsive frontend interfaces using React and TypeScript.", category: "Engineering", type: "Full-Time", location: "Remote" },
        { title: "Backend Developer", desc: "Craft robust server-side applications, APIs, and database architectures.", category: "Engineering", type: "Full-Time", location: "Remote" },
        { title: "Full-Stack Developer", desc: "Build end-to-end web applications spanning frontend, backend, and cloud infrastructure.", category: "Engineering", type: "Full-Time", location: "Remote" }
    ];

    try {
        await sequelize.authenticate();
        console.log('✅ Connection established for seeding.');

        // Check if jobs already exist to avoid duplicates
        const count = await Job.count();
        if (count === 0) {
            await Job.bulkCreate(jobs);
            console.log('🚀 Database seeded with 5 job positions!');
        } else {
            console.log('ℹ️ Database already has data. Skipping seed.');
        }

        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
};

seedJobs();