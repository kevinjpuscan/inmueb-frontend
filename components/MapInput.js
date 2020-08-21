import React, { Fragment, useEffect, useRef } from "react";
import { Map, TileLayer, FeatureGroup, Circle } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import L from "leaflet";

var global = null;

const Component = () => {
  const reactFGref = useRef();
  useEffect(() => {
    let leafletGeoJSON = new L.GeoJSON(getGeoJson());
    let leafletFG = reactFGref.current.leafletElement;

    leafletGeoJSON.eachLayer(layer => {
      leafletFG.addLayer(layer);
    });

    global = reactFGref;
  }, []);

  return (
    <FeatureGroup ref={reactFGref}>
      <EditControl
        position="topright"
        onEdited={e => console.log(global)}
        onCreated={e => console.log(e)}
        draw={{
          rectangle: false,
          polygon: {
            showArea: true,
            showLength: true,
            precision: { km: 2, ha: 2, m: 2, mi: 2, ac: 2, yd: 0, ft: 0, nm: 2 }
          },
          circle: false,
          polyline: false,
          marker: false,
          circlemarker: false
        }}
        edit={{
          remove: false
        }}
      />
      <Circle center={[51.51, -0.06]} radius={200} />
    </FeatureGroup>
  );
};

function MapInput() {
  return (
    <Fragment>
      <Map center={[-7.1570213, -78.5173988]} zoom={15} maxZoom={50}>
        <TileLayer
          url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        <Component />
      </Map>
      <style jsx global>{`
        .leaflet-container {
          width: 100%;
          height: 100%;
        }
        .sr-only {
          display: none;
        }
      `}</style>
    </Fragment>
  );
}

function getGeoJson() {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-78.52379322052003, -7.157528796884206],
              [-78.51297855377199, -7.151099032782723],
              [-78.50787162780763, -7.157401054108489],
              [-78.516583442688, -7.167237143143894],
              [-78.52619647979738, -7.163575247345454]
            ]
          ]
        }
      }
    ]
  };
}

export default MapInput;
