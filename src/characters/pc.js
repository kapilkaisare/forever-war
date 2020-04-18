import { CONSTANTS } from '../utils'
import { Ship } from './ship'

class PC extends Ship {
    constructor(asset, initialConfig) {
        super(asset, initialConfig)
        this.movingRight = false
        this.movingLeft = false
        this.movingUp = false
        this.movingDown = false
    }

    joinGame(game, startingPosition) {
        this.joinedGame = game
        this.sprite.position.set(startingPosition.X, startingPosition.Y)
        this.joinedGame.application.stage.addChild(this.sprite)
    }

    startRight() {
        this.sprite.velocityX = CONSTANTS.PC_SPEED
        this.movingRight = true
    }

    stopRight() {
        if (!this.movingLeft) {
            this.sprite.velocityX = 0
        }
        this.movingRight = false
    }

    startLeft() {
        this.sprite.velocityX = CONSTANTS.PC_SPEED * -1
        this.movingLeft = true
    }

    stopLeft() {
        if (!this.movingRight) {
            this.sprite.velocityX = 0
        }
        this.movingLeft = false
    }

    startUp() {
        this.sprite.velocityY = CONSTANTS.PC_SPEED * -1
        this.movingUp = true
    }

    stopUp() {
        if (!this.movingDown) {
            this.sprite.velocityY = 0
        }
        this.movingUp = false
    }

    startDown() {
        this.sprite.velocityY = CONSTANTS.PC_SPEED
        this.movingDown = true
    }

    stopDown() {
        if (!this.movingUp) {
            this.sprite.velocityY = 0
        }
        this.movingDown = false
    }

    moveX() {
        const newPosition = this.sprite.position.x + this.sprite.velocityX
        if (
            newPosition < this.joinedGame.width - 32 &&
            newPosition > 32
        ) {
            this.sprite.position.x = newPosition
        }
    }

    moveY() {
        const newPosition = this.sprite.position.y + this.sprite.velocityY
        if (
            newPosition < this.joinedGame.height - 32 &&
            newPosition > 32
        ) {
            this.sprite.position.y = newPosition
        }
    }

    move() {
        this.moveX()
        this.moveY()
    }
}

export { PC }

