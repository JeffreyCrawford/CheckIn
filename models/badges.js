module.exports = function(sequelize, Sequelize) {
    const Badge = sequelize.define("badge", {
    
        barCode: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true
        },

        userID: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false,
        }
    
    });

    return Badge;
}