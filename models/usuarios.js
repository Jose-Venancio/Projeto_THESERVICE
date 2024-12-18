module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        endereco: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        data_cadastro: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        status: {
            type: DataTypes.STRING(1),
            allowNull: true
        },
        tipo: {  type: DataTypes.STRING(20), 
            allowNull: false
         }
    }, {
        tableName: 'usuarios',
        timestamps: false
    });

    return Usuario;
};
