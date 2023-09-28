const linksRoute = require('express').Router()
const {getAll,getOne,remove,update,add} = require('../controller/links.controller')

linksRoute.get('/getAll',getAll)
linksRoute.get('/:id',getOne)
linksRoute.put('/:id',update)
linksRoute.delete('/:id',remove)
linksRoute.post('/add',add)


module.exports = linksRoute