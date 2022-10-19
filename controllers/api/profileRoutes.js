const router = require('express').Router();
const { Profile } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/profile', withAuth, async (req, res) => {
  try {
    const newProfile = await Profile.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProfile);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/profile/:id', withAuth, async (req, res) => {
  try {
    const ProfileData = await Profile.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!ProfileData) {
      res.status(404).json({ message: 'No Profile found with this id!' });
      return;
    }

    res.status(200).json(ProfileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
