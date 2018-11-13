const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')
const errorHandler = require('errorhandler')
const kue = require('kue')
const QueueServices = require('./services/QueueServices')

const _runApp = (options) => {
    const {port, debug, queue} = options
    QueueServices.setQueue(queue)
    const app = express()

    /**
     * Express configuration.
     */
    app.set('trust proxy', 1)
    app.disable('x-powered-by')
    app.use(compression())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(cors())
    app.use(errorHandler())

    if (debug) {
        app.use(logger('dev'))
    }

    app.use(require('./routes').router)

    app.listen(port, () => {
        console.log(`App is listening on port: ${port}`)
    })
}

const defaultOptions = {
    port: 1235,
    debug: false,
    queue: kue.createQueue()
}

module.exports = async (opts = {}) => {
    const args = Object.assign({}, defaultOptions, opts)

    _runApp(args)
}
