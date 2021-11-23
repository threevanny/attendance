const indexCtrl = {}

indexCtrl.index = (_, res) => res.status(200).send('Attendance')

module.exports = indexCtrl