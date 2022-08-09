import { createPlayerPointer } from '../entities/playerPointer'
import { createPlayer } from '../entities/playerDomControls'

export const createWalkingSystem = root => {
    //let pointerPlayer
    //let domControlsPlayer 

    let player

    if (root.device.mode !== 'desktop') {
        player = createPlayer(root)
        player.setCollisionArr(root.levelSystem.collisionItems)
        root.studio.addToScene(player.mainObj)
        root.studio.setCamera(player.camera) 
    } else {
        player = createPlayerPointer(root)
        player.setCollisionArr(root.levelSystem.collisionItems)
        root.studio.setCamera(player.camera) 
        root.studio.addToScene(player.getControlsObject())
    }



    return {
        startWalking: () => { 
            player.start()
            if (root.device.mode !== 'desktop') {
                root.keyboardListener.showArrows()
            }
        },
        update: () => {
            player.update()
        }
    }
}