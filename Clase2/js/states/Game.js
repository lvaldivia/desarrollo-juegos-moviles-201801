
Game = function(game){}
Game.prototype = {
	create:function(){
		background = this.game.add.sprite(0,0,'background');
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 800;

		monster = this.game.add.sprite(0,0,'monster-idle');
		monster.animations.add('idle',
				[0,1,2,3,4,5,6,7,8,9,10,11,12],10,true);
		monster.play('idle');
		monster.x = 150;
		monster.y = 150;
		monster.anchor.setTo(0.5);
		this.game.physics.arcade.enable(monster);
		monster.body.collideWorldBounds = true;
		keys = this.game.input.keyboard.createCursorKeys();
		elapsed = 0;
		floor = this.game.add.sprite(0,0,'floor');
		floor.y = this.game.height - (floor.height);
		this.game.physics.arcade.enable(floor);
		floor.body.allowGravity = false;
		floor.body.immovable = true;
		floor.body.setSize(floor.width,floor.height,0,80);
		candies = this.game.add.group();

		score_bg = this.game.add.sprite(0,0,'score-bg');
		text = this.game.add.text(120,-10,'0');
		text.fill = "#FFFFFF";
		text.fontSize = 80;
		score = 0;
		text.text = score;
		candies_to_lose = 3;
	},
	render:function(){
        //this.game.debug.body(floor);
        //this.game.debug.body(monster);
	},
	update:function(){
		elapsed += this.game.time.elapsed;
		monster.body.velocity.x = 0;
		this.game.physics.arcade.collide(monster,floor);

		this.game.physics.arcade.overlap(monster,candies,
							this.eatCandy, null,this);	
		console.log("update");
		if(elapsed>=1000){
			elapsed = 0;
			this.generateCandy();
		}
		if(keys.left.isDown){
			monster.scale.setTo(-1,1);
			//monster.x-=10;
			monster.body.velocity.x = -250;
		}
		if(keys.right.isDown){
			monster.scale.setTo(1);
			//monster.x+=10;
			monster.body.velocity.x = 250;
		}

		/*if(monster.x<monster.width*0.5){
			monster.x = monster.width*0.5;
		}
		if(monster.x>this.game.width - (monster.width*0.5)){
			monster.x = this.game.width - (monster.width*0.5);
		}*/

	},
	eatCandy:function(sprite1,sprite2){
		sprite2.kill();
		score++;
		text.text = score;
	},
	generateCandy:function(){
		var sprite = candies.getFirstDead();
		if(sprite){
			sprite.reset();
			console.log("utilice un muerto");
		}else{
			sprite = this.game.add.sprite(0,0,'candy');
			candies.add(sprite);
			this.game.physics.arcade.enable(sprite);
			console.log("cree uno nuevo");
		}
		sprite.y = sprite.height;
		sprite.anchor.setTo(0.5);
		var min = sprite.width*0.5;
		var max = this.game.width - min;
		sprite.x = this.game.rnd.realInRange(min,max);
		sprite.frame = this.game.rnd.integerInRange(0,4);
		sprite.checkWorldBounds = true;
		sprite.outOfBoundsKill = true;
		sprite.events.onOutOfBounds.add(function(){
			candies_to_lose--;
			if(candies_to_lose == 0){
				this.game.state.start("GameOver",true,false,score);
			}
		},this);
		
	}

}