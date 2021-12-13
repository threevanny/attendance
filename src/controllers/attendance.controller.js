const Attendance = require('../models/attendance')

const attendanceCtrl = {}

// Get all attendance

attendanceCtrl.getAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.find({}).sort({ date: -1 }).limit(15)
        res.json(attendance)
    } catch (err) {
        res.json({ message: err })
    }
}

//Get attendance by id
attendanceCtrl.getAttendanceById = async (req, res) => {
    try {
        const attendance = await Attendance.findById(req.params.id)
        res.json(attendance)
    } catch (err) {
        res.json({ message: err })
    }
}

// Add attendance
attendanceCtrl.addAttendance = async (req, res) => {
    const attendance = new Attendance(req.body)
    try {
        const savedAttendance = await attendance.save()
        res.json(savedAttendance)
    } catch (err) {
        res.json({ message: err })
    }
}

// Update attendance
attendanceCtrl.updateAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(attendance)
    } catch (err) {
        res.json({ message: err })
    }
} 

//Delete attendance
attendanceCtrl.deleteAttendance = async (req, res) => {
    try {
        const removedAttendance = await Attendance.remove({ _id: req.params.id })
        res.json(removedAttendance)
    } catch (err) {
        res.json({ message: err })
    }
}

module.exports = attendanceCtrl