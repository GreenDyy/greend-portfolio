// src/utilities/breakpoint.ts

import { useMediaQuery } from 'react-responsive';

const breakpoints = {
    desktop: '(min-width: 1224px)',
    tablet: '(min-width: 768px) and (max-width: 1223px)',
    mobile: '(max-width: 767px)',
    // largeDesktop: '(min-width: 1600px)',
    // portrait: '(orientation: portrait)'
} as const;

interface BreakpointsReturn {
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
}

export const useBreakpoints = (): BreakpointsReturn => {
    const isDesktop = useMediaQuery({ query: breakpoints.desktop });
    const isTablet = useMediaQuery({ query: breakpoints.tablet });
    const isMobile = useMediaQuery({ query: breakpoints.mobile });

    return {
        isDesktop,
        isTablet,
        isMobile,
    };
};

