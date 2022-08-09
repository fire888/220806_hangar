import vertexShader from '../shaders/vertex.glsl'
import fragmentShader from '../shaders/fragment.glsl'
import * as THREE from "three";

export const createLevel = (root) => {

    const { assets, materials, LEVEL_ITEMS_DATA } = root


    const scene = assets.hangarGlb.scene
    const items = {}

    const collisionItems = []


    assets.hangarGlb.scene.traverse(item => {
        if (LEVEL_ITEMS_DATA[item.name]) {
            const { name, mat, scale, rotation, castShadow, receiveShadow } = LEVEL_ITEMS_DATA[item.name]

            if (mat) {
                item.material = materials[mat]
            }
            if (scale) {
                item.scale.set(...scale)
            }
            if (rotation) {
                item.rotation.set(...rotation)
            }
            if (castShadow) {
                item.castShadow = true
            }
            if (receiveShadow) {
                item.receiveShadow = true
            }

            items[name] = item
        } else {
            if (item.material) {
                item.visible = false
            }
        }

        if (item.name === 'Monitor') {
            items['monitorMesh'] = item

            const video = document.getElementById('video');
            const videoTexture = new THREE.VideoTexture(video);
            const videoMaterial =  new THREE.MeshBasicMaterial( { map: videoTexture } );
            videoMaterial.side =  THREE.FrontSide
            videoTexture.flipY = false
            videoTexture.encoding = THREE.sRGBEncoding
            items['monitorMesh'].material =  videoMaterial
        }

        if (item.name === 'collisionsWalls') {
            // console.log('!!!!', item)
            collisionItems.push(item) 
            item.visible = true
            //item.material.side = THREE.DoubleSide
        }
    })





    const blobMaterial = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms:
            {
                time: { type: "f", value: 0 }
            }
    })

    const blobGeometry = new THREE.SphereGeometry( 100,300,200)

    const noiseBlob = new THREE.Mesh( blobGeometry, blobMaterial )
    noiseBlob.position.set(-1680, 510, 0)
    noiseBlob.scale.set(3, 3, 3)
    noiseBlob.modifier = Math.random()
    noiseBlob.material.transparent = true
    noiseBlob.material.opacity = 10 * Math.random()
    const start = Date.now()


    return {
        scene,
        noiseBlob,
        collisionItems,
        update: () => {
            // // Update Crystall + CrystallGrid + Stone
            if (items.crystallMesh) {
                items.crystallMesh.rotation.y += 0.01
                items.crystallGridMesh.rotation.y += 0.01
                items.stoneMesh.rotation.y += 0.01
            }


            if (items.counterDesign1Mesh) {
                items.counterDesign1Mesh.rotation.z += 0.01
                items.counterDesign2Mesh.rotation.z += 0.01
            }

            if (blobMaterial) {
                blobMaterial.uniforms[ 'time' ].value = .00009 * ( Date.now() - start );
            }
        }
    }
}