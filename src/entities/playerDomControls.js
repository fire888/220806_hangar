import * as THREE from 'three'
import { createCheckerIntersepts } from '../helpers/checkerIntersepts'

export const createPlayer = root => {


    const mainObj = new THREE.Object3D()
    mainObj.position.set(0, 700, 11000)

    const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 20000)
    camera.position.set(0, 0, 0)
    mainObj.add(camera)

    const frontObj = new THREE.Object3D()
    frontObj.position.set(0, 0, -100)
    mainObj.add(frontObj)

    const backObj = new THREE.Object3D()
    backObj.position.set(0, 0, 400)
    mainObj.add(backObj)

    root.keyboardListener.on(data => keys = data)

    let keys = null
    const dirKeys = {
        'moveForward': frontObj,
        'moveBackward': backObj,
    }


    let collisionsArr = []
    const checkerIntersepts = createCheckerIntersepts()
    const checkSegmentAndCollision = direction => {
        const [is] = checkerIntersepts.checkCollisions(mainObj, dirKeys[direction], 150)
        return is
    }


    let speed = 40

    return {
        camera,
        mainObj,
        setCollisionArr: arr => {
            for (let i = 0; i < arr.length; ++i) {
                collisionsArr.push(arr[i])
                checkerIntersepts.setItemToCollision(arr[i])
            }
        },
        start: () => {},
        update: n => {
            if (n === undefined) {
                n = 1
            }
            if (!keys) {
                return;
            }
            if (keys['moveForward']) {
                if (checkSegmentAndCollision('moveForward')) {
                    return;
                }
                mainObj.translateZ(-speed * n)
            }
            if (keys['moveBackward']) {
                if (checkSegmentAndCollision('moveBackward')) {
                     return;
                }
                mainObj.translateZ(speed * n)
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
 