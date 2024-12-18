const { Contrato } = require('../models');

exports.getAllContratos = async (req, res) => {
    try {
        const contratos = await Contrato.findAll();
        res.json(contratos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createContrato = async (req, res) => {
    try {
        const novoContrato = await Contrato.create(req.body);
        res.status(201).json(novoContrato);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateContrato = async (req, res) => {
    try {
        const contrato = await Contrato.findByPk(req.params.id);
        if (!contrato) {
            return res.status(404).json({ error: 'Contrato não encontrado' });
        }
        await contrato.update(req.body);
        res.json(contrato);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteContrato = async (req, res) => {
    try {
        const contrato = await Contrato.findByPk(req.params.id);
        if (!contrato) {
            return res.status(404).json({ error: 'Contrato não encontrado' });
        }
        await contrato.destroy();
        res.status(204).json({ message: 'Contrato deletado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
