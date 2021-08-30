const siteController = require('../app/controllers/SiteController')
var express = require('express')
const route = require('.')
var router = express.Router()

router.use('/search',siteController.search)

router.use('/',siteController.index)

module.exports = router