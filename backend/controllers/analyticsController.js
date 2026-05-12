const Product = require('../models/product');

exports.getRecommendations = async (req, res) => {
    try {
        const recommendations = await Product.find().limit(4);
        res.status(200).json({ success: true, data: recommendations, provider: "RapidMiner" });
    } catch (error) {
        res.status(500).json({ message: "Analytics Error" });
    }
};
