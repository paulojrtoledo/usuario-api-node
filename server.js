import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from 'cors'

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors())

// ===========================
// Criar usuário
// ===========================
app.post('/usuarios', async (req, res) => {
    try {
        const { name, age, email } = req.body;

        if (!name || age === undefined || !email) {
            return res.status(400).json({ error: "Todos os campos (name, age, email) são obrigatórios." });
        }

        const novoUsuario = await prisma.user.create({
            data: {
                name,
                age: age.toString(),
                email
            }
        });

        res.status(201).json(novoUsuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar usuário." });
    }
});

// ===========================
// Listar usuários com filtro opcional
// ===========================
app.get('/usuarios', async (req, res) => {
    try {
        const { name, age, email } = req.query;

        // Monta o filtro dinamicamente
        const filtro = {};
        if (name) filtro.name = { contains: name, mode: "insensitive" };
        if (age) filtro.age = age.toString();
        if (email) filtro.email = { contains: email, mode: "insensitive" };

        const usuarios = await prisma.user.findMany({
            where: filtro
        });

        res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar usuários." });
    }
});

// ===========================
// Atualizar usuário pelo ID
// ===========================
app.put('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, email } = req.body;

        if (!name || age === undefined || !email) {
            return res.status(400).json({ error: "Todos os campos (name, age, email) são obrigatórios." });
        }

        const usuarioAtualizado = await prisma.user.update({
            where: { id },
            data: {
                name,
                age: age.toString(),
                email
            }
        });

        res.status(200).json(usuarioAtualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao atualizar usuário." });
    }
});

// ===========================
// Deletar usuário pelo ID
// ===========================
app.delete('/usuarios/:id', async (req, res) => {
    try {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar usuário." });
    }
});

// ===========================
// Iniciar servidor
// ===========================
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
