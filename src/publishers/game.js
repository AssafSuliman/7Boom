import EventEmitter from "events"

class Game extends EventEmitter{
    
    start(maxNumber = 100){
        for(let number = 1; number <= maxNumber; number++){
            this.emit('start', number)
        }
    }
}

export default Game







