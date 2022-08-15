import './stylesheets/style.css'
import { LEVEL_ITEMS_DATA } from './constants/LEVEL_ITEMS_DATA'
import { ASSETS_TO_LOAD } from './constants/ASSETS_TO_LOAD'
import { MATERIALS_DATA } from './constants/MATERIALS_DATA'
import { createLoadManager } from './helpers/loaderAssets'
import { makeMaterials } from './helpers/makeMaterials'
import { createLevel } from './systems/createLevel'
import { createStudio } from './entities/studio'
import { createUi } from './systems/ui'
import { checkDevice } from './helpers/checkerDevice'
import { createKeyBoardListener } from './helpers/keyBoardListener'
import { createWalkingSystem } from './systems/walkingSystem'


const root = {
    MATERIALS_DATA,
    LEVEL_ITEMS_DATA,
    ASSETS_TO_LOAD,
}
root.device = checkDevice()
//root.device.mode = 'phone'
root.keyboardListener = createKeyBoardListener(root)

const loadManager = createLoadManager()
loadManager.startLoad(ASSETS_TO_LOAD, assets => {
    root.assets = assets
    makeMaterials(MATERIALS_DATA, assets, materials => {
        root.materials = materials

        root.studio = createStudio(root)

        root.levelSystem = createLevel(root)
        root.studio.addToScene(root.levelSystem.scene)
        root.levelSystem.noiseBlob && root.studio.addToScene(root.levelSystem.noiseBlob)

        root.walkingSystem = createWalkingSystem(root)

        const ui = createUi(root)
        ui.hideStartScreen(() => {
            root.walkingSystem.startWalking()
        })

        const tick = () => {
            root.levelSystem.update()
            root.walkingSystem.update()
            root.studio.render()
            window.requestAnimationFrame(tick)
        }
        tick()
    })
})