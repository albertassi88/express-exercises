const Product = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", { //inserir o nome da tabela no singular
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.FLOAT  //referente a coluna criada na migrations
    });

    // relacionamento 1x1 entre as tabelas de produtos e users 
    Product.associate = (models) => { //belongsTo = produto pertence ao user
        Product.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    };

    return Product;
};

module.exports = Product;