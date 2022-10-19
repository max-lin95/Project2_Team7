const router = require('express').Router();
const { Program } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newProgram = await Program.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProgram);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const programData = await Program.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!programData) {
      res.status(404).json({ message: 'No Workout Program found with this id!' });
      return;
    }

    res.status(200).json(programData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;