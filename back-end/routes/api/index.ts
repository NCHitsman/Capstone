const router = require('express').Router();
const sessionRouter = require('./session.ts');
const usersRouter = require('./users.ts');
const worldRouter = require('./worlds')
const settlementsRouter = require('./settlements')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/worlds', worldRouter)

router.use('/settlements', settlementsRouter)

module.exports = router;
