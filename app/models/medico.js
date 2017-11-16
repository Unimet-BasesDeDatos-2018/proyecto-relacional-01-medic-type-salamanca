 var path = require('path');

 var Sequelize = require('sequelize');
var connection = new Sequelize('easymedic', 'root', 'pink88pink', {

  dialect : 'mysql',

  define : {

     freezeTableName : true,
     timestamps : false
  }
});


module.exports = function(sequelize, DataTypes)
{

	var persona = connection.import(path.join(process.cwd(), 'app', 'models', 'persona'));

return sequelize.define('medico',{

	idPersona : {

		type : DataTypes.INTEGER,

		allowNull : false,

		references : {

			model : persona,
			key : 'idPersona'
		}
	},

	idMedico : {

		type : DataTypes.INTEGER,
		primaryKey : true,
		autoIncrement : true,
		allowNull : false
	},

	CarnetMedico : {

		type : DataTypes.INTEGER,
		unique : true,
		allowNull : false
	}
})

}

