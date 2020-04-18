import { MenuMode, GameMode } from './modes'

class ForeverWar {
    constructor(width, height, root) {
        this.gameMode = new GameMode(width, height, root)
        this.menuMode = new MenuMode()
    }

    start() {
        this.gameMode.activate()
    }
}

export { ForeverWar }
