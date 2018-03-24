Menu = function(game){}
Menu.prototype = {
	create:function(){
		background = this.game.add.sprite(0,0,'background');
		title = this.game.add.sprite(0,0,'title');
		title.x = this.game.world.centerX;
		title.anchor.setTo(0.5);
		title.y = 180;

		//button = this.game.add.sprite(0,0,'button-start');
		button = this.game.add.button(0,0,'button-start',
					this.goGame,this,1,0,2);
		button.x = this.game.world.centerX;
		button.y = 450;
		button.anchor.setTo(0.5);

		button.inputEnabled = true;
		//button.events.onInputDown.add(this.goGame,this);
	},
	goGame:function(){
		this.game.state.start("Game");
	}
}