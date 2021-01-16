const express = require('express')
const router = express.Router()

const userControler = require('../../controllers/userControler')

router.post('/', userControler.register)

module.exports = router