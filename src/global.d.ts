/// <reference types="vite/client" />

declare module '*.glb' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module 'react-responsive' {
    export interface MediaQueryProps {
        query?: string;
        minWidth?: number | string;
        maxWidth?: number | string;
        minHeight?: number | string;
        maxHeight?: number | string;
        orientation?: 'portrait' | 'landscape';
        aspectRatio?: string;
        deviceWidth?: number | string;
        deviceHeight?: number | string;
        scan?: 'progressive' | 'interlace';
        color?: boolean;
        colorIndex?: boolean;
        monochrome?: boolean;
        resolution?: number | string;
    }

    export function useMediaQuery(settings: MediaQueryProps): boolean;
}

declare module '@react-three/fiber' {
    export * from '@react-three/fiber/dist/declarations/src/index';
}

declare module '@react-spring/three' {
    export const a: any;
    export * from '@react-spring/three/dist/declarations/src/index';
}

declare namespace THREE {
    export type Material = import('three').Material;
    export type Group = import('three').Group;
    export type AnimationClip = import('three').AnimationClip;
    export type BufferGeometry = import('three').BufferGeometry;
}

// Extend React's JSX namespace to include Three.js elements
declare global {
    namespace JSX {
        interface IntrinsicElements {
            group: any;
            mesh: any;
            primitive: any;
            directionalLight: any;
            ambientLight: any;
            hemisphereLight: any;
            spotLight: any;
            pointLight: any;
            meshStandardMaterial: any;
            meshBasicMaterial: any;
            boxGeometry: any;
            sphereGeometry: any;
            planeGeometry: any;
        }
    }
}

export {};

