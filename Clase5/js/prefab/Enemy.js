Enemy = function(game){
	Phaser.Sprite.call(this,game,
		0,
		0,
		'greenEnemy');
	this.anchor.setTo(0.5);
	this.x = game.rnd.realInRange
				(this.width * 0.5,
				 this.game.width - (this.width*0.5) );
	this.y = -this.height;
	game.physics.arcade.enable(this);
	this.body.velocity.y = 500;
	this.scale.setTo(3);
	game.add.existing(this);
}
//extends
Enemy.prototype = 
	Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(){
	if(this.y >= 
			this.game.height + (this.height*0.5)){
		this.kill();
	}
};

Enemy.prototype.reset = function(){
	//super.metodo();
	Phaser.Sprite.prototype.reset(this);
	this.x = game.rnd.realInRange
				(this.width * 0.5,
				 this.game.width - (this.width*0.5) );
	this.y = -this.height;
}