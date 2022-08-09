import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { createCheckerIntersepts } from '../helpers/checkerIntersepts'


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
    const sceneObj = controlsLook.getObject()

    const colObj = new THREE.Object3D()
    colObj.position.y = 700

    const frontObj = new THREE.Object3D()
    frontObj.position.set(0, 1.8, -1)
    colObj.add(frontObj)

    const backObj = new THREE.Object3D()
    backObj.position.set(0, 1.8, 1)
    colObj.add(backObj)    



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



    const checkerIntersepts = createCheckerIntersepts()
    const checkSegmentAndCollision = obj => {
        const [is] = checkerIntersepts.checkCollisions(colObj, obj, 700)
        return is
    }



    return {
        camera,
        getControlsObject: () => controlsLook.getObject(),
        setCollisionArr: arr => {
            for (let i = 0; i < arr.length; ++i) {
                checkerIntersepts.setItemToCollision(arr[i])
            }
        },
        start: () => {
            domLocker.classList.add('hidden')
            controlsLook.lock()
            isLock = true
        },
        update: () => {
            if (!isLock) {
                return;
            }


            if (keysData.moveForward && checkSegmentAndCollision(frontObj)) {
                return; 
            } 
            if (keysData.moveBackward && checkSegmentAndCollision(backObj)) {
                return; 
            }

            velocity.x = velocity.x / 2
            velocity.z = velocity.z / 2
        
            direction.z = Number(keysData.moveForward) - Number(keysData.moveBackward)
            direction.x = Number(keysData.moveRight) - Number(keysData.moveLeft)
            direction.normalize()
        
            if ( keysData.moveForward || keysData.moveBackward ) velocity.z -= (direction.z * 2)
            if ( keysData.moveLeft || keysData.moveRight ) velocity.x -= (direction.x * 2)
        

            colObj.position.x = sceneObj.position.x
            colObj.position.z = sceneObj.position.z
            colObj.rotation.y = sceneObj.rotation.y
            
            

            controlsLook.moveRight( - velocity.x * 15 )
            //controlsLook.moveRight( - direction.x)
            controlsLook.moveForward( - velocity.z * 15 )
            //controlsLook.moveForward( - direction.z)
        }
    }
}