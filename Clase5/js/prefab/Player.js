Player = function(game,bullets){
	console.log(game);
	//this=archivo
	//game
	//X
	//Y
	//Key
	this.bullets = bullets;
	Phaser.Sprite.call(this,game,
						game.world.centerX,
						game.world.centerY,
						'player'
					);
	this.game = game;
	this.anchor.setTo(0.5);
	game.add.existing(this);
	game.physics.arcade.enable(this);
	this.body.collideWorldBounds = true;
	keys = game.input.keyboard.createCursorKeys();

	this.animations.add('fly', [ 0, 1, 2 ], 20, true);
	this.play("fly");
	this.scale.setTo(2);

	spacebar = 
		this.game.input.keyboard.addKey(
			Phaser.Keyboard.SPACEBAR);
	shootingTime = 200;
	shootingElapsed = shootingTime;
	sound = game.add.sound('fire');
};

//extends
Player.prototype = 
	Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor = Player;

Player.prototype.shoot = function(){
	sound.play();
	bullet = this.bullets.getFirstDead();
	if(bullet){
		bullet.reset();
	}else{
		bullet = new Bullet(this.game,this.x,this.y - 30);
		this.bullets.add(bullet);	
	}
	
};

Player.prototype.update = function(){
	shootingElapsed+=this.game.time.elapsed;
	if(spacebar.isDown 
				&& shootingElapsed>=shootingTime){
		this.shoot();	
		shootingElapsed = 0;
	}
	
	this.body.velocity.x = 0;
	this.body.velocity.y = 0;
	if(keys.left.isDown){
		this.body.velocity.x = -300;
	}
	if(keys.right.isDown){
		this.body.velocity.x = 300;
	}
	if(keys.up.isDown){
		this.body.velocity.y = -300;
	}
	if(keys.down.isDown){
		this.body.velocity.y = 300;
	}
}