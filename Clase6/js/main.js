window.onload = function(){
	var dimension = getGameLandscapeDimensions(700,350);

	var game = new Phaser.Game(dimension.w,
								dimension.h,
								Phaser.AUTO);
	game.state.add('Preload',Preload);
	game.state.add('Game',Game);
	game.state.start('Preload');
}