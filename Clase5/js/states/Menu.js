Menu = function(){}

Menu.prototype = {
	create:function(){
		background = this.game.add.sprite(
						0,0,'titlepage');
		background.x = this.game.world.centerX;
		background.y = this.game.world.centerY;
		background.anchor.setTo(0.5);

		background.inputEnabled = true;
		background.events.onInputDown.add(
			this.goGame,this);
	},
	goGame:function(){
		this.game.state.start("Game");
	}
}