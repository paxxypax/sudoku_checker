//FS bootcamp prep - sudoku checker project
//first component is the game of sudoku we are checking
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

// getRow: This function should accept two arguments: 
// a sudoku grid (represented by an array of arrays) and a row index. 
// The function should return an array containing the numbers in the specified row.

function getRow(puzzle, row){
return puzzle[row];
}

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
//possible changes: use slice function instead of indexing?


let puzzleNum = getSection(puzzle, 0, 1);

function includes1to9(puzzleNum){
   let checkList = []; 
   for(let i = 0; i<9; i++){
       checkList.push(false);//[false, false, false, false, false, false, false, false, false]
   }
   for(let j = 0; j<puzzleNum.length; j++){
       checkList[puzzleNum[j]-1]=true;//change each entry to true if it matches
       //7-1 = 6 (6th entry === true); 4-1 = 3; 2-1 = 1; 9-1 = 8; 6-1 = 5; 3-1 = 2; 5-1 = 4; 8-1 = 7; 1-1 = 0;
       // 6,3,1,8,5,2,4,7,0 index switched false to true;
       // each part of the array would have to change to reflect that all 9 numbers are included in param
   }
   for(let x = 0; x<checkList.length; x++){
       if(checkList[x]===false){
           return false
           //if any number wasn't switched, it's because not all nums 1-9 for a sudoku game were included
       }
   }
   return true
   //if all nums switched to true, your game is correct
}

includes1to9(puzzleNum);

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
