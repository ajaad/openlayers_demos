window.onload = init;


function init(){

  // Get the GET-variables from the URL
  var outputarray = getGETvariables();

  var newview = outputarray[0]    // Viewsettings object
  var sirkelLag = outputarray[1]  // Circlelayer object
  var coordSys = outputarray[2]   // Used coordinate system

  // Make a list of maplayers
  var kartlag = [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
    sirkelLag
  ];

  document.getElementById("addwmslayer").onclick = function (nyttkartlag) {
    // Function for adding a WMS layer

    var newlayername = document.getElementById("newlayername").value;
    var neswmsurl = document.getElementById("newurlwms").value;
  
    var nyttlag = new ol.layer.Image({
      source: new ol.source.ImageWMS({
        url: neswmsurl,
        params: {'LAYERS': newlayername},
        ratio: 2,
        serverType: 'mapserver'
      })
    });

    map.addLayer(nyttlag); // Add WMS-layer to map layers
    console.log(newlayername, "was added to the map layers");
  };

  var map = new ol.Map({
    target: 'map',
    renderer: 'canvas',
    layers: kartlag,
    view: newview
  });

  map.on('click',function(e){
    // Function to return coordinates to the console
    // when the map is clicked.
    var viewProjection = 'EPSG:3857';
    console.log(proj4(viewProjection,coordSys,e.coordinate));
  });

  document.getElementById("goToStartPoint").onclick = function (startpointfunc) {
    // Function for going back to original view
    var outputarray = getGETvariables();
    map.setView(outputarray[0]); // Set a new view !
  };

  return map;
}