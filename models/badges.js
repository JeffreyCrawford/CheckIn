module.exports = function(sequelize, Sequelize) {
    const Badge = sequelize.define("badge", {
    
        barCode: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: true,
        },

        userID: {
            type: Sequelize.STRING,
            unique: true
        }
    
    });

    return Badge;
}

