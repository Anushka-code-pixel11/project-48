class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    plr1 = createSprite(100,200);

    plr2 = createSprite(300,200);

    plr3 = createSprite(500,200);

    plrs = [plr1, plr2, plr3];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;

      background(bg);

      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 130;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 160;

        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        plrs[index-1].x = x;
        plrs[index-1].y = y;

        if (index === player.index){
          plrs[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = plrs[index-1].y
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance += 10;
      player.update();
    }

    if(player.distance >= 3860){
      gameState = 2;
    }
    
    drawSprites();
  }

  end(){
    console.log("game ended");
    game.update(2);
  }
}
