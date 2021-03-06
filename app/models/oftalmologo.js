 var path = require('path');

 var Sequelize = require('sequelize');
var connection = new Sequelize('easymedic', 'root', 'pink88pink', {

  dialect : 'mysql',

  define : {

     freezeTableName : true,
     timestamps : false
  }
});

module.exports= function(sequelize, DataTypes){

	var medico = connection.import(path.join(process.cwd(), 'app', 'models', 'medico'));

return sequelize.define('oftalmologo',{

	idMedico : {

		type : DataTypes.INTEGER,
		allowNull : false,
		references : {
			model : medico,
			key : 'idMedico'
		}
	},

	idOftalmologo : {

		type : DataTypes.INTEGER,
		primaryKey : true,
		autoIncrement : true,
		allowNull : false
	},


	Retinologo : {

		type: DataTypes.STRING,
		
	}
})


}