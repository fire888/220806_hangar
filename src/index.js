import { LEVEL_ITEMS_DATA } from './constants/LEVEL_ITEMS_DATA'
import { ASSETS_TO_LOAD } from './constants/ASSETS_TO_LOAD'
import { MATERIALS_DATA } from './constants/MATERIALS_DATA'
import { createLoadManager } from './helpers/loaderAssets'
import { makeMaterials } from './helpers/makeMaterials'
import { createLevel } from './systems/createLevel'
import { createStudio } from './entities/studio'
import { createUi } from './systems/ui'



const root = {
    MATERIALS_DATA,
    LEVEL_ITEMS_DATA,
    ASSETS_TO_LOAD,
}

const loadManager = createLoadManager()
loadManager.startLoad(ASSETS_TO_LOAD, assets => {
    root.assets = assets
    makeMaterials(MATERIALS_DATA, assets, materials => {
        root.materials = materials

        const studio = createStudio(root)

        const levelSystem = createLevel(root)
        studio.addToScene(levelSystem.scene)
        studio.addToScene(levelSystem.noiseBlob)

        const ui = createUi(root)
        ui.hideStartScreen(() => {
            studio.unlockControls()
        })

        const tick = () => {
            levelSystem.update()
            studio.render()
            window.requestAnimationFrame(tick)
        }
        tick()
    })
})


