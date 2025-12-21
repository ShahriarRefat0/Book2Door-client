import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const Coverage = () => {
const [serviceCenters, setServiceCenter] =useState([])
  const position = [23.6850, 90.3563];
  const mapRef = useRef(null)


  useEffect(() => {
    fetch('/areas.json')
      .then((res) => res.json())
      .then((data) => setServiceCenter(data))
    .catch((err)=>console.log(err))
  },[])
  const handleSearch = (e) => {
    e.preventDefault()
    const location = e.target.location.value;
    const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
    if (district) {
      const coord = [district.latitude, district.longitude]
      //console.log("district", district, "coord", coord);
//goto the location
      mapRef.current.flyTo(coord, 14)
    }

    
}
  // console.log(serviceCenters)
  return (
    <div className="bg-white dark:bg-gray-900  p-15">
      <div className="max-w-11/12 mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A38] dark:text-gray-200 text-center">
          We are available in 64 districts
        </h2>

        {/* Search Bar */}
        <div className="mt-6 flex justify-center">
          <form
            onSubmit={handleSearch}
            className="w-full md:w-[450px] relative flex item-center"
          >
            <label className="input flex items-center gap-3 bg-white shadow-sm px-4 py-3 rounded-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                name="location"
                type="search"
                required
                placeholder="Search here"
                className="w-full outline-none"
              />
            </label>

            <button
              type="submit"
              className="absolute right-1  bg-primary px-6 py-2 rounded-full font-semibold  cursor-pointer hover:bg-white border hover:text-black text-white border-white hover:border-primary"
            >
              Search
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-300 my-10"></div>

        {/* Sub heading */}
        <h3 className="text-2xl font-bold text-[#0A2A38] dark:text-gray-200 mb-6">
          We deliver almost all over Bangladesh
        </h3>

        {/* Map */}
        <div className="w-full h-[600px] overflow-hidden rounded-xl shadow">
          <MapContainer
            ref={mapRef}
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className="h-[600px]"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap Contributors"
            />

            {serviceCenters.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong>{center.district}</strong>
                  <br />
                  Service Area: {center.covered_area.join(", ")}.
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;