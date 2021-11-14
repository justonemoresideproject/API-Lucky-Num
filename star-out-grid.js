function starOutGrid(grid) {
    returnGrid = grid
    for(i = 0; i < grid.length; i++){
        for(j = 0; j < grid[i].length; j++){
            if(grid[i][j] == '*'){
                // if(grid[i][j-1]){
                //     returnGrid[i][j-1] = '*'
                // }
                // if(grid[i][j+1]){
                //     returnGrid[i][j+1] = '*'
                // }
                // if(grid[i-1][j]){
                //     returnGrid[i-1][j] = '*'
                // }
                // if(grid[i+1][j]){
                //     returnGrid[i+1][j] = '*'
                // }
                for(k = Math.max((i - 1), 0); k <= Math.min((i + 1), (grid.length - 1)); k++){
                    returnGrid[k][j] = '*'
                }
                for(l = Math.max((j - 1), 0); l <= Math.min((j + 1), (grid[i].length - 1)); l++){
                    returnGrid[i][l] = '*'
                }
                return returnGrid
            }
        }
    }
    return returnGrid
}
