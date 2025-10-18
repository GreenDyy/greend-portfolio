const BASE_URL = import.meta.env.VITE_BASE_URL || '';

export const appInfors = {
    BASE_URL: `${BASE_URL}/api`,
    monthNames: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ],
    monthNamesVN: [
        "Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu",
        "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"
    ]
} as const;

export type AppInfors = typeof appInfors;

