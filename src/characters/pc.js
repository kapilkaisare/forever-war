import { Ship } from './ship'
import { SPACESHIPS } from '../assets'

class PC extends Ship {
    constructor() {
        super()
        this.assetUrl = SPACESHIPS.PC
    }
}

export { PC }

