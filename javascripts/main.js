$(function(){
  console.log('hello');

  var body = $('body');
  var canvas = $('#canvas');
  canvas.attr({
    width: body.width(),
    height: body.height()
  });

  var canvasContext = canvas[0].getContext('2d');
  canvasContext.fillRect(100, 100, 5, 5);
});
