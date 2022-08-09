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

            const checkIsAllLoaded = () => {
                for (let i = 0; i < assetsData.length; ++i) {
                    let isItemInAssets = false
                    for (let key in assets) {
                        if (assetsData[i].key === key) {
                            isItemInAssets = true        
                        }
                    }
                    if (!isItemInAssets) {
                        return false
                    }    
                }
                return true
            }


            for (let i = 0; i < assetsData.length; ++i) {
                const { key, src, type } = assetsData[i]

                loaders[type].load(src, model => {
                    assets[key] = model
                    if (checkIsAllLoaded()) {
                        onComplete(assets)
                    }    
                })
            }
        }
    }
}