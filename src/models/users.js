const User = (sequelize, DataTypes) => {
    const User = sequelize.define("User", { 
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,        
    });   

    return User;
};

module.exports = User;