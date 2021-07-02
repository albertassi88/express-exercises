const User = (sequelize, DataTypes) => {
    const Users = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    }, { timestamps: false });  

    return Users;
};

module.exports = User; 
