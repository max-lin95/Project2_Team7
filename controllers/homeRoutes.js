const router = require('express').Router();
const { Workout, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const workoutData = await Workout.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    res.render('homepage', { 
      workouts, 
      logged_in: req.session.logged_in 
    });
    // res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
  // res.render('homepage');
});

// router.get('/WorkoutTracker/:id', withAuth, async (req, res) => {

//   try {
//     const workoutData = await Workout.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const workout = workoutData.get({ plain: true });

//     res.render('workout', {
//       ...workout,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/profile', withAuth, async (req, res) => {
    res.render('profile');
  
  });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    return res.redirect('/profile');
    
  }

  res.render('login');
});

module.exports = router;