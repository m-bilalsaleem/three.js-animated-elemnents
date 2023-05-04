import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Octahedron } from "@react-three/drei";

export default function AnimatedDiamond() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time) * 0.5;
    meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.5;
  });

  return (
    <Octahedron
      ref={meshRef}
      args={[1, 0]}
      onClick={() => console.log("Diamond clicked!")}
    >
      <meshStandardMaterial attach="material" color="dodgerblue" />
    </Octahedron>
  );
}
