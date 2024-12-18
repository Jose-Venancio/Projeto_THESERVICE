module.exports = (sequelize, DataTypes) => {
    const Avaliacao = sequelize.define('Avaliacao', {
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
        comentario: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        nota: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        data_avaliacao: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'avaliacoes',
        timestamps: false
    });

    return Avaliacao;
};
