const board = ["라이캣", "라이캣", "라이캣", "빙키", "소울곰", "뮤라"];
// 1. 게시글을 작성한 사용자 수
const setBoard = new Set(board);
console.log(setBoard.size);

// 2. 각자 몇 개의 게시글을 작성했는지 Map 만들기
// let postBoard = new Map();
// let count = 0;
// for (index in board) {
//     if (!postBoard.has(board[index])) {
//         count = 1;
//     }else {
//         count++;
//     }
//     postBoard.set(board[index], count);
// }


// 2-1. setBoard를 이용
["라이캣", "빙키", "소울곰", "뮤라"];

const mapUsingSet = new Map();
for (const name of setBoard) {
  console.log(name, board.filter((el) => el === name).length);
  mapUsingSet.set(name, board.filter((el) => el === name).length);
}
console.log(mapUsingSet);

// 2-2. board 순회
const mapUsingIter = new Map();
for (const name of board) {
    console.log(name);
    mapUsingIter.set(name, (mapUsingIter.get(name) || 0) + 1);
}
console.log(mapUsingIter);

