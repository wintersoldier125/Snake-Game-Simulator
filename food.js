import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition();
    }
    
}

export function draw(gameBoard){
    const foodelement = document.createElement('div');
    foodelement.style.gridRowStart = food.y;
    foodelement.style.gridColumnStart = food.x;
    foodelement.classList.add('food');
    gameBoard.appendChild(foodelement);

}

function getRandomFoodPosition(){
    let newFoodPosition; 

    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }

    return newFoodPosition
}