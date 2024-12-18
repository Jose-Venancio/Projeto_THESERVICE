const { Profissional } = require('../models');

exports.getAllProfissionais = async (req, res) => {
    try {
        const profissionais = await Profissional.findAll();
        res.json(profissionais);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createProfissional = async (req, res) => {
    try {
        const novoProfissional = await Profissional.create(req.body);
        res.status(201).json(novoProfissional);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProfissional = async (req, res) => {
    try {
        const profissional = await Profissional.findByPk(req.params.id);
        if (!profissional) {
            return res.status(404).json({ error: 'Profissional não encontrado' });
        }
        await profissional.update(req.body);
        res.json(profissional);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteProfissional = async (req, res) => {
    try {
        const profissional = await Profissional.findByPk(req.params.id);
        if (!profissional) {
            return res.status(404).json({ error: 'Profissional não encontrado' });
        }
        await profissional.destroy();
        res.status(204).json({ message: 'Profissional deletado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
