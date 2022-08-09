import * as THREE from "three";


export const createStudio = root => {

    const { environmentMap } = root.assets

    const canvas = document.querySelector('canvas.webgl')
    let camera = null

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

    window.addEventListener('resize', () => {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        if (camera) {
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()
        }
        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })



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
        render: () => {
            renderer.render(scene, camera)
        },
        setCamera: cam => {
            camera = cam
        }
    }
}