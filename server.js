import express from "express";
import authRoutes from "./routes/auth.routes.js";

const app = express();
app.use(express.json());

//Rotas de autenticação
app.use("/auth", authRoutes);

//Porta
const PORT = 3000;
app.listen(PORT, () => console.log("Servidor rodando na porta $(PORT)"));
