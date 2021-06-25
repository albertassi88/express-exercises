const Store = (sequelize, DataTypes) => {
    const Store = sequelize.define("Store", {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {
       timestamps: false 
    }, {
        freezeTableName: true  //para definir que o nome da tabela esteja no singular
    });
    return Store;
};

module.exports = Store;