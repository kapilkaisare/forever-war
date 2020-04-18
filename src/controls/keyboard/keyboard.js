import { Key } from './key'

class Keyboard {

    constructor() {
        this.keys = new Map();
    }

    addKey(keyCode, pressHandler, releaseHandler) {
        const key = new Key(keyCode)
        key.press = pressHandler
        key.release = releaseHandler
        key.connect()
        this.keys.set(keyCode, key)
    }

    removeKey(keyCode) {
        const key = this.keys.get(keyCode)
        if (key) {
            key.disconnect()
            this.keys.set(keyCode, null)
        }
    }

    mute() {
        for (let [keyCode, key] of this.keys) {
            key.disconnect()
        }
    }

    unMute() {
        for (let [keyCode, key] of this.keys) {
            key.connect()
        }
    }
}

export { Keyboard }
