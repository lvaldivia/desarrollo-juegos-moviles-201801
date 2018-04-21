Enemy=function(game,enemyArr,map){
	this.game = game;
	this.map = map;
	Phaser.Sprite.call(
				this,game,enemyArr.x,enemyArr.y,'slime');
	this.anchor.setTo(0.5);
	game.add.existing(this);
    this.game.physics.arcade.enable(this);
    if(enemyArr.properties.hasOwnProperty("velocity")){
    	velocity = enemyArr.properties.velocity;
    	
    }else{
    	velocity = (40 + Math.random()*20) 
    					* (Math.random()< 0.5 ? 1 : -1);	
    }
    
    this.body.velocity.x = -100;
    this.body.bounce.set(1,0);
}

Enemy.prototype=Object.create(Phaser.Sprite.prototype);

Enemy.prototype.constructor=Enemy;

Enemy.prototype.update=function(){
	var direction =1;
	if(this.body.velocity.x>0){
		direction = 1;
		this.scale.setTo(-1,1);
	}else{
		direction = -1;
		this.scale.setTo(1);
	}
	var nextX = this.x + direction * 
		(Math.abs(this.width)/2 + 1);
	var nextY = this.bottom + 1;

	var nextTile = this.map.getTileWorldXY(
		nextX,nextY, this.map.tileWidth,this.map.tileHeight,
		'collisionLayer'
	);
	if(!nextTile && this.body.blocked.down){
		this.body.velocity.x *= -1;
	}

}