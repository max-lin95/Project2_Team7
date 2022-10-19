const router = require('express').Router();
const { Program, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/program/:id', withAuth, async (req, res) => {
    try {
        const projectData = await Program.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const exercise = programData.map((program) => program.get({plain: true}));
        res.render('program', {
            workout,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});