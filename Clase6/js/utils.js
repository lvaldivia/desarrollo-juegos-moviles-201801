getGameLandscapeDimensions = function(max_w, max_h) {
  var w = window.innerWidth * window.devicePixelRatio;
  var h = window.innerHeight * window.devicePixelRatio;
  
  var landW = Math.max(w, h);
  var landH = Math.min(w, h);
  
  if(landW > max_w) {
    var ratioW = max_w / landW;
    landW *= ratioW;
    landH *= ratioW;
  }
  
  if(landH > max_h) {
    var ratioH = max_h / landH;
    landW *= ratioH;
    landH *= ratioH;
  }
  
  return {
    w: landW,
    h: landH
  }
}