import * as THREE from 'three'

export const createPlayer = root => {
    let keys = null
    let speed = 40

    const mainObj = new THREE.Object3D()
    mainObj.position.set(0, 700, 11800)

    const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 20000)
    camera.position.set(0, 0, 0)
    mainObj.add(camera)

    const frontObj = new THREE.Object3D()
    frontObj.position.set(0, 1.8, -1)
    mainObj.add(frontObj)

    const backObj = new THREE.Object3D()
    backObj.position.set(0, 1.8, 1)
    mainObj.add(backObj)

    root.keyboardListener.on(data => keys = data)
    const dirKeys = {
        'up': frontObj,
        'down': backObj,
    }

    return {
        camera,
        mainObj,
        update: n => {
            if (n === undefined) {
                n = 1
            }
            if (!keys) {
                return;
            }

            if (keys['moveBackward']) {
                mainObj.translateZ(speed * n)
            }
            if (keys['moveForward']) {
                mainObj.translateZ(-speed * n)
            }
            if (keys['moveLeft']) {
                 mainObj.rotation.y += 0.02 * n
            }
            if (keys['moveRight']) {
                mainObj.rotation.y -= 0.02 * n
            }
        },
    }
}
 