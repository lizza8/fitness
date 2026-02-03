"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Sparkles } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useState } from "react";
import * as THREE from "three";

type Property3DProps = {
  compact?: boolean;
  onClick?: () => void;
  maintenanceRisk?: boolean;
  theme?: "light" | "dark";
};

function LowPolyHouse({
  maintenanceRisk
}: {
  maintenanceRisk?: boolean;
}) {
  const roofColor = maintenanceRisk ? "#ff4d4f" : "#6f42c1";
  const emissive = maintenanceRisk ? new THREE.Color("#ff4d4f") : new THREE.Color("#6f42c1");
  return (
    <group>
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[1.4, 0.8, 1.2]} />
        <meshStandardMaterial color="#e8f2ff" roughness={0.5} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.4, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[1.1, 0.7, 4]} />
        <meshStandardMaterial
          color={roofColor}
          emissive={emissive}
          emissiveIntensity={maintenanceRisk ? 0.6 : 0.2}
        />
      </mesh>
      <mesh position={[-0.3, -0.1, 0.61]}>
        <boxGeometry args={[0.3, 0.4, 0.05]} />
        <meshStandardMaterial color="#77bdfb" emissive="#77bdfb" emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[0.35, -0.1, 0.61]}>
        <boxGeometry args={[0.3, 0.4, 0.05]} />
        <meshStandardMaterial color="#77bdfb" emissive="#77bdfb" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

export function Property3D({
  compact = false,
  onClick,
  maintenanceRisk,
  theme = "light"
}: Property3DProps) {
  const cameraPosition = useMemo(() => (compact ? [2.2, 1.6, 2.2] : [3, 2, 3]), [compact]);
  const environmentPreset = theme === "dark" ? "night" : "city";
  const [lowPower, setLowPower] = useState(false);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
    const lowMemory =
      typeof (navigator as Navigator & { deviceMemory?: number }).deviceMemory === "number" &&
      (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <= 4;
    setLowPower(prefersReduced || smallScreen || lowMemory);
  }, []);

  return (
    <div
      className={`raytrace-lite relative h-full w-full ${
        compact ? "min-h-[140px]" : "min-h-[220px]"
      }`}
    >
      {lowPower ? (
        <div className="flex h-full items-center justify-center rounded-2xl bg-white/10 text-xs text-[var(--text-muted)]">
          <svg width="120" height="90" viewBox="0 0 120 90" aria-hidden="true">
            <rect width="120" height="90" rx="18" fill="rgba(255,255,255,0.2)" />
            <polygon points="20,60 60,30 100,60" fill="#6f42c1" opacity="0.8" />
            <rect x="30" y="60" width="60" height="18" fill="#8bc4ff" />
          </svg>
          <span className="-ml-4">2D fallback</span>
        </div>
      ) : (
        <Canvas
          camera={{ position: cameraPosition as [number, number, number], fov: 45 }}
          shadows
          onClick={onClick}
        >
          <ambientLight intensity={theme === "dark" ? 0.4 : 0.7} />
          <spotLight
            position={[3, 5, 2]}
            intensity={theme === "dark" ? 1.2 : 0.9}
            angle={0.35}
            penumbra={0.6}
            castShadow
          />
          <pointLight
            position={[-3, 2, -2]}
            intensity={theme === "dark" ? 0.8 : 0.5}
            color="#7ab6ff"
          />
          <Suspense fallback={null}>
            <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.5}>
              <LowPolyHouse maintenanceRisk={maintenanceRisk} />
            </Float>
            <Sparkles
              count={24}
              speed={0.6}
              size={compact ? 1.2 : 1.6}
              color={maintenanceRisk ? "#ff4d4f" : "#7ab6ff"}
              position={[0, 0.8, 0]}
            />
            <Environment preset={environmentPreset} />
          </Suspense>
          <OrbitControls enableZoom={!compact} enablePan={false} maxPolarAngle={1.5} />
        </Canvas>
      )}
    </div>
  );
}
