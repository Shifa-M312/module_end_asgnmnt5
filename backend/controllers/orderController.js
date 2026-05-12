const Order = require('../models/order');

exports.createOrder = async (req, res) => {
    try {
        const { orderItems, totalPrice } = req.body;
        const order = await Order.create({
            user: req.user.id,
            orderItems,
            totalPrice
        });
        res.status(201).json({ success: true, order });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id });
        res.status(200).json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
