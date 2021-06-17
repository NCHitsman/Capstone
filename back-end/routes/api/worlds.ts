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

router.get('/getWorld/:worldId', asyncHandler(async (req: Request, res: Response) => {
    const { worldId } = req.params
    const world = await World.findByPk(worldId)
    res.json(world)
}))

router.post('/createNewWorld', asyncHandler(async (req: Request, res: Response) => {
    const { id } = await World.create(req.body)
    res.json(id)
}))


module.exports = router
