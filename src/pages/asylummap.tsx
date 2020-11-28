import React from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FiArrowLeft, FiPlus, FiArrowRight } from "react-icons/fi";
import Leaflet from "leaflet";
import mapMarkerImg from '../images/pointer.svg'

import "leaflet/dist/leaflet.css";
import "../styles/pages/asylummap.css";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [170, 2]
});

function asylumMap() {
  return (
    <div id="map-pg">
      <div className="choose">
        <p>Escolha um asilo!</p>
      </div>

      <Link to="/" id="button" className="back">
        <FiArrowLeft size={32} color="var(--indian-red)" />
      </Link>

      <MapContainer
        center={[-14.8612275, -40.8445261]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker 
        icon={mapIcon} 
        position={[-14.8612275, -40.8445261]}
        >

          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Senhores Feudais

            <Link to="">
              <FiArrowRight size={20} color="var(--indian-red)" />
            </Link>

          </Popup>

        </Marker>
      </MapContainer>

      <Link to="/create-asylum" id="button" className="create-asylum">
        <FiPlus size={32} color="var(--indian-red)" />
      </Link>
    </div>
  );
}

export default asylumMap;
