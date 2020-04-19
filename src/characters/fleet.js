import { Container } from 'pixi.js'
import { NPC_ONE } from './npc_one'
import { CONSTANTS } from '../utils/constants'

class Fleet {

    constructor(assets, fleetId, startingCount) {
        this.assets = assets
        this.fleetId = fleetId
        this.phalanx = new Container()
        this.ships = []
        this.build(startingCount)
        this.velocityX = CONSTANTS.NPC_SPEED
    }

    build(startingCount) {
        while(startingCount != 0) {
            this.ships.push(this.makeShip(startingCount))
            startingCount = startingCount - 1
        }
        this.ships.map(this.add.bind(this))
    }

    makeShip(shipId) {
        const ship = new NPC_ONE(this.assets[0], shipId, this, null)
        ship.rotation = CONSTANTS.MATH.PI
        return ship
    }

    determineStartingPosition(ship) {
        const X = (CONSTANTS.DEFAULT_FLEET_ATTR.MARGIN * ship.shipId) - 16
        ship.position = { X, Y: 128 }
    }

    add(ship) {
        this.determineStartingPosition(ship)
        this.phalanx.addChild(ship.sprite)
    }

    joinGame(game) {
        this.joinedGame = game
        this.joinedGame.application.stage.addChild(this.phalanx)
        this.ships.forEach((ship) => {
            ship.joinedGame = game
        })
    }

    move() {
        let newPosition = this.phalanx.position.x + this.velocityX
        if (
            (newPosition + this.phalanx.width) < (this.joinedGame.width - CONSTANTS.DEFAULT_FLEET_ATTR.MARGIN) &&
            newPosition > 0
        ) {
            this.phalanx.position.x = newPosition
        } else {
            this.velocityX = this.velocityX * -1
            newPosition = this.phalanx.position.x + this.velocityX
            this.phalanx.position.x = newPosition
        }
    }

    loop() {
        this.move()
        this.ships.forEach((ship) => {
            ship.loop()
        })
    }
}

export { Fleet }
