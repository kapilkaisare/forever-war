import { Application } from 'pixi.js'
import { CONSTANTS } from './utils'
import { Characters } from './characters'
import { SPACESHIPS } from './assets'

const PC_STARTING_POSITION = {
    X: 475,
    Y: 256
}

class ForeverWar {
    constructor(width, height, root) {
        width = width ? width : CONSTANTS.DEFAULT_WIDTH
        height = height ? height : CONSTANTS.DEFAULT_HEIGHT
        this.root = root ? root : document.body
        this.application = new Application({
            width,
            height
        })
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

    }

    run() {
        this.application.ticker.add(delta => this.loop.bind(this, delta))
    }

    start() {
        this.addResources().load(() => {
            this.addAssets()
            this.render()
            this.run()
        })
    }
}

export { ForeverWar }
