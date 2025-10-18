import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import type { Group, AnimationClip } from 'three';
import type { GLTF } from 'three-stdlib';

import skyScene from '../assets/3d/sky.glb';

type GLTFResult = GLTF & {
    scene: Group;
    animations: AnimationClip[];
};

const Sky = () => {
    const { scene, animations } = useGLTF(skyScene) as GLTFResult;
    const skyRef = useRef<Group>(null);

    // useFrame((state, delta) => {
    //     if (skyRef.current) {
    //         skyRef.current.rotation.y += delta * 0.01
    //     }
    // })

    return (
        <mesh ref={skyRef} position={[-5, 2, -2]} scale={0.03} rotation={[0, 0, 0]}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Sky;

