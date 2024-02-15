import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GymLocator = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyGyms, setNearbyGyms] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, []);

  useEffect(() => {
    const sampleGymData = [
      { id: 1, name: "Gym A", location: { lat: 51.509865, lng: -0.118092 } },
      { id: 2, name: "Gym B", location: { lat: 51.512344, lng: -0.124981 } },
      { id: 3, name: "Gym C", location: { lat: 51.5037, lng: 0.1117 } },
      { id: 4, name: "Gym D", location: { lat: 51.5176, lng: 0.1145 } },
      { id: 5, name: "Gym E", location: { lat: 51.4975, lng: 0.1357 } },
      { id: 6, name: "Gym F", location: { lat: 51.4991, lng: 0.1644 } },
    ];

    setNearbyGyms(sampleGymData);
  }, [userLocation]);

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={userLocation || [51.509865, -0.118092]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {userLocation && (
          <Marker position={userLocation} title="Your Location">
            <Popup>
              <div>
                <h5>Your Location</h5>
              </div>
            </Popup>
          </Marker>
        )}

        {nearbyGyms.map((gym) => (
          <Marker key={gym.id} position={gym.location}>
            <Popup>
              <div>
                <h3>{gym.name}</h3>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default GymLocator;
