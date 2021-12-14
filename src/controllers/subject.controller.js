const Subject = require('../models/subject');
const subjectCtrl = {}

// Get all subjects
subjectCtrl.getSubjects = async (req, res) => {
  const subjects = await Subject.find();
  res.json(subjects);
}

// Get a subject
subjectCtrl.getSubject = async (req, res) => {
  const subject = await Subject.findById(req.params.id);
  res.json(subject);
}

// Create a subject
subjectCtrl.createSubject = async (req, res) => {
  const subject = new Subject(req.body);
  await subject.save();
  res.json({
    'status': 'Subject saved'
  });
}

// Update a subject
subjectCtrl.updateSubject = async (req, res) => {
  const { id } = req.params;
  const subject = {
    // name: req.body.name,
    // description: req.body.description,
    // image: req.body.image
  }
  await Subject.findByIdAndUpdate(id, {$set: subject}, {new: true});
  res.json({
    'status': 'Subject updated'
  });
}

//delete a subject
subjectCtrl.deleteSubject = async (req, res) => {
  await Subject.findByIdAndRemove(req.params.id);
  res.json({
    'status': 'Subject deleted'
  });
}

module.exports = subjectCtrl;