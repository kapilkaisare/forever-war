import { Sprite } from 'pixi.js'
import { CONSTANTS } from '../utils/constants'

class Bullet {

    constructor(asset, initialConfig) {
        this.asset = asset
        this.joinedGame = null;
        this.setConfig(initialConfig)
        this.createSprite()
    }

    get position() {
        return this.sprite.position
    }

    set position(coordinates) {
        this.sprite.position.set(coordinates.X, coordinates.Y)
    }

    get rotation() {
        return this.sprite.rotation
    }

    set rotation(valueRad) {
        this.sprite.rotation = valueRad
    }

    setConfig(initialConfig) {
        const defaults = CONSTANTS.DEFAULT_AMMUNITION_ATTR
        this.config = { ...initialConfig }
        this.config.anchorX = this.config.anchorX ? this.config.anchorX : defaults.ANCHORX
        this.config.anchorY = this.config.anchorY ? this.config.anchorY : defaults.ANCHORY
        this.config.scaleX = this.config.scaleX ? this.config.scaleX : defaults.SCALEX
        this.config.scaleY = this.config.scaleY ? this.config.scaleY : defaults.SCALEY
        this.config.rotation = this.config.rotation ? this.config.rotation : 0
        this.config.velocityX = this.config.velocityX ? this.config.velocityX : 0
        this.config.velocityY = this.config.velocityY ? this.config.velocityY : defaults.DEFAULT_VELOCITY
    }

    createSprite() {
        this.sprite = new Sprite(this.asset.texture)
        this.sprite.anchor.set(this.config.anchorX, this.config.anchorY)
        this.sprite.scale.set(this.config.scaleX, this.config.scaleY)
        this.sprite.rotation = this.config.rotation
        this.sprite.velocityX = this.config.velocityX
        this.sprite.velocityY = this.config.velocityY
    }

    move() {
        if (
            (this.sprite.position.y === this.joinedGame.application.height) ||
            (this.sprite.position.y === 0)
        ) {
            this.joinedGame.removeBullet(this)
            return;
        }
        if (this.rotation > 0) {
            this.sprite.position.y = this.sprite.position.y + this.sprite.velocityY
        } else {
            this.sprite.position.y = this.sprite.position.y - this.sprite.velocityY
        }
    }

    loop(delta) {
        this.move()
    }

}

export { Bullet }