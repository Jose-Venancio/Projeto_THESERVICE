const { Fatura } = require('../models');

exports.getAllFaturas = async (req, res) => {
    try {
        const faturas = await Fatura.findAll();
        res.json(faturas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createFatura = async (req, res) => {
    try {
        const novaFatura = await Fatura.create(req.body);
        res.status(201).json(novaFatura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateFatura = async (req, res) => {
    try {
        const fatura = await Fatura.findByPk(req.params.id);
        if (!fatura) {
            return res.status(404).json({ error: 'Fatura não encontrada' });
        }
        await fatura.update(req.body);
        res.json(fatura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteFatura = async (req, res) => {
    try {
        const fatura = await Fatura.findByPk(req.params.id);
        if (!fatura) {
            return res.status(404).json({ error: 'Fatura não encontrada' });
        }
        await fatura.destroy();
        res.status(204).json({ message: 'Fatura deletada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
