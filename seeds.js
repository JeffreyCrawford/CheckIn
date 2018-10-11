 var popTables = function(queryInterface, Sequelize) {


	 queryInterface.sequelize.models.attendees.create( {
        userID: 0,
        name: "Jeff Crawford",
        title: "Mayor",
        community: "Northfield Center",
        county: "Summit",
        phone: "216-645-1254",
        email: "Jeffrey.A.Crawford@Gmail.com",
        votingMember: 1,
        checkInTime: ""
	 })
	 	queryInterface.sequelize.models.badges.create({
        barCode: 1,
        userID: 0
	 }	)




	 


}



module.exports = popTables;