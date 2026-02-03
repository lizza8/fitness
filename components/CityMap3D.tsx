"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion-3d";
import { useThemeMode } from "./ThemeContext";

type CityMap3DProps = {
  theme?: "light" | "dark";
};

function CityScene() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#e8f2ff" />
      </mesh>
      {[[-1.5, 0.15, -1.2], [1.4, 0.15, -0.4], [0.4, 0.15, 1.4]].map((pos, index) => (
        <mesh key={index} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.12, 0.12, 0.6, 32]} />
          <meshStandardMaterial color="#007bff" emissive="#4d9bff" emissiveIntensity={0.6} />
        </mesh>
      ))}
      <mesh position={[0, 0.12, 0]}>
        <boxGeometry args={[1.2, 0.25, 1.2]} />
        <meshStandardMaterial color="#6f42c1" emissive="#6f42c1" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

export function CityMap3D({ theme }: CityMap3DProps) {
  const { theme: contextTheme } = useThemeMode();
  const resolvedTheme = theme ?? contextTheme;
  return (
    <div className="raytrace-lite h-full w-full">
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }} shadows>
        <ambientLight intensity={resolvedTheme === "dark" ? 0.4 : 0.7} />
        <spotLight
          position={[4, 6, 2]}
          intensity={1}
          angle={0.35}
          penumbra={0.6}
          castShadow
        />
        <pointLight position={[-4, 3, -2]} intensity={0.7} color="#ff69b4" />
        <Suspense fallback={null}>
          <motion.group
            animate={{ rotateY: Math.PI * 2 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <CityScene />
          </motion.group>
          <Environment preset={resolvedTheme === "dark" ? "night" : "city"} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={1.4} />
      </Canvas>
    </div>
  );
}
