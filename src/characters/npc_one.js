import { Ship } from './ship'
import { SPACESHIPS } from '../assets'

class NPC_ONE extends Ship {
    constructor(asset, shipId, fleet, initialConfig) {
        super(asset, initialConfig)
        this.shipId = shipId
        this.fleet = fleet
    }
}

export { NPC_ONE }