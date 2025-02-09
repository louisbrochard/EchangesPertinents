const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res) => {
    try {
        const { amount, name } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convertir en centimes
            currency: 'eur',
            payment_method_types: ['card']
        });

        res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
