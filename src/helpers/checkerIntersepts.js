import * as THREE from "three";

export const createCheckerIntersepts = () => {
    let _arrMeshes = []

    let _vecStart = new THREE.Vector3()
    let _vecDir = new THREE.Vector3()
    let _rayCaster = new THREE.Raycaster(_vecStart, _vecDir, 0, 3000)

    return {    
        setItemToCollision: (mesh) => {
            for (let i = 0; i < _arrMeshes.length; ++i) {
                if (_arrMeshes[i] === mesh) {
                    return;
                }
            }
            _arrMeshes.push(mesh)
        },


        clearArrCollisions: () => {
            _arrMeshes = []
        },

        checkCollisions: (objFrom, objTo, dist) => {
            objFrom.getWorldPosition(_vecStart)
            objTo.getWorldPosition(_vecDir)
            _vecDir.sub(_vecStart)
            const intersects = _rayCaster.intersectObjects(_arrMeshes)
            //console.log(intersects)
            if (intersects[0] && intersects[0].distance < dist) {

                return [ true, intersects[0] ]
            }
            return [ false, null ]
        },
    }
}