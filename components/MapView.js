import React from "react";
import { Map, TileLayer, Polygon } from "react-leaflet";

function MapView() {
  return (
    <div>
      <Map
        center={[-7.1570213, -78.5173988]}
        zoom={18}
        maxZoom={50}
        style={{ height: "250px" }}
        zoomControl={false}
      >
        <TileLayer
          url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        <Polygon
          positions={[
            [
              [-7.1573223, -78.5176998],
              [-7.1573223, -78.5173987],
              [-7.1570212, -78.5173987],
              [-7.1570212, -78.5176998]
            ]
          ]}
          color="var(--primary)"
        ></Polygon>
      </Map>
    </div>
  );
}

export default MapView;
