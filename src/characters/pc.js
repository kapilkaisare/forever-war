import { Ship } from './ship'

class PC extends Ship {
    constructor(asset, initialConfig) {
        super(asset, initialConfig)
    }

    joinGame(game, startingPosition) {
        this.joinedGame = game
        this.sprite.position.set(startingPosition.X, startingPosition.Y)
        this.joinedGame.application.stage.addChild(this.sprite)
    }
}

export { PC }

