const config = require("./config.js");
const { Sequelize, DataTypes } = require("sequelize");
const connection = new Sequelize(
    config.database,
    config.user,
    config.password,
    {
      host: config.host,
      dialect: "mysql",
    }
  );
  connection.authenticate()
.then(()=>{
  console.log("database connected successfuly");
})
.catch((error)=>{
  console.log(error);
})

const Users = require('./model/users.model.js')(connection,DataTypes)
const Links = require('./model/links.model.js')(connection,DataTypes)

Users.hasMany(Links)
Links.belongsTo(Users)



const db={}
db.Users = Users
db.Links = Links

connection.sync({ alter: true })
  .then(() => {
    console.log("tables created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create tables : ", error);
  });

  module.exports = db;