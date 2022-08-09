import { createPlayerPointer } from '../entities/playerPointer'

export const createWalkingSystem = root => {
    const pointerPlayer = createPlayerPointer(root)


    root.studio.addToScene(pointerPlayer.camera)
    root.studio.setCamera(pointerPlayer.camera) 
    root.studio.addToScene(pointerPlayer.getControlsObject())

    return {
        unlockControls: () => {
            pointerPlayer.unlockControls()      
        },
        update: () => {
            pointerPlayer.update()
        }
    }
}