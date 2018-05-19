Menu = function(){

}
Menu.prototype = {
	create:function(){
		button = this.game.add.sprite(0,0,'fb_login');
		button.inputEnabled = true;
		button.events.onInputDown.add(this.login,this);
	},
	login:function(){
		FB.login(function(response) {
			console.log(repose);
		  if (response.status === 'connected') {
		  	FB.api("/me",
		  		{fields:'first_name','last_name','email','id'},function(response){
		  			console.log(response);
		  		});
		  } else {

		  }
		},{scope:'email,public_profile'});
	}
}