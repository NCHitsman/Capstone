const router = require('express').Router();
const sessionRouter = require('./session.ts');
const usersRouter = require('./users.ts');
const worldRouter = require('./worlds')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/worlds', worldRouter)

module.exports = router;
