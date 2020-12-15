const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas, bg; 
var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var obstacles;
var plr1, plr2,plr3;
var plrs;
var bg;

function preload(){
  bg = loadImage("images/bg.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);

  engine = Engine.create();
  world = engine.world;
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  Engine.run(engine);
}


function draw(){
  background(bg);
  if(playerCount === 3){
    game.update(1);
  }
  
  if(gameState === 1){
    clear();
    game.play();
  }

  drawSprites();  
}

