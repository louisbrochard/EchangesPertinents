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

// Importer les routes
const paymentRoutes = require("./routes/paymentRoutes");
const donorRoutes = require("./routes/donorRoutes");

// Utiliser les routes
app.use("/api/payments", paymentRoutes);
app.use("/api/donors", donorRoutes);

// Route de test
app.get("/", (req, res) => {
    res.send("✅ Serveur Stripe opérationnel !");
});

// Démarrer le serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Serveur backend démarré sur http://localhost:${PORT}`);
});
