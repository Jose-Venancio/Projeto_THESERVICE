module.exports = (sequelize, DataTypes) => {
    const Fatura = sequelize.define('Fatura', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_contrato: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        valor_total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        pagamento: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        data_emissao: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        data_vencimento: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'faturas',
        timestamps: false
    });

    return Fatura;
};
