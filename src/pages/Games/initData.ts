export interface Game {
    id: string;
    title: string;
    description: string;
    imageUrl: string; // Đường dẫn ảnh game
    url: string;
    category?: string; // Thể loại game (optional)
}

export const gamesData: Game[] = [
    {
        id: 'flight-catch',
        title: 'Flight Catch',
        description: 'Một game bay lượn bắt vật phẩm thú vị. Điều khiển máy bay và thu thập điểm số cao nhất!',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghDxslLNB5PkwrjcJsmch87UYTixT4Z14SQ&s', // Thay bằng ảnh thật
        url: 'https://flight-catch.naiscorp.com/',
        category: 'Arcade'
    },
    {
        id: 'coming-soon-1',
        title: 'Coming Soon',
        description: 'Game mới đang được phát triển. Hãy quay lại sau nhé!',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghDxslLNB5PkwrjcJsmch87UYTixT4Z14SQ&s',
        url: '#',
        category: 'TBA'
    },
    {
        id: 'coming-soon-2',
        title: 'Coming Soon',
        description: 'Một game thú vị khác đang trong quá trình hoàn thiện...',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghDxslLNB5PkwrjcJsmch87UYTixT4Z14SQ&s',
        url: '#',
        category: 'TBA'
    }
];

