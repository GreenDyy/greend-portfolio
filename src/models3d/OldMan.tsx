import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import type { Group, AnimationClip } from 'three';
import type { GLTF } from 'three-stdlib';

import oldManScene from '../assets/3d/oldMan.glb';

type GLTFResult = GLTF & {
    scene: Group;
    animations: AnimationClip[];
};

interface OldManProps {
    isRotating?: boolean;
    setIsRotating?: (isRotating: boolean) => void;
}

const OldMan = (props: OldManProps) => {
    const { isRotating, setIsRotating, ...meshProps } = props;
    const { scene, animations } = useGLTF(oldManScene) as GLTFResult;
    const oldManRef = useRef<Group>(null);
    const { actions } = useAnimations(animations, oldManRef);

    useEffect(() => {
        // if (oldManRef.current && isRotating) {
        //     actions['Take 001'].play()
        // }

    }, [isRotating]);

    useFrame((state, _delta) => {
        if (oldManRef.current) {
            // Lấy vị trí chuột trong không gian 3D
            const mouseX = state.mouse.x;
            const mouseY = state.mouse.y;

            // Tính toán góc quay dựa trên vị trí chuột
            const rotationY = mouseX * Math.PI * 0.5; // Góc quay ngang
            const rotationX = mouseY * Math.PI * 0.25; // Góc quay dọc

            // Áp dụng rotation cho model với smooth transition
            oldManRef.current.rotation.y += (rotationY - oldManRef.current.rotation.y) * 0.1;
            oldManRef.current.rotation.x += (rotationX - oldManRef.current.rotation.x) * 0.1;
        }
    });

    return (
        <mesh ref={oldManRef} position={[0, 0, 0]} scale={0.009} {...meshProps}>
            <primitive object={scene} />
        </mesh>
    );
};

export default OldMan;

