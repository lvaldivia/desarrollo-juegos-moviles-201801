Game = function(game){}
Game.prototype = {
	init:function(level){
		currentLevel = level || "level1";
	},
	create:function(){
		this.game.physics.startSystem(
						Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 1000;		

		map = this.game.add.tilemap(currentLevel);
		map.addTilesetImage('tiles_spritesheet','gameTiles');

		backgroundLayer = 
			map.createLayer("backgroundLayer");

		collisionLayer = 
			map.createLayer("collisionLayer");

		map.setCollisionBetween(1,156,true,
						'collisionLayer');

		collisionLayer.resizeWorld();
		this.createPlayer();
		this.createEnemies();
		this.createGoal();
		this.createControls();
	},
	createControls:function(){
		leftButton = this.game.add.sprite(30,0,'arrowButton');
		leftButton.y = this.game.height - 60;
		leftButton.inputEnabled = true;
		leftButton.fixedToCamera = true;
		leftButton.alpha = 0.7;

		rightButton = this.game.add.sprite(leftButton.x 
											+leftButton.width +80
		                    ,0,'arrowButton');                              
		rightButton.y = this.game.height - 60;
		rightButton.inputEnabled = true;
		rightButton.fixedToCamera = true;
		rightButton.alpha = 0.7;

		actionButton = this.game.add.sprite(0,0,'actionButton');
		actionButton.y = this.game.height -60;
		actionButton.x = 500;
		actionButton.inputEnabled = true;
		actionButton.fixedToCamera = true;
		actionButton.alpha = 0.7;
		leftButton.events.onInputDown.add(function(){
			player.pressButton("left");
		},this);
		rightButton.events.onInputDown.add(function(){
			player.pressButton("right");
		},this);
		actionButton.events.onInputDown.add(function(){
			player.pressButton("up");
		},this);

		leftButton.events.onInputUp.add(function(){
			player.releaseButton("left");
		},this);
		rightButton.events.onInputUp.add(function(){
			player.releaseButton("right");
		},this);
		actionButton.events.onInputUp.add(function(){
			player.releaseButton("up");
		},this);
	},
	createGoal:function(){
		var goalData = this.findObjectsByType(
					"goal",map,'objectsLayer');
		goal = new Goal(this.game,goalData);
	},
	update:function(){
		this.game.physics.arcade.collide(player,collisionLayer);
		this.game.physics.arcade.collide(enemies,collisionLayer);		
		this.game.physics.arcade.collide(player,enemies,
										this.hitEnemy,null,this);
		this.game.physics.arcade.collide(goal,collisionLayer);
		this.game.physics.arcade.overlap(player,goal,
											this.hitGoal,null,this);
	},
	hitGoal:function(player,goal){
		console.log(goal.getNextLevel());
		this.game.state.start("Game",true,false,goal.getNextLevel());
	},
	hitEnemy:function(player,enemy){
		if(enemy.body.touching.up){
			enemy.kill();
			player.body.velocity.y = -150;
		}else{

		}
	},
	createEnemies:function(){
		enemies = this.game.add.group();
		enemies.enableBody = true;
		var enemyArr = this.findObjectsByType(
				'enemy',map,'objectsLayer');
		/*enemyArr.forEach(function(data){
			enemies.create(data.x,data.y,'slime');
		},this);*/
		enemyArr.forEach(function(data){
			console.log(data);
			var enemy = new Enemy(this.game,data,map);
			enemies.add(enemy);
		},this);
		
	},
	createPlayer:function(){
		var playerArr = this.findObjectsByType(
					"player",map,'objectsLayer');
		player = new Player(this.game,playerArr);
		this.game.camera.follow(player);
	},
	findObjectsByType: function(targetType, tilemap, layer){
    var result = [];
    
    tilemap.objects[layer].forEach(function(element){
      if(element.properties.type == targetType) {
        element.y -= tilemap.tileHeight;        
        result.push(element);
      }
    }, this);
    
    return result.length == 1 ? result[0] : result;
  }
}