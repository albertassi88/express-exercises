const User = (sequelize, DataTypes) => {
    const User = sequelize.define("User", { //inserir o nome da tabela no singular
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    // relacionamento 1xN entre as tabelas de users e produtos 
    User.associate = (models) => { //hasMany = user possui vários produtos
        User.hasMany(models.Product, { as: 'products', foreignKey: 'userId' });
    };

    return User;
};

module.exports = User;