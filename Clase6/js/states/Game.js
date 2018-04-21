Game = function(game){}
Game.prototype = {
	create:function(){
		this.game.physics.startSystem(
						Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 1000;		
		keys = 
			this.game.input.keyboard.createCursorKeys();
		map = this.game.add.tilemap('demo-level');
		map.addTilesetImage('tiles_spritesheet','gameTiles');

		backgroundLayer = 
			map.createLayer("backgroundLayer");

		collisionLayer = 
			map.createLayer("collisionLayer");

		map.setCollisionBetween(1,156,true,
						'collisionLayer');

		collisionLayer.resizeWorld();
		this.createPlayer();
		this.createEnemies();
	},
	update:function(){
		this.game.physics.arcade.collide(player,collisionLayer);
		this.game.physics.arcade.collide(enemies,collisionLayer);
		player.body.velocity.x = 0;
		if(keys.left.isDown){
			player.body.velocity.x = -100;
			player.scale.setTo(1);
			player.animations.play("walking");
		}
		else if(keys.right.isDown){
			player.body.velocity.x = 100;
			player.scale.setTo(-1,1);
			player.animations.play("walking");
		}else{
			player.animations.stop();
			player.frame = 3;
		}
		if(keys.up.isDown 
				&& (player.body.touching.down 
						|| player.body.blocked.down
				 )){
			player.body.velocity.y = -600;
		}
		
	},
	createEnemies:function(){
		enemies = this.game.add.group();
		enemies.enableBody = true;
		var enemyArr = this.findObjectsByType(
				'enemy',map,'objectsLayer');
		enemyArr.forEach(function(data){
			enemies.create(data.x,data.y,'slime');
		},this);
	},
	createPlayer:function(){
		var playerArr = this.findObjectsByType(
					"player",map,'objectsLayer');
		player = this.game.add.sprite(playerArr.x,
				playerArr.y,'player');
		player.anchor.setTo(0.5);
		player.animations.add("walking",[0,1,2,1],6,true);
		player.frame = 3;
		this.game.physics.arcade.enable(player);
		this.game.camera.follow(player);
	},
	findObjectsByType: function(targetType, tilemap, layer){
    var result = [];
    
    tilemap.objects[layer].forEach(function(element){
      if(element.properties.type == targetType) {
        element.y -= tilemap.tileHeight;        
        result.push(element);
      }
    }, this);
    
    return result.length == 1 ? result[0] : result;
  }
}