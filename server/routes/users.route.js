const usersRoute = require('express').Router()
const {getAll,getOne,remove,update,add} = require('../controller/users.controller')

usersRoute.get('/getAll',getAll)
usersRoute.get('/:name',getOne)
usersRoute.put('/:id',update)
usersRoute.delete('/:id',remove)
usersRoute.post('/add',add)


module.exports = usersRoute