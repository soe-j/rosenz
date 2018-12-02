$(function(){
  console.log('hello');

  var body = $('body');
  var canvas = $('#canvas');
  canvas.attr({
    width: body.width(),
    height: body.height()
  });
});
