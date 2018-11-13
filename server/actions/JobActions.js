const QueueServices = require('../services/QueueServices')

exports.countInactiveJobs = async () => {
    const queue = QueueServices.getQueue()

    return new Promise((resolve, reject) => {
        queue.inactiveCount((err, total) => {
            if (err) return reject(err)

            resolve(total)
        })
    })
}
