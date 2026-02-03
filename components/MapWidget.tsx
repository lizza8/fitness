"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo, useRef, useState } from "react";

export function MapWidget() {
  const [mounted, setMounted] = useState(false);
  const mapRef = useRef<L.Map | null>(null);
  const icon = useMemo(
    () =>
      L.icon({
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41]
      }),
    []
  );

  useEffect(() => {
    setMounted(true);
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="glass-panel h-[240px] rounded-3xl overflow-hidden">
      {mounted ? (
        <MapContainer
          center={[40.7128, -74.006]}
          zoom={12}
          scrollWheelZoom={false}
          className="h-full w-full"
          whenCreated={(mapInstance) => {
            if (mapRef.current && mapRef.current !== mapInstance) {
              mapRef.current.remove();
            }
            mapRef.current = mapInstance;
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[40.7128, -74.006]} icon={icon} />
        </MapContainer>
      ) : (
        <div className="flex h-full items-center justify-center text-xs text-[var(--text-muted)]">
          Loading map…
        </div>
      )}
    </div>
  );
}
