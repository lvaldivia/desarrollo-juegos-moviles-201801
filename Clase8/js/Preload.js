Preload = function(){

}
Preload.prototype = {
	preload:function(){
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		this.game.load.image('fb_login','assets/fb_login.png');
	},
	create:function(){
		this.state.start("Menu");
	}
}