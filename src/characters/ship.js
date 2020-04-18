import { Sprite } from 'pixi.js'
import { CONSTANTS } from '../utils/constants'

class Ship {

    constructor(initialConfig) {
        this.assetUrl = null
        this.setConfig(initialConfig)
    }

    setConfig(initialConfig) {
        const defaults = CONSTANTS.DEFAULT_SHIP_ATTR
        this.config = { ...initialConfig }
        this.config.anchorX = this.config.anchorX ? this.config.anchorX : defaults.ANCHORX
        this.config.anchorY = this.config.anchorY ? this.config.anchorY : defaults.ANCHORY
        this.config.scaleX = this.config.scaleX ? this.config.scaleX : defaults.SCALEX
        this.config.scaleY = this.config.scaleY ? this.config.scaleY : defaults.SCALEY
        this.config.rotation = this.config.rotation ? this.config.rotation : 0
        this.config.velocityX = this.config.velocityX ? this.config.valocityX : 0
        this.config.velocityY = this.config.velocityY ? this.config.velocityY : 0
    }

    joinGame(game, startingPosition) {
        this.joinedGame = game
        this.joinedGame.application.loader.add(this.assetUrl).load(() => {
            this.joinedGame.application.stage.addChild(this.createSprite(startingPosition))
        })
    }

    createSprite(startingPosition) {
        this.sprite = new Sprite(
            this.joinedGame.application.loader.resources[this.assetUrl].texture
        )
        this.sprite.anchor.set(this.config.anchorX, this.config.anchorY)
        this.sprite.scale.set(this.config.scaleX, this.config.scaleY)
        this.sprite.rotation = this.config.rotation
        this.sprite.velocityX = this.config.velocityX
        this.sprite.velocityY = this.config.velocityY
        this.sprite.position.set(startingPosition.X, startingPosition.Y)
        return this.sprite
    }

}

export { Ship }

