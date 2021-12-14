const Program = require('../models/program')

const programCtrl = {}

// Get all programs
programCtrl.getPrograms = async (req, res) => {
  const programs = await Program.find()
  res.json(programs)
}

// Get a single program
programCtrl.getProgram = async (req, res) => {
  const program = await Program.findById(req.params.id)
  res.json(program)
}

// Create a new program
programCtrl.createProgram = async (req, res) => {
  const program = new Program(req.body)
  await program.save()
  res.json({
    'status': 'Program Saved'
  })
}

// Update a program
programCtrl.updateProgram = async (req, res) => {
  const { id } = req.params
  const program = {
    // name: req.body.name,
    // description: req.body.description,
    // duration: req.body.duration,
    // price: req.body.price,
    // image: req.body.image
  }
  await Program.findByIdAndUpdate(id, {$set: program}, {new: true})
  res.json({
    'status': 'Program Updated'
  })
}

// Delete a program
programCtrl.deleteProgram = async (req, res) => {
  await Program.findByIdAndRemove(req.params.id)
  res.json({
    'status': 'Program Deleted'
  })
}



module.exports = programCtrl