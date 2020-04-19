import { Bullet } from './bullet'
import { AMMUNITION } from '../assets'
import { CONSTANTS } from '../utils'

class Gun {

    constructor(ship) {
        this.ship = ship
        this.coolDownMs = 200
        this.hot = false
    }

    fire() {
        if (this.hot) {
            return
        }
        const bullet = new Bullet(this.ship.joinedGame.application.loader.resources[AMMUNITION.Bullet], {
            rotation: (this.ship.rotation === 0) ? -(CONSTANTS.MATH.PI / 2) : (CONSTANTS.MATH.PI / 2)
        })
        bullet.joinedGame = this.ship.joinedGame
        const globalPosition = this.ship.sprite.parent.toGlobal(this.ship.sprite.position)
        const yCoord = (this.ship.rotation === 0) ? globalPosition.y - (this.ship.sprite.height) : globalPosition.y + (this.ship.sprite.height)
        bullet.sprite.position.set(globalPosition.x, yCoord)
        this.ship.joinedGame.application.stage.addChild(bullet.sprite)
        this.ship.joinedGame.gameObjects.get('Bullets').push(bullet)
        this.hot = true
        setTimeout((() => {
            this.hot = false
        }).bind(this), this.coolDownMs)
    }
}

export { Gun }