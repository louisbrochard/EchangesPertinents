require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
    res.send("Serveur Stripe opérationnel !");
});

// Démarrer le serveur
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});
