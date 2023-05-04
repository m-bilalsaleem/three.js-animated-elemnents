import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Cylinder } from "@react-three/drei";

export default function AnimatedCylinder() {
  const meshRef = useRef();

  return (
    <Cylinder
      ref={meshRef}
      args={[1, 1, 2, 32]}
      rotation={[0, 0, 0]}
      onClick={() => console.log("Cylinder clicked!")}
    >
      <meshStandardMaterial attach="material" color="orange" />
    </Cylinder>
  );
}
