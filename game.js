import {update as updateSnake, draw as drawSnake, snakespeed, getSnakeHead, snakeIntersection } from "./snake.js";

import { update as updatefood, draw as drawfood } from "./food.js";
import { outsideGrid } from "./grid.js";
//game loop

let lastRenderTime = 0;
// const snakespeed = 10
let gameOver = false;
const gameBoard = document.getElementById('game-board')

function main(currentime){
    if(gameOver){
        if(confirm('you lost, press ok to restart')){
            window.location = '/'
        }
        return
    }



    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentime- lastRenderTime)/1000;

    if(secondsSinceLastRender < 1/snakespeed) return
    
    lastRenderTime = currentime;
    update()
    draw()
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updatefood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawfood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

