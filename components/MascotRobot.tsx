"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

export default function MascotRobot() {
  return (
    <div className="fixed bottom-[-30px] right-[-30px] w-[350px] h-[350px] z-50 pointer-events-none hidden md:block">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />

        {/* --- LIGHTING (High Contrast Studio Setup) --- */}
        <ambientLight intensity={2} />
        {/* Key Light (Sharp White) */}
        <spotLight position={[5, 10, 5]} angle={0.3} penumbra={0.5} intensity={5} color="white" castShadow />
        {/* Rim Light (Lime-300 to highlight edges) */}
        <spotLight position={[-5, 5, -5]} angle={0.5} penumbra={1} intensity={5} color="#bef264" />
        {/* Fill Light (Soft) */}
        <pointLight position={[-2, -2, 2]} intensity={2} color="white" />

        {/* --- ROBOT CONTAINER --- */}
        <Float speed={3} rotationIntensity={0.1} floatIntensity={0.4} floatingRange={[-0.1, 0.1]}>
          <GlassRobot />
        </Float>

        {/* --- ENVIRONMENT (Reflections) --- */}
        {/* "City" preset gives great sharp reflections on glass */}
        <Environment preset="city" blur={1} />

        {/* --- SHADOW --- */}
        <ContactShadows opacity={0.4} scale={15} blur={2.5} far={4} color="#65a30d" />
      </Canvas>
    </div>
  );
}

function GlassRobot() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const eyesRef = useRef<THREE.Group>(null);

  // Track mouse globally (entire screen)
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to +1 based on WINDOW size
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Blinking Logic
  const [isBlinking, setIsBlinking] = useState(false);
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200); // Close eyes for 200ms
    }, 4000 + Math.random() * 2000); // Random blink every 4-6 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  // Animation Loop
  useFrame((state, delta) => {
    if (!groupRef.current || !headRef.current || !eyesRef.current) return;

    // 1. Calculate Target Rotation based on Global Mouse
    // We limit the angle so it doesn't break its neck (clamp)
    const targetRotY = mouse.current.x * 0.8; // Look left/right
    const targetRotX = mouse.current.y * 0.5; // Look up/down

    // 2. Smoothly rotate HEAD (Damping)
    headRef.current.rotation.y = THREE.MathUtils.damp(headRef.current.rotation.y, targetRotY, 4, delta);
    headRef.current.rotation.x = THREE.MathUtils.damp(headRef.current.rotation.x, targetRotX, 4, delta);

    // 3. Smoothly rotate BODY (follows head slightly)
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY * 0.3, 2, delta);

    // 4. Blinking Animation (Scale eyes Y axis)
    const targetScaleY = isBlinking ? 0.1 : 1;
    eyesRef.current.scale.y = THREE.MathUtils.lerp(eyesRef.current.scale.y, targetScaleY, 0.4);
  });

  return (
    // Scale down to look cute and compact
    <group ref={groupRef} position={[0, -0.6, 0]} scale={0.8}>

      {/* --- BODY (White High-Gloss Ceramic) --- */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.15}
          metalness={0.1}
          clearcoat={1}            // Like a new car finish
          clearcoatRoughness={0.1}
          reflectivity={1}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* --- NECK RING --- */}
      <mesh position={[0, 0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.72, 0.05, 32, 100]} />
        <meshStandardMaterial color="#d4d4d8" metalness={1} roughness={0.2} />
      </mesh>

      {/* --- HEAD CONTAINER --- */}
      <group ref={headRef} position={[0, 1.05, 0]}>

        {/* 1. INTERNAL GLOW CORE (Vibrant Lime-300) */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshBasicMaterial color="#bef264" /> {/* Lime-300 Flat Color */}
        </mesh>

        {/* 2. CORE LIGHT SOURCE */}
        <pointLight position={[0, 0, 0]} intensity={6} color="#bef264" distance={2.5} />

        {/* 3. GLASS DOME (The "Cutter" Look) */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.8, 64, 64]} />
          <meshPhysicalMaterial
            roughness={0}             // Perfectly smooth
            transmission={1}          // 100% See through
            thickness={2}             // Thick glass
            ior={1.5}                 // Refraction index
            color="#ffffffff"
            attenuationColor="#bef264" // Tint internal glass lime
            attenuationDistance={1.2}
            transparent
            opacity={0.5}
            envMapIntensity={2}
            clearcoat={1}
          />
        </mesh>

        {/* 4. DIGITAL EYES (Controlled by Blink State) */}
        <group ref={eyesRef} position={[0, 0.05, 0.65]}>
          {/* Left Eye */}
          <mesh position={[-0.22, 0, 0]} rotation={[0, 0, -0.1]}>
            <capsuleGeometry args={[0.1, 0.16, 4, 16]} />
            <meshBasicMaterial color="white" toneMapped={false} />
            {/* Eye Glow */}
            <pointLight position={[0, 0, 0.1]} intensity={1} color="white" distance={0.5} />
          </mesh>
          {/* Right Eye */}
          <mesh position={[0.22, 0, 0]} rotation={[0, 0, 0.1]}>
            <capsuleGeometry args={[0.1, 0.16, 4, 16]} />
            <meshBasicMaterial color="white" toneMapped={false} />
            <pointLight position={[0, 0, 0.1]} intensity={1} color="white" distance={0.5} />
          </mesh>
        </group>

        {/* 5. SIDE DETAILS (Antennas) */}
        <mesh position={[0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>
        <mesh position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>
      </group>

    </group>
  );
}