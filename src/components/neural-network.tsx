"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function NeuralNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 100;
  const maxDistance = 2.5;

  // Generate random positions
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = [];
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      vel.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        )
      );
    }
    return [pos, vel];
  }, []);

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;

    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

    // Update positions based on velocities
    for (let i = 0; i < particleCount; i++) {
      const v = velocities[i];
      positionsArray[i * 3] += v.x;
      positionsArray[i * 3 + 1] += v.y;
      positionsArray[i * 3 + 2] += v.z;

      // Bounce off invisible walls
      if (Math.abs(positionsArray[i * 3]) > 10) v.x *= -1;
      if (Math.abs(positionsArray[i * 3 + 1]) > 7) v.y *= -1;
      if (Math.abs(positionsArray[i * 3 + 2]) > 7) v.z *= -1;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Compute connections
    const linePositions = [];
    const lineColors = [];

    const color1 = new THREE.Color("#1DA57A"); // Teal
    const color2 = new THREE.Color("#3B82F6"); // Electric Blue

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positionsArray[i * 3] - positionsArray[j * 3];
        const dy = positionsArray[i * 3 + 1] - positionsArray[j * 3 + 1];
        const dz = positionsArray[i * 3 + 2] - positionsArray[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          linePositions.push(
            positionsArray[i * 3],
            positionsArray[i * 3 + 1],
            positionsArray[i * 3 + 2]
          );
          linePositions.push(
            positionsArray[j * 3],
            positionsArray[j * 3 + 1],
            positionsArray[j * 3 + 2]
          );

          // Alpha based on distance
          const alpha = 1.0 - dist / maxDistance;
          // Mix colors
          const c = color1.clone().lerp(color2, Math.random());

          lineColors.push(c.r, c.g, c.b, alpha);
          lineColors.push(c.r, c.g, c.b, alpha);
        }
      }
    }

    linesRef.current.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    linesRef.current.geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(lineColors, 4)
    );
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#1DA57A" transparent opacity={0.8} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial vertexColors transparent opacity={0.4} depthWrite={false} />
      </lineSegments>
    </group>
  );
}
