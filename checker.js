// FS bootcamp prep - sudoku checker project
// The first component is the game of sudoku we are checking. 
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

//This is a test puzzle to compare with the first puzzle for a BONUS comparison function. 

let p8zzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 8,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

// Section 1
// getRow: This function should accept two arguments: 
// a sudoku grid (represented by an array of arrays) and a row index. 
// The function should return an array containing the numbers in the specified row.

function getRow(puzzle, row){
return puzzle[row];
}

// Section 2
// getColumn: This function should accept a sudoku grid and a column index. 
// The function should return an array containing the numbers in the specified column.

function getColumn(puzzle, col){
let result = [];
for(let i=0; i<puzzle.length; i++){
    if(Array.isArray(puzzle[i])){
        result.push(puzzle[i][col]);
    }
}
return result;
}

// Section 3
// getSection: This function should accept three arguments: 
// a sudoku grid, and an x and y coordinate for one of the puzzle's 3x3 subgrids. 
// The function should return an array with all the numbers in the specified subgrid.

function getSection(puzzle, x, y){
    let result = [];
    for(let i = 0; i<=2; i++){
        for(let j = 0; j<=2; j++){
            result.push(puzzle[3*x+i][3*y+j]);
        }
    }
    return result;
}

// Alternate function using slice method: 
// 
// function getSection(puzzle, x, y){
//     let result = [];
//     let rows = puzzle.slice(3*x, 3*(x+1));
//     for (let i = 0; i<=2; i++){
//         result = result.concat(rows[i].slice(3*y, 3*(y+1)));
//     }
//     return result;
// }

// Section 4
// includes1to9 function checks the puzzle to see if all numbers 1-9 are included to check if the game is a valid sudoku game. Returns true/false. 

function includes1to9(puzzleNum){
   let checkList = [];// creating a test case
   for(let i = 0; i<9; i++){
       checkList.push(false);// [false, false, false, false, false, false, false, false, false]
   }
   for(let j = 0; j<puzzleNum.length; j++){
       checkList[puzzleNum[j]-1]=true;// change each entry to true if it matches
       // 7-1 = 6 (6th entry === true); 4-1 = 3; 2-1 = 1; 9-1 = 8; 6-1 = 5; 3-1 = 2; 5-1 = 4; 8-1 = 7; 1-1 = 0;
       // 6,3,1,8,5,2,4,7,0 index switched false to true;
       // each part of the array would have to change to reflect that all 9 numbers are included in param
   }
   for(let x = 0; x<checkList.length; x++){
       if(checkList[x]===false){
           return false
           // if any number wasn't switched, it's because not all nums 1-9 for a sudoku game were included
       }
   }
   return true
   // if all nums switched to true, your game is correct
}


// Section 5
// sudokuIsValid function is the final portion to check if the sudoku game is valid by using each of the previous algorithms to test it. Returns true/false. 

function sudokuIsValid(puzzle){
    for(let i = 0; i < 9; i++){
        if(includes1to9(getRow(puzzle, i))===false){ //test every row
            return false;
        }   
        if(includes1to9(getColumn(puzzle, i))===false){ //test every column
            return false;
        }
    }
    for(let i = 0; i<=2; i++){
        for(let j = 0; j<=2; j++){
            if(includes1to9(getSection(puzzle, i, j))===false){ //test every section
                return false;
            }
        }
    }
    return true;
}


sudokuIsValid(puzzle);
// returns true; 

// ** BONUS section **
// function isSame is use to compare two puzzles together to identify if they are the same. 

function isSame(puzzle, puzzle2){
    for(let i = 0; i<puzzle.length; i++){
        for(let j = 0; j<puzzle[i].length; j++){ //nested loop to test 2 dimensional object; checks x-axis
            if(puzzle[i][j]!==puzzle2[i][j]){ //checks y-axis
                    return false;
            }
        }
    }
    return true;
}

isSame(puzzle, p8zzle);
// returns false; 
