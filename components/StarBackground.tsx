"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";
import type { Points as PointsType } from "three";

export const StarBackground = (props: React.ComponentProps<typeof Points>) => {
    const ref = useRef<PointsType | null>(null);
    const [sphere] = useState(() => {
        const points = new Float32Array(5000 * 3); // 5000 points, each with x, y, z
        random.inSphere(points, { radius: 1.2 }); // Generate points in a sphere
        return points; // Return the Float32Array directly
    });

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere} // Use the generated sphere directly
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#fff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);