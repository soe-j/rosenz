$(function(){
  console.log('hello');

  var body = $('body');
  var canvas = $('#canvas');
  var maxWidth = body.width();
  var maxHeight = body.height();
  canvas.attr({
    width: maxWidth,
    height: maxHeight
  });

  var canvasContext = canvas[0].getContext('2d');

  var centerXY = {x: maxWidth / 2, y: maxHeight / 2}
  var centerLatLng = { lat: 35.7060077, lng: 139.6516053 };
  var range = 10000; // meter
  var zoom = 35000000 / range;
  var url = config.ekispert.url + '/geo/station';

  $.getJSON(url, {
    key: config.ekispert.key,
    geoPoint: centerLatLng.lat + ',' + centerLatLng.lng + ',wgs84,' + range,
    // type: 'train:bus:ship:plane',
    type: 'train',
    gcs: 'wgs84'
  }).then(function (res) {
    res.ResultSet.Point.forEach(function (point) {
      console.log(point.Station.Name);
      var lat = point.GeoPoint.lati_d
      var lng = point.GeoPoint.longi_d

      canvasContext.fillRect(centerXY.x + (lng - centerLatLng.lng) * zoom, centerXY.y + (lat - centerLatLng.lat) * zoom, 2, 2);
    });
  });
});
