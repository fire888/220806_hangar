import { createPlayerPointer } from '../entities/playerPointer'
import { createPlayer } from '../entities/playerDomControls'

export const createWalkingSystem = root => {
    let pointerPlayer
    let domControlsPlayer 

    if (root.device.mode !== 'desktop') {
        domControlsPlayer = createPlayer(root)
        root.studio.addToScene(domControlsPlayer.mainObj)
        root.studio.setCamera(domControlsPlayer.camera) 
    } else {
        pointerPlayer = createPlayerPointer(root)
        root.studio.setCamera(pointerPlayer.camera) 
        root.studio.addToScene(pointerPlayer.getControlsObject())
    }



    return {
        startWalking: () => {
            if (pointerPlayer) { 
                pointerPlayer.unlockControls()
            }
            if (domControlsPlayer) {
                root.keyboardListener.showArrows()
            }    
        },
        update: () => {
            pointerPlayer && pointerPlayer.update()
            domControlsPlayer && domControlsPlayer.update()
        }
    }
}