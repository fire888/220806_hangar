export const createKeyBoardListener = () => {
    const callbacks = []

    const keysData = {
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
    }


    const updateSubscrubers = () => {
        for (let i = 0; i < callbacks.length; ++i) {
            callbacks[i](keysData)
        }
    }


    const onKeyDown = function ( event ) {

        switch ( event.code ) {
    
            case 'ArrowUp':
            case 'KeyW':
                keysData.moveForward = true;
                break;
    
            case 'ArrowLeft':
            case 'KeyA':
                keysData.moveLeft = true;
                break;
    
            case 'ArrowDown':
            case 'KeyS':
                keysData.moveBackward = true;
                break;
    
            case 'ArrowRight':
            case 'KeyD':
                keysData.moveRight = true;
                break;    
        }
        updateSubscrubers()
    }
    
    const onKeyUp = function ( event ) {
    
        switch ( event.code ) {
    
            case 'ArrowUp':
            case 'KeyW':
                keysData.moveForward = false;
                break;
    
            case 'ArrowLeft':
            case 'KeyA':
                keysData.moveLeft = false;
                break;
    
            case 'ArrowDown':
            case 'KeyS':
                keysData.moveBackward = false
                break;
    
            case 'ArrowRight':
            case 'KeyD':
                keysData.moveRight = false;
                break;
    
        }

        updateSubscrubers()
    }
    
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)


    return {
        on: fn => {
            callbacks.push(fn)                
        }
    }
}

