const Product = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", { 
        name: DataTypes.STRING,
        description: DataTypes.STRING,        
    });   

    // relacionamento 1x1 entre as tabelas de produtos e users 
    Product.associate = (models) => { //belongsTo = produto pertence ao user
        Product.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    };

    return Product;
};

module.exports = Product;