Preload = function(game){}

Preload.prototype = {
	preload:function(){
		this.game.load.image('titlepage', 'assets/titlepage.png');

		//this.game.load.audio('explosion', ['assets/explosion.ogg','assets/explosion.mp3']);
		this.game.load.audio('explosion', ['assets/explosion.ogg']);
		this.game.load.audio('music', ['assets/explosion.ogg']);
    	this.game.load.audio('fire', ['assets/enemy-fire.ogg']);

		this.game.load.image('shoot', 'assets/arrowButton.png');
		this.game.load.image('arrow', 'assets/actionButton.png');
	    this.game.load.image('sea', 'assets/sea.png');
	    this.game.load.image('bullet', 'assets/bullet.png');
	    this.game.load.image('enemyBullet', 'assets/enemy-bullet.png');
	    this.game.load.image('powerup1', 'assets/powerup1.png');
	    this.game.load.spritesheet('greenEnemy', 'assets/enemy.png', 32, 32);
	    this.game.load.spritesheet('whiteEnemy', 'assets/shooting-enemy.png', 32, 32);
	    this.game.load.spritesheet('boss', 'assets/boss.png', 93, 75);
	    this.game.load.spritesheet('explosion', 'assets/explosion.png', 32, 32);
	    this.game.load.spritesheet('player', 'assets/player.png', 64, 64);


	    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
	},
	create:function(){
		this.game.state.start("Menu");
	}

}