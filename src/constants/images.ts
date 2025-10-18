// Import tất cả images
import eldenImage from '../assets/images/elden.jpg';
import skyImage from '../assets/images/sky.png';

// Parallax images
import bgGreen from '../assets/images/parallax/bg_green.jpg';
import bgGreen1 from '../assets/images/parallax/bg_green1.jpg';
import catGreen from '../assets/images/parallax/cat_green.png';
import textGreend from '../assets/images/parallax/text_greend.png';

// Mapping object để map tên image -> path image
export const imageMap: Record<string, string> = {
    elden: eldenImage,
    sky: skyImage,
    // Parallax
    bgGreen: bgGreen,
    bgGreen1: bgGreen1,
    catGreen: catGreen,
    textGreend: textGreend,
} as const;

export const images = {
    // Có thể thêm các images khác nếu cần
} as const;

export type Images = typeof images;

