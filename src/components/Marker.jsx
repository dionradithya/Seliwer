import { useEffect } from "react";
import L from "leaflet";
import customIconUrl from "../assets/img/Marker.svg";

const Marker = ({ map, position, name, address }) => {
  useEffect(() => {
    if (!map) return;

    // HTML custom marker (pin + teks di kanan)
    const html = `
    <div style="
        display:flex;
        align-items:center;
        gap:6px;
        cursor:pointer;
        height:36px;
    ">
        <img src="${customIconUrl}" style="width:36px;height:36px;display:block;" />
        <div style="
        color:#13A549;
        font-size:14px;
        font-weight:500;
        line-height:36px;
        height:36px;
        display:flex;
        align-items:center;
        white-space:nowrap;
        user-select:none;
        ">
        ${name}
        </div>
    </div>
    `;


    // Buat DivIcon
    const icon = L.divIcon({
      html,
      className: "",
      iconAnchor: [20, 40],
    });

    // Tambahkan marker ke peta
    const marker = L.marker(position, { icon }).addTo(map);

    // Tambahkan popup untuk detail alamat
    marker.bindPopup(`
      <div style="
        color:black;
        padding:10px 14px;
        border-radius:8px;
        font-size:14px;
        font-weight:500;
        line-height:1.4;
      ">
        <div><b>${name}</b></div>
        <div>${address}</div>
      </div>
    `);

    return () => marker.remove();
  }, [map, position, name, address]);

  return null;
};

export default Marker;
