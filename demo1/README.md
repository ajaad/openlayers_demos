# Online map demo

This is a demostration of the OpenLayers and proj4 javascript libaries.

---

To show the map, please visit: <https://ajaad.github.io/openlayers_demos/demo1>

---

### Variables for the mapview

To share a mapview, a simle query can be written after the URL.

The following variables can be used:

<ul>
  <li>title (custom title above the map)</li>
  <li>EPSG (EPSG coordinate id values)</li>
    <ul>
      <li>epsg=25831 (UTM zone 31)</li>
      <li>epsg=25832 (UTM zone 32)</li>
      <li>epsg=25833 (UTM zone 33)</li>
    </ul>
  <li>lat (Latitude)</li> 
  <li>lon (Longitude)</li> 
  <li>y (y-axis coordinate)</li>
  <li>x (x-axis coordinate)</li>
  <li>zoom (start zoom level) </li>
  <li>sirkel (red flashy circle with a given diameter)</li>
</ul>

Lets say you want to show a friend where the lake "Maridalsvannet" is.
By including the UTM zone 32 coordinates (x and y) and the coordinate EPSG code,
the mapview will be centerd above that location.
A red flashy circle can be drawn around this centercoordinate, by using the "sirkel" variable. The "title" variable can be used to set a custom map title.
A high number in the "zoom" variable will result in a zoomed map.

<https://ajaad.github.io/openlayers_demos/demo1?EPSG=25832&x=599390&y=6651070&title=Maridalsvannet&zoom=13&sirkel=4000>

A composed URL is easy to share on normal messaging services.

These variables only determine the opening view, and does not restrict you from navigating in the map by dragging the mapview.
To get back to the original view you can simply refresh the webpage.
However, this will erase all the added WMS-layers.
To go back to the original view without erasing the added WMS-layers, click the "Back to start"-button in the lower left corner.

---

### Additional features

Every time you click the map, coordinates will appear in the console.
They will be projected in accordance to the given EPSG-code.
If you do not give an EPSG-code, it will default to geopolitical lat and lon coordinates.


---

### WMS layer examples

To add custom WMS-layers, paste the WMS-url into the "WMS URL" field.
Queries must be removed (everything behind the "?" marker).
Also the name of the layer must be added to the "WMS layer" field.

These are some examples:

<ul>
<li> https://wms.nibio.no/cgi-bin/ar50
  <ul>
    <li> ar50 </li>
    <li> Treslag </li>
    <li> Arealtyper </li>
    <li> Skogbonitet </li>
    <li> Myr </li>
    <li> Dyrkbar_jord </li>
    <li> Jordbruk </li> 
  </ul>
</li>
<li> http://openwms.statkart.no/skwms1/wms.toporaster4
  <ul>
    <li> toporaster </li>
  </ul>
</li>
<li> https://wms.geonorge.no/skwms1/wms.nib
  <ul>
    <li> ortofoto </li>
  </ul>
</li>
<li> https://kart.miljodirektoratet.no/arcgis/services/vern/MapServer/WmsServer
  <ul>
    <li> naturvern_omrade</li>
    <li> naturvern_klasser_omrade</li>
    <li> foreslatt_naturvern_omrade</li>
  </li>
</li>
</ul>


Layer names can be found by using the REQUEST=GetCapabilities query.
For example, visit the link <https://wms.nibio.no/cgi-bin/ar50?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities> and look for the name tag under the layers tag.
It is also possible to browse the layers in QGIS.

---


18th of may, 2021

Anders Johan Konnestad