
const GridSize = 21;

export function randomGridPosition(){
    return {
        x: Math.floor(Math.random()*GridSize)+1,
        y: Math.floor(Math.random()*GridSize)+1

    }
}

export function outsideGrid(position){
    return (position.x < 1 || position.x > GridSize || position.y < 1 || position.y > GridSize)
}