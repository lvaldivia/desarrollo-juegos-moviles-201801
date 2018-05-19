<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript" src="js/lib/phaser.min.js"></script>
	<script type="text/javascript" src="js/Preload.js?v=<?php echo date("YmdHis"); ?>"></script>
	<script type="text/javascript" src="js/Menu.js?v=<?php echo date("YmdHis"); ?>"></script>
	<script type="text/javascript" src="js/Game.js?v=<?php echo date("YmdHis"); ?>"></script>
	<script type="text/javascript" src="js/main.js?v=<?php echo date("YmdHis"); ?>"></script>
	<script>
	  window.fbAsyncInit = function() {
	    FB.init({
	      appId      : '1930035547017264',
	      xfbml      : true,
	      version    : 'v3.0'
	    });
	    //FB.AppEvents.logPageView();
	  };

	  (function(d, s, id){
	     var js, fjs = d.getElementsByTagName(s)[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement(s); js.id = id;
	     js.src = "https://connect.facebook.net/en_US/sdk.js";
	     fjs.parentNode.insertBefore(js, fjs);
	   }(document, 'script', 'facebook-jssdk'));
	</script>
</body>
</html>