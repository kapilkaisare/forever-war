import { CONSTANTS } from '../../utils'
import { Keyboard } from './keyboard'

class GameKeyboard extends Keyboard {
    constructor(mode) {
        super()
        this.mode = mode
        this.addKeys()
    }

    addKeys() {
        this.addKey(CONSTANTS.KEYS.DOWN, this.mode.startDownHandler, this.mode.stopDownHandler)
        this.addKey(CONSTANTS.KEYS.UP, this.mode.startUpHandler, this.mode.stopUpHandler)
        this.addKey(CONSTANTS.KEYS.RIGHT, this.mode.startRightHandler, this.mode.stopRightHandler)
        this.addKey(CONSTANTS.KEYS.LEFT, this.mode.startLeftHandler, this.mode.stopLeftHandler)
        this.addKey(CONSTANTS.KEYS.SPACE, this.mode.startSpaceHandler, this.mode.stopSpaceHandler)
    }
}

export { GameKeyboard }
