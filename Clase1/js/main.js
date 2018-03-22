window.onload = function(){
	var game = 
		new Phaser.Game(360,640,Phaser.AUTO,'',
			{preload:preload,
			create:create,
			update:update
			}
			);
	var pet, apple, candy, rubber_duck, rotate,
		item_clicked = "", 
		clone,
		elements = [];

	function preload(){
		game.load.image('backyard',
						'img/backyard.png');
		game.load.image('apple',
						'img/apple.png');
		game.load.image('candy','img/candy.png');
		game.load.image('rotate','img/rotate.png');
		game.load.image('rubber_duck','img/rubber_duck.png');

		game.load.spritesheet("pet","img/pet.png",
				97,83,5,1,1);
	}

	function create(){
		backyard = game.add.sprite(0,0,'backyard');
		apple = game.add.sprite(30,450,'apple');
		candy = game.add.sprite(130,450,'candy');
		rubber_duck = game.add.sprite(200,450,'rubber_duck');
		rotate = game.add.sprite(300,450,'rotate');

		pet = game.add.sprite(0,0,'pet');
		pet.animations.add("happy",[1,2,3,2,1]);
		//pet.animations.play("happy",6,true);
		pet.anchor.setTo(0.5);
		pet.x = game.world.centerX;
		pet.y = 150;

		apple.inputEnabled = true;
		apple.events.onInputDown.add(clickObject);

		candy.inputEnabled = true;
		candy.events.onInputDown.add(clickObject);

		rubber_duck.inputEnabled = true;
		rubber_duck.events.onInputDown.add(clickObject);

		rotate.inputEnabled = true;
		rotate.events.onInputDown.add(clickObject);

		elements.push(candy);
		elements.push(rubber_duck);
		elements.push(rotate);
		elements.push(apple);

		backyard.inputEnabled = true;
		backyard.events.onInputDown.add(clickBackyard);
	}

	function clickBackyard(sprite,event){
		if(item_clicked != ""){
			clone = game.add.sprite(event.position.x,
										event.position.y,
										item_clicked);
			clone.anchor.setTo(0.5);
			var tween = game.add.tween(pet).
							to({x:clone.x,y:clone.y});
			tween.start();				

			pet.bringToTop();
		}
	}

	function clickObject(sprite){
		item_clicked = sprite.key;
		/*elements.forEach(function(element,index){

		});*/
		elements.forEach(changeAlpha);
		sprite.alpha = 0.5;
	}

	function changeAlpha(element,index){
		//element.alpha = element.alpha != 1 ? 1 : element.alpha;
		if(element.alpha != 1){
			element.alpha = 1;
		}
	}

	function update(){
		//console.log("hola");
	}


}