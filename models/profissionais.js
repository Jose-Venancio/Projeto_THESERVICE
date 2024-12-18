module.exports = (sequelize, DataTypes) => {
    const Profissional = sequelize.define('Profissional', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        especialidade: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        avaliacoes: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        localizacao: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        experiencia: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'profissionais',
        timestamps: false
    });

    return Profissional;
};
