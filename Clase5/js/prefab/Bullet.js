Bullet = function(game,positionX,positionY){
	Phaser.Sprite.call(this,game,
		positionX,
		positionY,
		'bullet');
	game.physics.arcade.enable(this);
	this.checkWorldBounds = true;
	this.onOutOfBoundsKill = true;
	this.body.velocity.y = -500;
	this.scale.setTo(3);
	game.add.existing(this);
}
//extends
Bullet.prototype = 
	Object.create(Phaser.Sprite.prototype);

Bullet.prototype.constructor = Bullet;