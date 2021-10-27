import { MapContainer, TileLayer, Marker } from "react-leaflet";

function Map(props) {
  return (
    <MapContainer center={[42.5, -73]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />

      <Marker position={[42.5, -73]}></Marker>
    </MapContainer>
  );
}

export default Map;
