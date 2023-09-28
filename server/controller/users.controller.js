const db = require('../../database/index')

module.exports.getAll = async (req,res) =>{
    try {
        const get = await db.Users.findAll()
        res.json(get)
    } catch (error) {
        throw error
    }
}
module.exports.getOne = async (req,res) =>{
    try {
        const get = await db.Users.findOne({where:{name : req.params.name}})
        res.json(get)
    } catch (error) {
        throw error
    }
}
module.exports.add = async (req,res) =>{
    try {
        const add = await db.Users.create(req.body)
        res.json(add)
    } catch (error) {
        throw error
    }
}
module.exports.remove = async (req,res) =>{
    try {
        const remove = await db.Users.destroy({where:{id : req.params.id}})
        res.json(remove)
    } catch (error) {
        throw error
    }
}
module.exports.update = async (req,res) =>{
    try {
        const update = await db.Users.update(req.body,{where:{id : req.params.id}})
        res.json(update)
    } catch (error) {
        throw error
    }
}
