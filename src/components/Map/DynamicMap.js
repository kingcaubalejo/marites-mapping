import { useEffect, useState } from "react";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

import styles from "./Map.module.scss";

const { MapContainer } = ReactLeaflet;

const UseMap = () => {
  const [position, setPosition] = useState(null);
  const map = ReactLeaflet.useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return null;
};

const Map = ({ children, className, width, height, ...rest }) => {
  let mapClassName = styles.map;
  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
        iconUrl: "leaflet/images/marker-icon.png",
        shadowUrl: "leaflet/images/marker-shadow.png",
      });
    })();
  }, []);

  return (
    <MapContainer className={mapClassName} {...rest}>
      {children(ReactLeaflet, Leaflet)}
      <UseMap />
    </MapContainer>
  );
};

const handleOnLocationFound = (event) => {
  const latlng = event.latlng;
  const radius = event.accuracy;

  console.log("Latlang: " + latlng);
  console.log("Radius: " + radius);
};

const handleOnLocationError = () => {
  alert(`Unable to determine location: ${error.message}`);
};

export default Map;
