// src/MapComponent.tsx
"use client"
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your Google Maps API Key

// Sample camping service locations
const campingServices = [
  {
    id: 1,
    name: 'Mountain View Campsite',
    position: { lat: 34.0522, lng: -118.2437 }, // Latitude and Longitude of the location
  },
  {
    id: 2,
    name: 'Forest Edge Camping',
    position: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: 3,
    name: 'River Valley Campsite',
    position: { lat: 40.7128, lng: -74.006 },
  },
];

// Define container styles for the map
const containerStyle = {
  width: '100%',
  height: '500px',
};

// Default map center (could be the user's current location or a default view)
const center = {
  lat: 34.0522, // Latitude of the default location
  lng: -118.2437, // Longitude of the default location
};

const services: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10} // Default zoom level
      >
        {/* Loop through camping services and place markers */}
        {campingServices.map((service) => (
          <Marker
            key={service.id}
            position={service.position}
            label={service.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default services;
