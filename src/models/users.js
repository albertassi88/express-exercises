const User = (sequelize, DataTypes) => {
    const User = sequelize.define("User", { 
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,        
    });   

    // relacionamento 1xN entre as tabelas de users e produtos 
    User.associate = (models) => { //hasMany = user possui vários produtos
        User.hasMany(models.Product, { as: 'products', foreignKey: 'userId' });
    };

    return User;
};

module.exports = User;