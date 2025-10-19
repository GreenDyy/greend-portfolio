export const dLog = (tag: string, message: string) => {
    if (import.meta.env.MODE === 'development') {
        console.log(`${tag}: ${message}`);
    }
}