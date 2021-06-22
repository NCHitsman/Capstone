import { roads, settlements, worlds } from "../customTypings"

const TwoDArrayMaker = (world: worlds | null, settlements: settlements, roads: roads) => {
    if (world && settlements && roads) {
        let twoDArray: (object)[][] = []
        let add = world.world_size/2

        for (let i = 0; i < world.world_size; i++) {
            twoDArray.push([])
        }

        for (let i in twoDArray) {
            let x = +i - 25
            for (let y = -(world.world_size/2); y < world.world_size / 2; y++) {
                twoDArray[i].push({
                    idnt: '[OPEN]',
                    x: x,
                    y: y,
                })
            }
        }

        Object.values(settlements).forEach(settlement => {
            let settlementObj = {
                idnt: '[STLM]',
                x: settlement.x_cordinate,
                y: settlement.y_cordinate,
                id: settlement.id,
            }
            twoDArray[settlement.y_cordinate + add][settlement.x_cordinate + add] = settlementObj
        });

        Object.values(roads).forEach(road => {
            let roadObj = {
                idnt: '[ROAD]',
                x: road.x_cordinate,
                y: road.y_cordinate,
                id: road.id,
            }
            twoDArray[road.y_cordinate + add][road.x_cordinate + add] = roadObj
        });

        console.table(twoDArray)
    }
}


export default TwoDArrayMaker
