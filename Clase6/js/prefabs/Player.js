Player=function(game,playerArr){
    

	this.game=game;

	Phaser.Sprite.call(this,game,playerArr.x,playerArr.y,'player');
	keys = this.game.input.keyboard.createCursorKeys();

	this.anchor.setTo(0.5);
	game.add.existing(this);
    this.game.physics.arcade.enable(this);
	this.animations.add('walking',[0,1,2,1],13,true);
	this.frame=3;
	this.body.collideWorldBounds = true;
	buttonsKeys = {
		left: false,
		right: false,
		up:false
	};
}

Player.prototype=Object.create(Phaser.Sprite.prototype);

Player.prototype.constructor=Player;

Player.prototype.update=function(){
	player.body.velocity.x=0;
	if((keys.up.isDown || buttonsKeys.up) && (player.body.touching.down|| player.body.blocked.down)){
		player.body.velocity.y=-400;		
	}
	if(keys.right.isDown || buttonsKeys.right){
		player.body.velocity.x=150;
		player.animations.play("walking");
		player.scale.setTo(-1,1);		
	}
	else if(keys.left.isDown || buttonsKeys.left){
		player.body.velocity.x=-150;	
		player.animations.play("walking");	
		player.scale.setTo(1);
	}
	else{
		player.animations.stop();
		player.frame=3;
	}
}

Player.prototype.pressButton = function(button){
	if(buttonsKeys.hasOwnProperty(button)){
		buttonsKeys[button] = true;
	}
}

Player.prototype.releaseButton = function(button){
	if(buttonsKeys.hasOwnProperty(button)){
		buttonsKeys[button] = false;
	}			
}