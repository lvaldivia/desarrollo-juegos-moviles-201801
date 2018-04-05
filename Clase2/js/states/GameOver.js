GameOver = function(){}

GameOver.prototype = {
	init:function(_score){
		score = _score;
	},
	create:function(){
		background = this.game.add.sprite(0,0,'background');
		cover = this.game.add.sprite(0,0,'gameover');
		cover.anchor.setTo(0.5);
		cover.x = this.game.world.centerX;
		cover.y = this.game.world.centerY;
		cover.inputEnabled = true;
		cover.events.onInputDown.add(this.goMenu,this);

		text = this.game.add.text(0,0,'Your Score : '+score);
		text.anchor.setTo(0.5);
		text.x = this.game.world.centerX;
		text.y = this.game.world.centerY + cover.height;
		text.fill = "#FFFFFF";
		text.fontSize = 30;
	},
	goMenu:function(){
		this.game.state.start('Menu');
	}

}