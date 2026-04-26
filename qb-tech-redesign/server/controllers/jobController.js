const Job = require('../models/Job');

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.findAll({ where: { status: 'Open' } });
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching jobs", error: error.message });
    }
};