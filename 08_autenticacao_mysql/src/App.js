import express from 'express';
import { createUsuario, deleteUsuario, login, readUsuario, upedateUsuario, verificarToken } from './controllers/UsuarioController.js';
import cors from "cors"; // ✅ mantém essa
import dotenv from "dotenv";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.post('/usuario', createUsuario);
app.get('/usuario', verificarToken, readUsuario);
app.put('/usuario/:id_usuario', upedateUsuario);
app.delete('/usuario/:id_usuario', deleteUsuario);

app.post('/login/', login);

// app.get('/verificar/', verificarToken);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
