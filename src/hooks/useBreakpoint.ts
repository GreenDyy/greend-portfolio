// src/utilities/breakpoint.ts

import { useMediaQuery } from 'react-responsive';

const breakpoint = {
    desktop: '(min-width: 1224px)',
    tablet: '(min-width: 768px) and (max-width: 1223px)',
    mobile: '(max-width: 767px)',
    // largeDesktop: '(min-width: 1600px)',
    // portrait: '(orientation: portrait)'
}

export const useBreakpoint = () => {
    const isDesktop = useMediaQuery({ query: breakpoint.desktop });
    const isTablet = useMediaQuery({ query: breakpoint.tablet });
    const isMobile = useMediaQuery({ query: breakpoint.mobile });

    return {
        isDesktop,
        isTablet,
        isMobile,
    };
};

