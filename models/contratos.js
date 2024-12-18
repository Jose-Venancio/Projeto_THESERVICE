module.exports = (sequelize, DataTypes) => {
    const Contrato = sequelize.define('Contrato', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_profissional: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status_contrato: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        data_inicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        data_conclusao: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'contratos',
        timestamps: false
    });

    return Contrato;
};
