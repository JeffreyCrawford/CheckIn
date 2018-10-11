CREATE DATABASE pouch;

CREATE TABLE attendees(
	userID INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    title VARCHAR(50),
    community VARCHAR(50),
    county VARCHAR(50),
    phone VARCHAR(50),
    email VARCHAR(50),
    votingMember VARCHAR(50),
    checkInTime VARCHAR(50),
);

CREATE TABLE badges(
    barCode INTEGER NOT NULL,
    userID INTEGER
);



SELECT * FROM attendees INNER JOIN badges ON attendees.userID=badges.userID;

SELECT * FROM badges INNER JOIN budgets on badges.userID=attendees.userID;