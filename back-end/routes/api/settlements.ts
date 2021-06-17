import { Request, Response } from 'express';
const express = require('express')
const asyncHandler = require('express-async-handler');

const { Settlement } = require('../../db/models')

const router = express.Router();

router.get('/getSettlements/:worldId', asyncHandler(async (req: Request, res: Response) => {
    const { worldId } = req.params
    const settlements = await Settlement.findAll({
        where: {
            world_id: worldId
        }
    })
    res.json(settlements)
}))

router.post('/createNewSettlement', asyncHandler(async (req: Request, res: Response) => {
    const { id } = await Settlement.create(req.body)
    res.json(id)
}))


module.exports = router
