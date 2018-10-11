module.exports = function(sequelize, Sequelize) {
    const Attendee = sequelize.define("attendee", {

        name: {
            type: Sequelize.STRING,
            allowNull: true
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
            allowNull: true
        },

        checkInTime: {
            type: Sequelize.DATE,
            allowNull: true
        },
    
    });

    return Attendee;
}