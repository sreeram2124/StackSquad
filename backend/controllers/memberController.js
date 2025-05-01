const Member = require('../models/Member');

exports.addMember = async (req, res) => {
  try {
    const {
      name, rollNumber, year, degree, project,
      hobbies, certificates, internship, aim, email
    } = req.body;

    const image = req.files['image']?.[0]?.filename;
    const file = req.files['file']?.[0]?.filename;

    const newMember = new Member({
      name, rollNumber, year, degree, project,
      hobbies, certificates, internship, aim, email,
      image, file
    });

    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    console.error('Error adding member:', error);
    res.status(500).json({ error: 'Error adding member' });
  }
};

exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ error: 'Error fetching members' });
  }
};

exports.getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });
    res.json(member);
  } catch (error) {
    console.error('Error fetching member details:', error);
    res.status(500).json({ error: 'Error fetching member details' });
  }
};
