import * as THREE from "three";
//import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

export const createStudio = root => {

    const { environmentMap } = root.assets

    const canvas = document.querySelector('canvas.webgl')

    const scene = new THREE.Scene()
    environmentMap.encoding = THREE.sRGBEncoding
    scene.environment = environmentMap


    const ambientLight = new THREE.AmbientLight()
    ambientLight.color = new THREE.Color(0xffffff)
    ambientLight.intensity = 0.5
    scene.add(ambientLight)


    const pointLight2 = new THREE.PointLight(0xffffff, 200, 10000, 100)
    pointLight2.position.set(-2210, 200, 9580)
    pointLight2.castShadow = true
    pointLight2.shadow.radius = 10
    scene.add(pointLight2)


    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20000)
    camera.position.set(0, 700, 11800)
    scene.add(camera)




    let moveForward = false;
    let moveBackward = false;
    let moveLeft = false;
    let moveRight = false;
    let canJump = false;

    let prevTime = performance.now();
    const velocity = new THREE.Vector3();
    const direction = new THREE.Vector3();
    const vertex = new THREE.Vector3();
    const color = new THREE.Color();


    const onKeyDown = function ( event ) {

        switch ( event.code ) {

            case 'ArrowUp':
            case 'KeyW':
                moveForward = true;
                break;

            case 'ArrowLeft':
            case 'KeyA':
                moveLeft = true;
                break;

            case 'ArrowDown':
            case 'KeyS':
                moveBackward = true;
                break;

            case 'ArrowRight':
            case 'KeyD':
                moveRight = true;
                break;

            case 'Space':
                if ( canJump === true ) velocity.y += 350;
                canJump = false;
                break;

        }

    };

    const onKeyUp = function ( event ) {

        switch ( event.code ) {

            case 'ArrowUp':
            case 'KeyW':
                moveForward = false;
                break;

            case 'ArrowLeft':
            case 'KeyA':
                moveLeft = false;
                break;

            case 'ArrowDown':
            case 'KeyS':
                moveBackward = false;
                break;

            case 'ArrowRight':
            case 'KeyD':
                moveRight = false;
                break;

        }

    };

    document.addEventListener( 'keydown', onKeyDown );
    document.addEventListener( 'keyup', onKeyUp );



    const controlsLook = new PointerLockControls( camera, document.body );
    scene.add(controlsLook.getObject())



    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    })
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputEncoding = THREE.sRGBEncoding


    return {
        addToScene: m => {
            scene.add(m)
        },
        unlockControls: () => {
            controlsLook.lock()
        },
        render: () => {



                velocity.x = velocity.x / 2
                velocity.z = velocity.z / 2

                direction.z = Number( moveForward ) - Number( moveBackward );
                direction.x = Number( moveRight ) - Number( moveLeft );
                direction.normalize()

                if ( moveForward || moveBackward ) velocity.z -= direction.z
                if ( moveLeft || moveRight ) velocity.x -= direction.x

                controlsLook.moveRight( - velocity.x * 10 );
                controlsLook.moveForward( - velocity.z * 10 );



            renderer.render(scene, camera)
        }
    }
}