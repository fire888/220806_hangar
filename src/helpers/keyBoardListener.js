export const createKeyBoardListener = root => {

    const arr = [
        { domClass: '.arrow-left',  keyCode: 'ArrowLeft', domElem: null },
        { domClass: '.arrow-right',  keyCode: 'ArrowRight', domElem: null  },
        { domClass: '.arrow-top',  keyCode: 'ArrowUp', domElem: null },
        { domClass: '.arrow-bottom',  keyCode: 'ArrowDown', domElem: null },
    ]

    const keysData = {
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
    }


    const callbacks = []
    const updateSubscrubers = () => {
        for (let i = 0; i < callbacks.length; ++i) {
            callbacks[i](keysData)
        }
    }


    const onKey = (code, isDown) =>  {
        switch (code) {
            case 'ArrowUp':
            case 'KeyW':
                keysData.moveForward = isDown
                break;
    
            case 'ArrowLeft':
            case 'KeyA':
                keysData.moveLeft = isDown
                break;
    
            case 'ArrowDown':
            case 'KeyS':
                keysData.moveBackward = isDown
                break;
    
            case 'ArrowRight':
            case 'KeyD':
                keysData.moveRight = isDown
                break;
        }
        updateSubscrubers()
    }



    if (root.device.mode !== 'desktop') {    
        for (let i = 0; i < arr.length; ++i) {
            const elem = document.querySelector(arr[i].domClass)
            if (elem) {
                arr[i].domElem = elem
                elem.addEventListener('mousedown', () => onKey(arr[i].keyCode, true))
                elem.addEventListener('mouseup', () => onKey(arr[i].keyCode, false))
                elem.addEventListener('touchstart', () => onKey(arr[i].keyCode, true))
                elem.addEventListener('touchend', () => onKey( arr[i].keyCode, false))
            }
        }  
    }

    document.addEventListener('keydown', e => onKey(e.code, true))
    document.addEventListener('keyup',  e => onKey(e.code, false))
    
    


    return {
        on: fn => {
            callbacks.push(fn)                
        },
        showArrows: () => {
            for (let i = 0; i < arr.length; ++i) {
                  if (arr[i].domElem) {
                    arr[i].domElem.classList.remove('hidden')
                  }  
            }  
        }
    }
}

