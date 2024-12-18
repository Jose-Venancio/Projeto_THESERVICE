const { Avaliacao } = require('../models');

exports.getAllAvaliacoes = async (req, res) => {
    try {
        const avaliacoes = await Avaliacao.findAll();
        res.json(avaliacoes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createAvaliacao = async (req, res) => {
    try {
        const novaAvaliacao = await Avaliacao.create(req.body);
        res.status(201).json(novaAvaliacao);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateAvaliacao = async (req, res) => {
    try {
        const avaliacao = await Avaliacao.findByPk(req.params.id);
        if (!avaliacao) {
            return res.status(404).json({ error: 'Avaliacao não encontrada' });
        }
        await avaliacao.update(req.body);
        res.json(avaliacao);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteAvaliacao = async (req, res) => {
    try {
        const avaliacao = await Avaliacao.findByPk(req.params.id);
        if (!avaliacao) {
            return res.status(404).json({ error: 'Avaliacao não encontrada' });
        }
        await avaliacao.destroy();
        res.status(204).json({ message: 'Avaliacao deletada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
