"use client";

import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState, Suspense } from "react";
import * as random from "maath/random";
import type { Points as PointsType } from "three";

// Component that renders animated star points in a sphere shape
const StarBackground = (props: ThreeElements["points"]) => {
    const ref = useRef<PointsType>(null);

    // Explicitly cast to Float32Array to avoid type errors
    const [positions] = useState<Float32Array>(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array
    );

    // Rotate the point cloud
    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={positions}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

// Wrapper that places the scene inside a fixed Canvas layer
export const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);