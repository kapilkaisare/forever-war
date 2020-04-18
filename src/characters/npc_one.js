import { Ship } from './ship'
import { SPACESHIPS } from '../assets'

class NPC_ONE extends Ship {
    constructor() {
        super()
        this.assetUrl = SPACESHIPS.NPC1
    }
}

export { NPC_ONE }