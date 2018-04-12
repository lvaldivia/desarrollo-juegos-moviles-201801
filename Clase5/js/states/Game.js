Game = function(game){}
Game.prototype = {
	create:function(){
		this.game.physics.startSystem
						(Phaser.Physics.ARCADE);
		background = this.game.add.tileSprite(
						0,0,
						this.game.width,
						this.game.height,
						'sea');
		background.autoScroll(0,400);
		bullets = this.game.add.group();
		enemies = this.game.add.group();
		player = new Player(this.game,bullets);
		music = this.game.add.sound('fondo');
		music.loop = true;
		music.play();
		generateElapsed = 0;
	},
	update:function(){
		console.log(bullets.children);
		generateElapsed+=this.game.time.elapsed;
		if(generateElapsed>=1500){
			generateElapsed = 0;
			this.createEnemies();
		}
	},
	createEnemies:function(){
		var enemy = new Enemy(this.game);
	}
}