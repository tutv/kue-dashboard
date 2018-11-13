const kue = require('kue')

let _queue = null

exports.setQueue = queue => {
    _queue = queue || kue.createQueue()
    _queue = queue
}

exports.getQueue = () => _queue