

game = new Phaser.Game(480, 320, Phaser.AUTO);

game.state.add('Boot', BootState); 
game.state.add('Preload', PreloadState); 
game.state.add('Game', GameState);

game.state.start('Boot'); 
