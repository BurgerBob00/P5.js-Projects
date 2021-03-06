let grid = [];
let newgrid = []
let rows, cols;
let w = 10;

function setup() {
    createCanvas(400, 400);
    rows = width / w;
    cols = height / w;
    for (let i = 0; i < cols; i++) {
        let temp = []
        for (let j = 0; j < rows; j++) {
            temp.push(new Cell(j, i, w));
        }
        grid.push(temp);
    }
    newgrid = grid;

}

//grid[y][x]

function draw() {
    background(0);
    grid.forEach(array => array.forEach(cell => cell.show()));
    arrayCopy(grid,newgrid);
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j].livingNeighbours();
            newgrid[i][j].alive = grid[i][j].update();
        }
    }
    arrayCopy(newgrid,grid);
}
