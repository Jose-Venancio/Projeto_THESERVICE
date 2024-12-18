const { Servico } = require('../models');

exports.getAllServicos = async (req, res) => {
    try {
        const servicos = await Servico.findAll();
        res.json(servicos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createServico = async (req, res) => {
    try {
        const novoServico = await Servico.create(req.body);
        res.status(201).json(novoServico);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateServico = async (req, res) => {
    try {
        const servico = await Servico.findByPk(req.params.id);
        if (!servico) {
            return res.status(404).json({ error: 'Servico não encontrado' });
        }
        await servico.update(req.body);
        res.json(servico);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteServico = async (req, res) => {
    try {
        const servico = await Servico.findByPk(req.params.id);
        if (!servico) {
            return res.status(404).json({ error: 'Servico não encontrado' });
        }
        await servico.destroy();
        res.status(204).json({ message: 'Servico deletado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
