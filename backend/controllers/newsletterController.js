const Subscriber = require('../models/Subscriber');

exports.subscribe = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ message: 'Email is required' });

        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();
        res.status(201).json({ message: 'Subscribed successfully' });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ message: 'Email already subscribed' });
        }
        res.status(500).json({ message: err.message });
    }
};
