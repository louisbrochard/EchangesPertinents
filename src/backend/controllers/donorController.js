const db = require('../config/firebaseConfig'); // Connexion à Firebase

// Ajouter un donateur après un paiement réussi
exports.addDonor = async (req, res) => {
    try {
        const { name, amount } = req.body;
        if (!name || !amount) {
            return res.status(400).json({ error: "Nom et montant requis." });
        }

        // Enregistrer le donateur dans Firebase
        await db.collection('donateurs').add({ name, amount, timestamp: new Date() });

        res.status(201).json({ message: "Donateur ajouté avec succès !" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Récupérer la liste des donateurs
exports.getDonors = async (req, res) => {
    try {
        const donorsSnapshot = await db.collection('donateurs').orderBy('timestamp', 'desc').limit(10).get();
        const donors = donorsSnapshot.docs.map(doc => doc.data());

        res.status(200).json(donors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
