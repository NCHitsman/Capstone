import { Request, Response } from 'express';
const express = require('express')
const asyncHandler = require('express-async-handler');

const { World } = require('../../db/models')

const router = express.Router();

router.get('/userWorlds/:userId', asyncHandler(async (req: Request, res: Response) => {
    const { userId } = req.params
    const worlds = await World.findAll({
        where: {
            owner_id: userId
        }
    })
    res.json(worlds)
}))


module.exports = router
