const router = require('express').Router();
const sessionRouter = require('./session.ts');
const usersRouter = require('./users.ts');
const worldRouter = require('./worlds')
const settlementsRouter = require('./settlements')
const roadRouter = require('./roads')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/worlds', worldRouter)

router.use('/settlements', settlementsRouter)

router.use('/roads', roadRouter)

module.exports = router;
