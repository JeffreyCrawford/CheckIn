

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('attendees', {
		Contact: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Contact'
		},
		RowChecksum: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Row Checksum'
		},
		ModifiedOn: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Modified On'
		},
		fullName: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: ' Full Name'
		},
		firstName: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'First Name'
		},
		middleName: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Middle Name'
		},
		lastName: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Last Name'
		},
		gaDelegate: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'GA Delegate'
		},
		mailingPrefix: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Mailing Prefix'
		},
		account: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Account'
		},
		county: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'County'
		},
		salutation: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Salutation'
		},
		jobTitle: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Job Title'
		},
		email: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Email'
		},
		nopecGeneralAssemblyMember: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Nopec General Assembly Member'
		},
		address1Street1: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Address 1: Street 1'
		},
		address1Street2: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Address 1: Street 2'
		},
		address1City: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Address 1: City'
		},
		address1StateProvince: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Address 1: State/Province'
		},
		address1ZipPostalCode: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Address 1: ZIP/Postal Code'
		},
		owner: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Owner'
		},
		gaVotingRights: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'GA Voting Rights'
		},
		primaryContact: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'Primary Contact'
		}
	}, {
		tableName: 'attendees'
	});
};
