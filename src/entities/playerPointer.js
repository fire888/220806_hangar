import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

export const createPlayerPointer = root => {
    const velocity = new THREE.Vector3();
    const direction = new THREE.Vector3();
    let isLock = false 



    let keysData = {}
    if (root.keyboardListener) {
        root.keyboardListener.on(data => {
            keysData = data
        }) 
    }

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 20000)
    camera.position.set(0, 700, 11800)

    const controlsLook = new PointerLockControls(camera, document.body)

    const domLocker = document.querySelector(".lock-pointer-control")
    domLocker.addEventListener('click', () => {
        domLocker.classList.add('hidden')
        controlsLook.lock()
        isLock = true
    })
    controlsLook.addEventListener( 'unlock', function () {
        domLocker.classList.remove('hidden')
        isLock = false
    })

    return {
        camera,
        getControlsObject: () => controlsLook.getObject(),
        unlockControls: () => {
            domLocker.classList.add('hidden')
            controlsLook.lock()
            isLock = true
        },
        update: () => {
            if (!isLock) {
                return;
            }

            velocity.x = velocity.x / 2
            velocity.z = velocity.z / 2
        
            direction.z = Number(keysData.moveForward) - Number(keysData.moveBackward)
            direction.x = Number(keysData.moveRight) - Number(keysData.moveLeft)
            direction.normalize()
        
            if ( keysData.moveForward || keysData.moveBackward ) velocity.z -= direction.z
            if ( keysData.moveLeft || keysData.moveRight ) velocity.x -= direction.x
        
            controlsLook.moveRight( - velocity.x * 10 )
            controlsLook.moveForward( - velocity.z * 10 )
        }
    }
}