var menuState = {

	create: function(){

		var nameLabel = game.add.text(80, 150, 'First test game',
			{font: '50px Arial', fill: '#ffffff' });

		var startLabel = game.add.text(80, game.world.height-80,
			'press the an open level to start!',
			{font: '25px Arial', fill: '#ffffff'});

		//var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

		//wkey.onDown.addOnce(this.start, this);
		var button;
		button = game.add.button(game.world.centerX - 95, 400, 'button');

	    // button.onInputOver.add(over, this);
	    // button.onInputOut.add(out, this);
	},

	start: function(){
		game.state.start('play');
	}

	// function over() {
 //    	console.log('button over');
	// }

	// function out() {
 //    	console.log('button out');
	// }
}