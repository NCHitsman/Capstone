import { Request, Response } from 'express';
const express = require('express')
const asyncHandler = require('express-async-handler');

const { Settlement, Road } = require('../../db/models')

const router = express.Router();

router.get('/getRoads/:worldId', asyncHandler(async (req: Request, res: Response) => {
    const { worldId } = req.params
    const roads = await Road.findAll({
        where: {
            world_id: worldId
        }
    })
    res.json(roads)
}))

router.post('/createNewRoad', asyncHandler(async (req: Request, res: Response) => {
    const { id } = await Road.create(req.body)
    res.json(id)
}))


module.exports = router
