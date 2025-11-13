import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Marker from "../components/Marker";

const Maps = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapInstance = L.map("map").setView([-7.949574974185538, 112.61776756191267], 15);

    // Peta clean tanpa ikon tambahan
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(mapInstance);

    setMap(mapInstance);
    return () => mapInstance.remove();
  }, []);

  const umkmList = [
    {
      name: "Warung Surga Bahari",
      address: "Jl. Puncak Borobudur, Tunggulwulung, Kec. Lowokwaru, Kota Malang, Jawa Timur",
      position: [-7.936459153669958, 112.62537787782333],
    },
    {
      name: "Warung Pojok",
      address: "Jl. Kawi No. 5, Malang",
      position: [-7.953170092210646, 112.61845176820562],
    },
  ];

  return (
    <div id="map" style={{ height: "calc(100vh - 70px)", width: "100%" }}>
      {map &&
        umkmList.map((u, i) => (
          <Marker
            key={i}
            map={map}
            position={u.position}
            name={u.name}
            address={u.address}
          />
        ))}
    </div>
  );
};

export default Maps;
