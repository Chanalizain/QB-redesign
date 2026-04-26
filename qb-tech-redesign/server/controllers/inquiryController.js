const Inquiry = require('../models/Inquiry');

exports.createInquiry = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newInquiry = await Inquiry.create({ name, email, message });
        res.status(201).json({ success: true, data: newInquiry });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};