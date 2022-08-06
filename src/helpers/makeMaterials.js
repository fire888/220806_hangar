import * as THREE from 'three'

export const makeMaterials = (materialsData, assets, onComplete)  => {
    const materials = {}

    for (let i = 0; i < materialsData.length; ++i) {
        const { name, type, data } = materialsData[i]

        if (data.map) {
            assets[data.map].minFilter = THREE.NearestFilter
            assets[data.map].encoding = THREE.sRGBEncoding
            assets[data.map].flipY = false
            data.map = assets[data.map]

        }
        if (data.envMap) {
            data.envMap = assets[data.envMap]
        }

        materials[name] = new THREE[type](data)
    }



    onComplete(materials)
}