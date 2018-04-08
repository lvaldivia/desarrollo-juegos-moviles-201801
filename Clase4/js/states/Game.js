Game = function(game){}
Game.prototype = {
	create:function(){
		gameData = 
			JSON.parse(this.game.cache.getText('level'));	

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 1000;
		platforms = this.game.add.group();
		platforms.enableBody = true;
		gameData.platformData.forEach(function(element){
			/*var platform = 
			this.game.add.sprite(element.x,element.y,'platform');
			platforms.add(platform);
			this.game.physics.arcade.enable(platform);
			*/
			platforms.create(element.x,element.y,'platform');
		},this);
		platforms.setAll("body.allowGravity",false);
		platforms.setAll("body.immovable",true);
		player = this.game.add.sprite(gameData.playerStart.x,
									gameData.playerStart.y,
									'player');
		player.anchor.setTo(0.5);
		this.game.physics.arcade.enable(player);
		player.body.collideWorldBounds = true;
		floor = this.game.add.sprite(0,0,'ground');
		floor.y = this.game.height - floor.height;
		this.game.physics.arcade.enable(floor);
		floor.body.allowGravity = false;
		floor.body.immovable = true;
		player.frame = 3;
		player.animations.add('walking',[0,1,2,1],3,true);
		keys = this.game.input.keyboard.createCursorKeys();
		fires = this.game.add.group();
		fires.enableBody = true;
		gameData.fireData.forEach(function(element){
			var fire = this.game.add.sprite(element.x,element.y,
				'fire');
			fire.animations.add('play',[0,1],6,true);
			fire.animations.play('play');
			fires.add(fire);
		},this);
		barrels = this.game.add.group();
		barrels.enableBody  =true;
		barrelsFreq = gameData.barrelFrequency * 1000;
		barrelsVel = gameData.barrelSpeed;
		barrelsTime = 0;
		buttonKeys = {
			leftDown : false,
			rightDown : false,
			upDown: false
		};
		this.createControls();
	},
	createControls:function(){
		leftButton = this.game.add.sprite(0,0,'arrowButton');
		leftButton.y = this.game.height - leftButton.height;
		leftButton.inputEnabled = true;

		rightButton = this.game.add.sprite(leftButton.width + 10
		                    ,0,'arrowButton');                              
		rightButton.y = this.game.height - leftButton.height;
		rightButton.inputEnabled = true;

		actionButton = this.game.add.sprite(0,0,'actionButton');
		actionButton.y = this.game.height - actionButton.height;
		actionButton.x = this.game.width - actionButton.width;
		actionButton.inputEnabled = true;
		leftButton.events.onInputDown.add(function(){
			buttonKeys.leftDown = true;
		},this);
		rightButton.events.onInputDown.add(function(){
			buttonKeys.rightDown = true;
		},this);
		actionButton.events.onInputDown.add(function(){
			buttonKeys.upDown = true;
		},this);

		leftButton.events.onInputUp.add(function(){
			buttonKeys.leftDown = false;
		},this);
		rightButton.events.onInputUp.add(function(){
			buttonKeys.rightDown = false;
		},this);
		actionButton.events.onInputUp.add(function(){
			buttonKeys.upDown = false;
		},this);
	},
	checkCollision:function(player,fire){
		//player.kill();
	},
	generateBarril:function(){
		var barrel = barrels.getFirstDead();
		if(!barrel){
			barrel = this.game.add.sprite(0,0,'barrel');
			barrels.add(barrel);
		}else{
			barrel.reset();
		}
		barrel.body.velocity.x = barrelsVel;
		barrel.body.collideWorldBounds = true;
		barrel.body.bounce.setTo(1,0);
	},
	update:function(){
		barrelsTime += this.game.time.elapsed;
		if(barrelsTime>=barrelsFreq){
			barrelsTime = 0;
			this.generateBarril();
		}
		this.game.physics.arcade.collide(platforms,fires);
		this.game.physics.arcade.collide(platforms,barrels);

		this.game.physics.arcade.overlap(player,fires,
							null,this.checkCollision,this);
		this.game.physics.arcade.collide(player,floor);
		this.game.physics.arcade.collide(player,platforms);
		player.body.velocity.x=0;
		if( (keys.up.isDown || buttonKeys.upDown) && player.body.touching.down){
			player.body.velocity.y = -700;
		}
		if(keys.left.isDown|| buttonKeys.leftDown){
			player.body.velocity.x = -100;
			player.animations.play("walking");
			player.scale.setTo(1);
		}else if(keys.right.isDown || buttonKeys.rightDown){
			player.body.velocity.x = 100;
			player.animations.play("walking");
			player.scale.setTo(-1,1);
		}else{
			player.frame = 3;
		}

		barrels.forEachAlive(function(element){
            if(element.x< 10 && element.y > 600){
              element.kill();
            }
    	},this);
	}
}