import { Ship } from './ship'
import { SPACESHIPS } from '../assets'

class NPC_ONE extends Ship {
    constructor(asset, shipId, fleet, initialConfig) {
        super(asset, initialConfig)
        this.shipId = shipId
        this.fleet = fleet
    }

    fireAtRandom() {
        const randomNumber = Math.random() * 500
        if (randomNumber < 1) {
            this.gun.fire()
        }
    }

    loop(delta) {
        super.loop(delta)
        this.fireAtRandom()
    }
}

export { NPC_ONE }