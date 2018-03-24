Game = function(game){}
Game.prototype = {
	create:function(){
		background = this.game.add.sprite(0,0,'background');

		monster = this.game.add.sprite(0,0,'monster-idle');
		monster.animations.add('idle',
				[0,1,2,3,4,5,6,7,8,9,10,11,12],10,true);
		monster.play('idle');
		monster.x = 150;
		monster.y = 150;
		monster.anchor.setTo(0.5);
//		monster.scale.setTo(1);
		keys = this.game.input.keyboard.createCursorKeys();
		elapsed = 0;
	},
	update:function(){
		elapsed += this.game.time.elapsed;
		if(elapsed>=3000){
			elapsed = 0;
			console.log("candy");
			this.generateCandy();
		}
		if(keys.left.isDown){
			monster.scale.setTo(-1,1);
			monster.x-=10;
		}
		if(keys.right.isDown){
			monster.scale.setTo(1);
			monster.x+=10;
		}
	},
	generateCandy:function(){
		var sprite = this.game.add.sprite(0,0,'candy');
		sprite.y = sprite.height;
		sprite.anchor.setTo(0.5);
		var min = sprite.width*0.5;
		var max = this.game.width - min;
		sprite.x = this.game.rnd.realInRange(min,max);
		sprite.frame = this.game.rnd.integerInRange(0,4);
	}

}