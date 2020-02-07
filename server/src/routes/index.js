const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => res.json({message: 'THE WORLD'}))

module.exports = router