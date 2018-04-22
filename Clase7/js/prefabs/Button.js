Button=function(game,data,position){
	this.game=game;
	this.plantData = data;
	Phaser.Sprite.call(this,game,
						position.x,position.y,
						data.btnAsset);
	this.inputEnabled = true;
	this.events.onInputDown.add(this.clicked,this);
	sendPlant = new Phaser.Signal();
}

Button.prototype=Object.create(
			Phaser.Sprite.prototype);

Button.prototype.constructor=Button;

Button.prototype.clicked = function(){
		sendPlant.dispatch(this.plantData);
};


Button.prototype.getSendPlant = function(){
	return sendPlant;
};
