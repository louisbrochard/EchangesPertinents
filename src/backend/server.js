require("dotenv").config({ path: "./src/backend/.env" });

const express = require("express");
const cors = require("cors");

// Vérifier si la clé Stripe est bien définie
if (!process.env.STRIPE_SECRET_KEY) {
    console.error("❌ STRIPE_SECRET_KEY non défini dans .env !");
    process.exit(1); // Arrêter le serveur si la clé est manquante
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
    res.send("✅ Serveur Stripe opérationnel !");
});

// Route pour créer un paiement avec Stripe
app.post("/create-payment-intent", async (req, res) => {
    try {
        const { amount, currency } = req.body;

        if (!amount || !currency) {
            return res.status(400).json({ error: "Montant et devise requis" });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("Erreur lors de la création du paiement :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// Démarrer le serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Serveur backend démarré sur http://localhost:${PORT}`);
});
