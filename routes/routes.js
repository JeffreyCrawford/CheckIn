var db = require("../config/db")


module.exports = (app, db, nodemailer) => {


    /* Get attendees */
    app.get("/api/attendees", function(req, res) {
        db.attendees.findAll({
            }).then(function (data) {
                res.send(data)
            });
    });

    app.get("/api/attendees", function(req, res) {
        db.attendees.findAll({
            }).then(function (data) {
                res.send(data)
            });
    });



    /* Create attendee */
    app.post("/api/attendees", function(req, res) {

        db.attendees.create({
            userID: req.body.userID,
            name: req.body.name

        });

    });



    /* Get profiles */
    app.get("/api/profiles", function(req, res) {
        db.profiles.findAll({
            }).then(function (data) {
            res.send(data)
            });
    });

    /* Create profile */
    app.post("/api/profiles", function(req, res) {
        db.profiles.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            organization: req.body.organization,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
        });
    });
    

}