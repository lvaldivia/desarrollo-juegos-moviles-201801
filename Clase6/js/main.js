window.onload = function(){
	var dimension = getGameLandscapeDimensions(700,350);

	var game = new Phaser.Game(700,
								350,
								Phaser.AUTO);
	game.state.add('Preload',Preload);
	game.state.add('Game',Game);
	game.state.start('Preload');
}