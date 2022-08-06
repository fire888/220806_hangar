import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


export const createLoadManager = () => {

    const loaders = {
        'cubeTexture': new THREE.CubeTextureLoader(),
        'img': new THREE.TextureLoader(),
        'glb': new GLTFLoader(),
    }


    return {
        startLoad: (assetsData, onComplete, onProgress) => {
            const assets = {}

            const loadAsset = i => {
                if (!assetsData[i]) {
                    return void onComplete(assets);
                }

                const { key, src, type } = assetsData[i]

                loaders[type].load(src, model => {
                    assets[key] = model
                    loadAsset(++i)
                })
            }

            loadAsset(0)
        }
    }
}
