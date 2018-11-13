const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => res.send(`Hi. I'm Kue Dashboard.`))
router.get('/ping', (req, res) => res.send('ping'))

const jobCtrl = require('./controllers/job')
router.get('/jobs/inactive/count', jobCtrl.countInactive)

exports.router = router