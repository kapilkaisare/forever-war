const DEFAULT_WIDTH = 1024
const DEFAULT_HEIGHT = 768

const PI = 3.14

const ANCHORX = 0.5
const ANCHORY = 0.5
const SCALEX = 0.5
const SCALEY = 0.5
const AMMO_SCALEX = 1
const AMMO_SCALEY = 1
const MARGIN = 64

const EVENTS = {
    KEYUP: 'keyup',
    KEYDOWN: 'keydown'
}

const KEYS = {
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    RIGHT: 'ArrowRight',
    LEFT: 'ArrowLeft',
    SPACE: ' '
}

const PC_SPEED = 5
const NPC_SPEED = 1

const CONSTANTS = {
    DEFAULT_WIDTH,
    DEFAULT_HEIGHT,
    EVENTS,
    KEYS,
    MATH: {
        PI
    },
    DEFAULT_SHIP_ATTR: {
        ANCHORX,
        ANCHORY,
        SCALEX,
        SCALEY
    },
    DEFAULT_FLEET_ATTR: {
        MARGIN
    },
    DEFAULT_AMMUNITION_ATTR: {
        ANCHORX,
        ANCHORY,
        SCALEX: AMMO_SCALEX,
        SCALEY: AMMO_SCALEY,
        DEFAULT_VELOCITY: 2
    },
    PC_SPEED,
    NPC_SPEED
}

export { CONSTANTS }

