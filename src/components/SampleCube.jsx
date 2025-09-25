// src/components/SampleCube.jsx
"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SampleCube() {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
}
