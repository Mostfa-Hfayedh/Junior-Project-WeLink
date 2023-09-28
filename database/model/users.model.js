module.exports = (connection,DataTypes)=>{
    const Users = connection.define('users',{
        name:DataTypes.STRING,
        email:DataTypes.STRING,
        password:DataTypes.STRING
    })
    return Users
}