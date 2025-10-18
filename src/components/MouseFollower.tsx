import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import type { Mesh } from 'three';

const MouseFollower = () => {
    const followerRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (!followerRef.current) return;

        // Lấy vị trí chuột trong không gian 3D
        const mouseX = state.mouse.x * 5; // Nhân với 5 để tăng phạm vi di chuyển
        const mouseY = state.mouse.y * 5;

        // Cập nhật vị trí của chấm tròn
        followerRef.current.position.x = mouseX;
        followerRef.current.position.y = mouseY;
        followerRef.current.position.z = 0.5; // Đặt z để chấm tròn luôn hiển thị trước các đối tượng khác
    });

    return (
        <Sphere ref={followerRef} args={[0.05, 32, 32]}>
            <meshStandardMaterial 
                color="#ff0000" 
                emissive="#ff0000"
                emissiveIntensity={0.5}
                transparent
                opacity={0.8}
            />
        </Sphere>
    );
};

export default MouseFollower;

