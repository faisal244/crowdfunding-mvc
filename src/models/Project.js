const { Model } = require("sequelize");

class Project extends Model {}

const schema = {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	fundingAmount: {
		type: DataTypes.DECIMAL(10, 2),
		allowNull: false,
		validate {
			isDecimal: true,
		},
	},
		userId: {
		type: DataTypes.INTEGER,
				references: {
				model: User,
					key: "id",
		},
	},

};

const options = {
	sequelize: connection,
	timestamps: true,
	underscored: false,
	freezeTableName: true,
	modelName: "project",
	hooks: {
		beforeCreate: hashPassword,
	},
};


Project.init(schema, options);

module.exports = { Project };
