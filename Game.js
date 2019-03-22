class Game {


  constructor() {
    console.log('Mick Zagger is alive!')
    this.allMoves = ['up','down','left','right'];
    this.possibleMoves = [];
    this.lastMove = 'up';
    this.gameState = {};
    this.allSnakes = {};
    this.myself = [];
    this.board = [];
    this.me = {};
    this.food = {};
  }

  getPossibleMoves() {
    let moves = this.avoidWalls(this.allMoves);
    moves = this.avoidSelf(moves);
    return moves
  }

  moveMySnake() {
    // console.log(this.otherSnakes);
    // console.log(this.board);
    const possibleMoves = this.getPossibleMoves();
    let nextMove = possibleMoves[Math.floor(Math.random() * (possibleMoves.length))];
    this.lastMove = nextMove;
    return nextMove;
  }

  avoidSelf(possibleMoves) {
    const myHead = this.myself[0];

    // if (myHead.x === 0) {
    //   //cant go left
    //   possibleMoves = possibleMoves.filter((move) => move != 'left');
    // }
    // if (myHead.x === this.board.x) {
    //   //cant go right
    //   possibleMoves = possibleMoves.filter((move) => move != 'right');
    // }
    // if (myHead.y === 0) {
    //   //cant go up
    //   possibleMoves = possibleMoves.filter((move) => move != 'up');
    // }
    // if (myHead.y === this.board.y) {
    //   //cant go down
    //   possibleMoves = possibleMoves.filter((move) => move != 'down');
    // }

    console.log(this.myself);
    possibleMoves = possibleMoves.filter((move) => move != this.lastMove);
    console.log(possibleMoves);
    return possibleMoves;

  }

  avoidWalls(possibleMoves) {
    const myHead = this.myself[0];

    if (myHead.x === 0) {
      //cant go left
      possibleMoves = possibleMoves.filter((move) => move != 'left');
    }
    if (myHead.x === this.board.x) {
      //cant go right
      possibleMoves = possibleMoves.filter((move) => move != 'right');
    }
    if (myHead.y === 0) {
      //cant go up
      possibleMoves = possibleMoves.filter((move) => move != 'up');
    }
    if (myHead.y === this.board.y) {
      //cant go down
      possibleMoves = possibleMoves.filter((move) => move != 'down');
    }



    return possibleMoves;

  }


}

module.exports = new Game();