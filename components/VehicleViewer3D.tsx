"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

interface VehicleViewer3DProps {
  color?: string;
}

/* ---------- Stylized geometric car model ---------- */
function StylizedCar({ color = "#C6A769" }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const materialProps = useMemo(
    () => ({
      color: new THREE.Color(color),
      metalness: 0.9,
      roughness: 0.15,
      envMapIntensity: 1.2,
    }),
    [color]
  );

  const glassMaterial = useMemo(
    () => ({
      color: new THREE.Color("#1a2a3a"),
      metalness: 1,
      roughness: 0.05,
      envMapIntensity: 2,
      transparent: true,
      opacity: 0.7,
    }),
    []
  );

  const wheelMaterial = useMemo(
    () => ({
      color: new THREE.Color("#1A1A1A"),
      metalness: 0.8,
      roughness: 0.3,
    }),
    []
  );

  const rimMaterial = useMemo(
    () => ({
      color: new THREE.Color("#888888"),
      metalness: 1,
      roughness: 0.1,
    }),
    []
  );

  const wheelPositions: [number, number, number][] = [
    [-1.3, -0.45, 0.75],
    [-1.3, -0.45, -0.75],
    [1.3, -0.45, 0.75],
    [1.3, -0.45, -0.75],
  ];

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main body - elongated rounded shape */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[4, 0.5, 1.6]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Body upper taper - makes it look less boxy */}
      <mesh position={[0, 0.15, 0]} castShadow>
        <boxGeometry args={[3.8, 0.3, 1.5]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Cabin / greenhouse */}
      <mesh position={[-0.1, 0.55, 0]} castShadow>
        <boxGeometry args={[2, 0.55, 1.3]} />
        <meshStandardMaterial {...glassMaterial} />
      </mesh>

      {/* Cabin top smooth cap */}
      <mesh position={[-0.1, 0.85, 0]}>
        <boxGeometry args={[1.6, 0.08, 1.2]} />
        <meshStandardMaterial {...glassMaterial} />
      </mesh>

      {/* Hood slope */}
      <mesh position={[1.2, 0.25, 0]} rotation={[0, 0, -0.15]} castShadow>
        <boxGeometry args={[1.2, 0.2, 1.45]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Trunk slope */}
      <mesh position={[-1.3, 0.2, 0]} rotation={[0, 0, 0.2]} castShadow>
        <boxGeometry args={[1, 0.18, 1.45]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Front bumper */}
      <mesh position={[2.05, -0.15, 0]} castShadow>
        <boxGeometry args={[0.15, 0.35, 1.5]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Rear bumper */}
      <mesh position={[-2.05, -0.15, 0]} castShadow>
        <boxGeometry args={[0.15, 0.35, 1.5]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Front grille accent */}
      <mesh position={[2.13, -0.1, 0]}>
        <boxGeometry args={[0.02, 0.15, 0.8]} />
        <meshStandardMaterial color="#C6A769" metalness={1} roughness={0.1} />
      </mesh>

      {/* Headlights */}
      {[0.55, -0.55].map((z) => (
        <mesh key={`hl-${z}`} position={[2.08, 0, z]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.5}
            metalness={0.2}
            roughness={0.1}
          />
        </mesh>
      ))}

      {/* Taillights */}
      {[0.55, -0.55].map((z) => (
        <mesh key={`tl-${z}`} position={[-2.08, 0, z]}>
          <boxGeometry args={[0.03, 0.08, 0.25]} />
          <meshStandardMaterial
            color="#ff0000"
            emissive="#ff0000"
            emissiveIntensity={0.8}
            metalness={0.3}
            roughness={0.2}
          />
        </mesh>
      ))}

      {/* Side skirt accent lines */}
      {[0.81, -0.81].map((z) => (
        <mesh key={`skirt-${z}`} position={[0, -0.15, z]}>
          <boxGeometry args={[3.6, 0.02, 0.02]} />
          <meshStandardMaterial color="#C6A769" metalness={1} roughness={0.1} />
        </mesh>
      ))}

      {/* Wheels */}
      {wheelPositions.map(([x, y, z], i) => (
        <group key={`wheel-${i}`} position={[x, y, z]}>
          {/* Tire */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.22, 0.1, 16, 32]} />
            <meshStandardMaterial {...wheelMaterial} />
          </mesh>
          {/* Rim */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.18, 0.18, 0.12, 24]} />
            <meshStandardMaterial {...rimMaterial} />
          </mesh>
          {/* Rim center cap */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, z > 0 ? 0.07 : -0.07, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.02, 16]} />
            <meshStandardMaterial color="#C6A769" metalness={1} roughness={0.05} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ---------- Reflective ground plane ---------- */
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.65, 0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={40}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#050505"
        metalness={0.5}
        mirror={0.5}
      />
    </mesh>
  );
}

/* ---------- Loading placeholder ---------- */
function LoadingPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-charcoal">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-gunmetal text-xs tracking-[0.1em] uppercase">
          Initializing 3D View
        </p>
      </div>
    </div>
  );
}

/* ---------- Main component ---------- */
export default function VehicleViewer3D({ color = "#C6A769" }: VehicleViewer3DProps) {
  return (
    <div className="relative aspect-[4/3] bg-[#050505] overflow-hidden">
      <Suspense fallback={<LoadingPlaceholder />}>
        <Canvas
          camera={{ position: [5, 2.5, 5], fov: 40, near: 0.1, far: 100 }}
          shadows
          gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
        >
          <fog attach="fog" args={["#050505", 10, 30]} />

          {/* Lighting */}
          <ambientLight intensity={0.15} />
          <spotLight
            position={[10, 10, 5]}
            angle={0.3}
            penumbra={1}
            intensity={1.5}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <spotLight
            position={[-5, 8, -5]}
            angle={0.4}
            penumbra={1}
            intensity={0.8}
            color="#C6A769"
          />
          <pointLight position={[0, 5, 0]} intensity={0.3} color="#ffffff" />

          {/* Car model */}
          <StylizedCar color={color} />

          {/* Ground */}
          <Ground />

          {/* Contact shadows for extra depth */}
          <ContactShadows
            position={[0, -0.64, 0]}
            opacity={0.6}
            scale={12}
            blur={2.5}
            far={4}
          />

          {/* Environment for reflections */}
          <Environment preset="city" />

          {/* Controls */}
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.8}
            enablePan={false}
            enableZoom
            minDistance={4}
            maxDistance={12}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.2}
            target={[0, 0, 0]}
          />
        </Canvas>
      </Suspense>

      {/* Overlay UI hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
        <p className="text-gunmetal/50 text-[10px] tracking-[0.2em] uppercase">
          Drag to Rotate &middot; Scroll to Zoom
        </p>
      </div>
    </div>
  );
}
