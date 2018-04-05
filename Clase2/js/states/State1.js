Preload = function(game){}
Preload.prototype = {
	preload:function(){
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		this.game.scale.maxWidth = 680;
		this.game.scale.maxHeight = 960;

		this.game.load.image('background','img/background.png');
		this.game.load.image('title','img/title.png');
		this.game.load.image('monster-cover','img/monster-cover.png');
		
		this.game.load.image('button-pause','img/button-pause.png');
		this.game.load.image('floor','img/floor.png');
		this.game.load.image('gameover','img/gameover.png');
		this.game.load.image('score-bg','img/score-bg.png');

		this.game.load.spritesheet(
				'button-start','img/button-start.png',401,143);
		this.game.load.spritesheet('monster-idle','img/monster-idle.png',
				103,131);
		this.game.load.spritesheet("candy",'img/candy.png',
				82,98);
	},
	create:function(){
		this.game.state.start('Menu');
	}
}


