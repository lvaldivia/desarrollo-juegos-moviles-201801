window.onload = function(){
	var game = new Phaser.Game(640,960,Phaser.AUTO);
	game.state.add('Preload',Preload);
	game.state.add('Menu',Menu);
	game.state.add('Game',Game);
	game.state.start('Preload');
}