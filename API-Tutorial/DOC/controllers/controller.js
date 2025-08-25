import { db } from "../services/firebase.js"; // Import Firestore
import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions

export const getAllDados = async (req, res) => {
    try {
        const dadosCollection = collection(db, "dados"); // Reference to the Firestore collection
        const dadosSnapshot = await getDocs(dadosCollection); // Fetch documents
        const dadosList = dadosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Map documents to data
        res.json(dadosList); // Return the data
    } catch (error) {
        console.error("Error fetching data from Firestore:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
};
