"use client";

import dynamic from "next/dynamic";

const MaintenanceCalendar = dynamic(
  () => import("./MaintenanceCalendar").then((mod) => mod.MaintenanceCalendar),
  { ssr: false }
);

const MapWidget = dynamic(() => import("./MapWidget").then((mod) => mod.MapWidget), {
  ssr: false
});

export function ClientOnlyCalendar() {
  return <MaintenanceCalendar />;
}

export function ClientOnlyMap() {
  return <MapWidget />;
}
