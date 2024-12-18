const { Usuario } = require('../models');

exports.getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createUsuario = async (req, res) => {
    try {
        const novoUsuario = await Usuario.create(req.body);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario não encontrado' });
        }
        await usuario.update(req.body);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario não encontrado' });
        }
        await usuario.destroy();
        res.status(204).json({ message: 'Usuario deletado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
