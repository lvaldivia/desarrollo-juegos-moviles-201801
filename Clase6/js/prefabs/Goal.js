Goal=function(game,goalArr,map){
	this.game = game;
	Phaser.Sprite.call(
				this,game,goalArr.x,goalArr.y,'goal');
	this.anchor.setTo(0.5);
	game.add.existing(this);
    this.game.physics.arcade.enable(this);

    nextLevel = goalArr.properties.nextLevel;
    console.log(goalArr.properties.nextLevel);
}


Goal.prototype=Object.create(Phaser.Sprite.prototype);

Goal.prototype.constructor=Goal;

Goal.prototype.getNextLevel = function(){
	return nextLevel;
}