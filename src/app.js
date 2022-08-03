import readlineSync from 'readline-sync'
import Game from './publishers/game.js'
import Player from './clients/player.js'
import Boom from './clients/7boom.js'
import fs from 'fs'

const game = new Game()
const boom = new Boom()

const getUsers = () => {
  let numberOfPlayers = readlineSync.question('Hello, how many players are gonna play? ')
  while(Number(numberOfPlayers) < 2){
      numberOfPlayers = readlineSync.question('there should be atleast 2 players playing: ')
  }
  fs.writeFileSync(`C:/Users/asafa/Desktop/Experis/FullStack/BackEnd/7Boom/src/common/lastgame.txt`, numberOfPlayers)
  for(let i = 1; i <= numberOfPlayers; i++){
      const playerName = readlineSync.question('please add a player name: ')
      const player = new Player(playerName, i)
      game.on('start', player.sayName.bind(player))
      const playerDetails = ` ;${playerName} ${i}`
      fs.appendFileSync(`C:/Users/asafa/Desktop/Experis/FullStack/BackEnd/7Boom/src/common/lastgame.txt`, playerDetails)
  }
}

getUsers()
game.on('start', boom.printBoom)
game.start(20)