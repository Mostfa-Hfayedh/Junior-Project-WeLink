module.exports = (connection,DataTypes)=>{
    const Links = connection.define('links',{
        url:DataTypes.STRING,
    })
    return Links
}