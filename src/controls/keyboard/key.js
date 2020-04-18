import { CONSTANTS } from '../../utils'

class Key {
    constructor(keyCode) {
        this.value = keyCode
        this.isDown = false
        this.isUp = true
        this.press = null
        this.release = null
        this.upListener = null
        this.downListener = null
    }

    onKeyDown(event) {
        if (event.key === this.value) {
            if (this.isUp && this.press) {
                this.press()
            }
            this.isDown = true
            this.isUp = false
            event.preventDefault()
        }
    }

    onKeyUp(event) {
        if (event.key === this.value) {
            if (this.isDown && this.release) {
                this.release()
            }
            this.isDown = false
            this.isUp = true
            event.preventDefault()
        }
    }

    connect() {
        this.downListener = this.onKeyDown.bind(this)
        this.upListener = this.onKeyUp.bind(this)
        window.addEventListener(CONSTANTS.EVENTS.KEYDOWN, this.downListener)
        window.addEventListener(CONSTANTS.EVENTS.KEYUP, this.upListener)
    }

    disconnect() {
        window.removeEventListener(CONSTANTS.EVENTS.KEYDOWN, this.downListener)
        window.removeEventListener(CONSTANTS.EVENTS.KEYUP, this.upListener)
    }
}

export { Key }
