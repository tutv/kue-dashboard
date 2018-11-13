const kue = require('kue')
const server = require('../server/server')

const queue = kue.createQueue({
    prefix: 'tu',
    redis: {
        port: 6379,
        host: 'localhost',
        db: 0
    }
})

const job = queue.createJob('hello', 'world')
job.save()

server({debug: true, queue})
