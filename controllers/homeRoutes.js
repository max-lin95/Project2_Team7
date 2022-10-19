const router = require('express').Router();
const { Program, User, Workout } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all workout programs and JOIN with user data
    const programData = await Program.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const workoutData = await Workout.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const programs = programData.map((program) => program.get({ plain: true }));
    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    res.render('homepage', { 
      programs, workouts,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/program/:id', withAuth, async (req, res) => {
    try {
        const programData = await Program.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const workoutData = await Workout.findAll({
          include: [
              {
                  model: User,
                  attributes: ['name'],
              },
          ],
      });

        const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          include: [{ model: Program }],
      });
  
        const workouts = workoutData.map((workout) => workout.get({ plain: true }));

        const user = userData.get({ plain: true });
        const exercise = programData.get({plain: true});
        // const workout = workoutData.get({plain: true});

        res.render('program', {
            workouts, ...exercise, ...user,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Program }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;