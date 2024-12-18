const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

// Importando todos os modelos
const Usuario = require('./usuarios')(sequelize, DataTypes);
const Servico = require('./servicos')(sequelize, DataTypes);
const Avaliacao = require('./avaliacoes')(sequelize, DataTypes);
const Profissional = require('./profissionais')(sequelize, DataTypes);
const Contrato = require('./contratos')(sequelize, DataTypes);
const Fatura = require('./faturas')(sequelize, DataTypes);


Usuario.hasMany(Avaliacao, { foreignKey: 'id_cliente' });
Usuario.hasMany(Contrato, { foreignKey: 'id_cliente' });
Servico.hasMany(Contrato, { foreignKey: 'id_servico' });
Avaliacao.belongsTo(Usuario, { foreignKey: 'id_cliente' });
Avaliacao.belongsTo(Usuario, { foreignKey: 'id_profissional' });
Contrato.belongsTo(Usuario, { foreignKey: 'id_cliente' });
Contrato.belongsTo(Servico, { foreignKey: 'id_servico' });
Fatura.belongsTo(Contrato, { foreignKey: 'id_contrato' });

module.exports = { sequelize, Usuario, Servico, Avaliacao, Profissional, Contrato, Fatura };
