const Product = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", { //inserir o nome da tabela no singular
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.FLOAT  //referente a coluna criada na migrations
    });
    return Product;
};

module.exports = Product;