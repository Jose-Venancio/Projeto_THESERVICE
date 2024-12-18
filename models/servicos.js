module.exports = (sequelize, DataTypes) => {
    const Servico = sequelize.define('Servico', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_servico: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        preco_estimado: {
            type: DataTypes.NUMERIC,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        data_cadastro: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'servicos',
        timestamps: false
    });

    return Servico;
};
