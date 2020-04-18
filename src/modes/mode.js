class Mode {
    constructor() {
        this.activated = false
    }

    activate() {
        this.activated = true
        this.onActivate()
    }

    deactivate() {
        this.activated = false
        this.onDeactivate()
    }

    onActivate() {}
    onDeactivate() {}
}

export { Mode }
