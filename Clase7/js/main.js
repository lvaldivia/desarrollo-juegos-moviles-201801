window.onload = function(){

	var game = new Phaser.Game(480,320,
								Phaser.AUTO);
	game.state.add('Preload',Preload);
	game.state.add('Game',Game);
	game.state.start('Preload');
}