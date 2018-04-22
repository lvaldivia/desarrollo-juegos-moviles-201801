Game = function(game){}
Game.prototype = {
	create:function(){
		background = this.game.add.sprite(0,0,'background');
		bullets = this.game.add.group();
		plants = this.game.add.group();
		suns = this.game.add.group();
		blocks = this.game.add.group();
		buttons = this.game.add.group();
		this.createBlocks();
		this.createButtons();
	},
	createButtons:function(){
		var data = JSON.parse(
					this.game.cache.getText('buttonData')
					);
		console.log(data);
		data.forEach(function(element,index){
			position = {x:80+index*40,
					 y:this.game.height -35};
					 console.log(element);
			var button = new Button(
					this.game,
					element,
					position
			);
			button.getSendPlant().add(this.createPlant,this);
			buttons.add(button);
		},this)
	},
	createPlant:function(plantData){
		console.log(plantData);
	},

	createBlocks:function() {
		rectangle = this.game.add.bitmapData(40,50);
		rectangle.ctx.fillStyle = '#000';
		rectangle.ctx.fillRect(0,0,40,50);
		var posX = 0,
			black = false;
			posY = 0;
		for(var i=0;i<10;i++){
			for(var j=0;j<5;j++){
				posX = 64 + i * 40;
				posY = 24 + j* 50;
				block = this.game.add.sprite(posX,posY,rectangle);
				blocks.add(block);
				block.alpha = !black ? 0.1 : 0.2;
				black = !black;
			}
		}

	}
}