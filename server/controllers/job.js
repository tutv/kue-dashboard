const JobActions = require('../actions/JobActions')
const {sendError, sendSuccess} = require('../helpers/response')

exports.countInactive = (req, res) => {
    JobActions.countInactiveJobs()
        .then(sendSuccess(req, res))
        .catch(sendError(req, res))
}
