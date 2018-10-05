module.exports = function(sequelize, Sequelize) {
    const Attendee = sequelize.define("attendee", {

        userID: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            primaryKey: true
        },

        name: {
            type: Sequelize.STRING,
            allowNull: false
        },

        title: {
            type: Sequelize.STRING,
            allowNull: true
        },

        community: {
            type: Sequelize.STRING,
            allowNull: true
        },

        county: {
            type: Sequelize.STRING,
            allowNull: true
        },

        phone: {
            type: Sequelize.STRING,
            allowNull: true
        },

        email: {
            type: Sequelize.STRING,
            allowNull: true
        },

        votingMember: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },

        checkInTime: {
            type: Sequelize.STRING,
            allowNull: true
        },
    
    });

    return Attendee;
}