
Game = function(game){}
Game.prototype = {
	create:function(){
		gravity = 500;
		flapJump = 400;
		background = this.game.add.tileSprite(0,0,
						this.game.width,this.game.height,
						'background');
		background.autoScroll(-100,0);
		player = this.game.add.sprite(0,0,'player');
		player.anchor.setTo(0.5);
		player.x = this.game.world.centerX;
		player.y = this.game.world.centerY;

		player.animations.add("fly",[0,1,2],10,true);

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.enable(player);
		this.game.physics.arcade.gravity.y = gravity;
		//player.body.allowGravity = false;

		spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spacebar.onDown.add(this.flap,this);
		this.game.input.onDown.add(this.flap,this);
		spawnWall = 0;
		walls = this.game.add.group();
		score = 0;
		scoreText = this.game.add.text(0,0,'Score :'+score);
		scoreText.fill = "#FFFFFF";
		gameOverText  = this.game.add.text(0,0,'Game Over');
		gameOverText.fill = "#FFFFFF";
		gameOverText.anchor.setTo(0.5);
		gameOverText.x = this.game.world.centerX;
		gameOverText.y = this.game.world.centerY;
		gameOverText.visible = false;
		gameOverText.inputEnabled = true;
		gameOverText.events.onInputDown.add(
				this.restartGame,this);
		gameOverText.fontSize = 60;

		maxScore = this.game.add.text(0,0,'Max Score');
		maxScore.x = this.game.width - 150;
		maxScore.fill = "#FFFFFF";
		maxScore.visible = false;
		if(localStorage.score != null){
			maxScore.visible = true;
			maxScore.text = "Max Score "+localStorage.score;
		}
	},
	restartGame:function(){
		this.game.state.start("Game");
	},
	update:function(){
		if(!player.alive){
			walls.callAll("kill");
			if(!gameOverText.visible){
				gameOverText.visible = true;
				if(score>0){
					localStorage.score = score;	
				}
			}
		}else{
			spawnWall+=this.game.time.elapsed;
			if(spawnWall>=3000){
				spawnWall = 0;
				this.createWall();
			}
			if(player.body.velocity.y > -20){
				player.animations.frame = 3;
			}else{
				player.animations.play("fly");
			}
			walls.forEachAlive(this.killOut,this);
			this.game.physics.arcade.collide(player,walls,
				this.killPlayer,
				null,this);
		}
		
	},
	killPlayer:function(player,wall){
		player.kill();
	},
	killOut:function(wall){
		if(wall.x < -wall.width){
			wall.kill();
		}else if(player.x > wall.x  && !wall.scored){
			score+=0.5;
			wall.scored = true;
			scoreText.text = "Score : "+score;
		}
	},
	render:function(){
		walls.forEachAlive(function(wall){
			this.game.debug.body(wall)
		},this);
	},

	createWall:function(){
		var wallY = this.rnd.integerInRange
            (this.game.height *0.3, this.game.height *0.7);
       	this.generateWall(wallY);
        this.generateWall(wallY, true);
	},
	generateWall:function(wallY,flipped){
        var posY ;
        var opening  = 400;
        if(flipped){
            wallY = wallY - (opening/2);
        }else{
            wallY = wallY + (opening/2);
        }

        var wall = walls.getFirstDead();
        if(wall){
        	wall.reset(this.game.width,wallY);
        }else{
        	wall = this.game.add.sprite(this.game.width,
                  wallY,'wall');
        }
        wall.scored = false;
        //wall.hola = "";
        //wall.a = 1;
        this.game.physics.arcade.enable(wall);	
        wall.body.velocity.x = -200;
        if(flipped){
            wall.scale.y = -1;
        }else{
          wall.scale.y = 1;
        }
        wall.body.immovable = true;
        wall.body.allowGravity = false;
        walls.add(wall);
    },
	flap:function(){
		player.body.velocity.y = -flapJump;
	}
	

}