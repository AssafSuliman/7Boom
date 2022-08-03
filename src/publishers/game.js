import readlineSync from 'readline-sync'
import EventEmitter from "events"
/* const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) */

class Game extends EventEmitter{
    getUsers() {
        let numberOfPlayers = readlineSync.question('Hello, how many players are gonna play?')
        while(numberOfPlayers < 2){
            numberOfPlayers = readlineSync.question('there should be atleast 2 players playing')
        }
        for(let i = 0; i <= numberOfPlayers; i++){
            const playerName = readlineSync.question('please add a player name')
            const player = new Player(playerName)
        }
    }
    countNumbers(maxNumber = 100){
        for(let number = 0; number <= maxNumber; number++){
            console.log(number, this.emit('start', number))
        }
    }
}







