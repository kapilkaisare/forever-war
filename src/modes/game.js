import { Application } from 'pixi.js'
import { Mode } from './mode'
import { CONSTANTS } from '../utils'
import { Characters } from '../characters'
import { SPACESHIPS } from '../assets'
import { GameKeyboard } from '../controls'

const PC_STARTING_POSITION = {
    X: 475,
    Y: 256
}


class GameMode extends Mode {

    constructor(width, height, root) {
        super()
        this.width = width ? width : CONSTANTS.DEFAULT_WIDTH
        this.height = height ? height : CONSTANTS.DEFAULT_HEIGHT
        this.root = root ? root : document.body
        this.started = false
        this.gameObjects = new Map()
    }

    initializeHandlers() {
        const pc = this.gameObjects.get('PC')
        this.startRightHandler = pc.startRight.bind(pc)
        this.stopRightHandler = pc.stopRight.bind(pc)
        this.startLeftHandler = pc.startLeft.bind(pc)
        this.stopLeftHandler = pc.stopLeft.bind(pc)
        this.startUpHandler = pc.startUp.bind(pc)
        this.stopUpHandler = pc.stopUp.bind(pc)
        this.startDownHandler = pc.startDown.bind(pc)
        this.stopDownHandler = pc.stopDown.bind(pc)
    }

    initializeKeyboard() {
        this.keyboard = new GameKeyboard(this)
    }

    onActivate() {
        if (!this.started) {
            this.start();
        }
    }

    addResources() {
        return this.application.loader.add([
            SPACESHIPS.PC,
            SPACESHIPS.NPC1
        ])
    }

    addPC() {
        const PC= new Characters.PC(this.application.loader.resources[SPACESHIPS.PC])
        PC.joinGame(this, PC_STARTING_POSITION)
        this.gameObjects.set('PC', PC)
    }

    addNPCs() {
        const fleet = new Characters.Fleet([
            this.application.loader.resources[SPACESHIPS.NPC1]
        ], 1, 5)
        fleet.joinGame(this)
    }

    addAssets() {
        this.addPC()
        this.addNPCs()
    }

    render() {
        this.root.appendChild(this.application.view)
    }

    loop(delta) {
        this.gameObjects.get('PC').move()
    }

    run() {
        this.application.ticker.add(delta => {
            this.loop(delta)
        })
    }

    start() {
        this.application = new Application({
            width: this.width,
            height: this.height
        })

        this.addResources().load(() => {
            this.addAssets()
            this.initializeHandlers()
            this.initializeKeyboard()
            this.render()
            this.run()
            this.started = true
        })
    }

}

export { GameMode }
