
Game = function(game){}
Game.prototype = {
	create:function(){

		//text sprite button group
		background = this.game.add.tileSprite(0,0,
						this.game.width,this.game.height,
						'background');
		background.autoScroll(-100,0)
		/*background.width = this.game.width;
		background.height = this.game.height;*/
		/*for(){

		}*/
	}
	

}