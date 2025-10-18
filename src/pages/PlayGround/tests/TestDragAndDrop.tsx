import { useState, DragEvent } from 'react';

interface Card {
    id: string;
    content: string;
}

interface Column {
    id: string;
    title: string;
    cardIds: string[];
}

interface BoardData {
    cards: Record<string, Card>;
    columns: Record<string, Column>;
    columnOrder: string[];
}

const initialBoardData: BoardData = {
    cards: {
        'card-1': { id: 'card-1', content: 'Học React Hooks' },
        'card-2': { id: 'card-2', content: 'Tìm hiểu Native D&D' },
        'card-3': { id: 'card-3', content: 'Viết component Card' },
        'card-4': { id: 'card-4', content: 'Viết component Column' },
        'card-5': { id: 'card-5', content: 'Kết nối Board với state' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Cần làm',
            cardIds: ['card-1', 'card-2', 'card-3'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Đang làm',
            cardIds: ['card-4', 'card-5'],
        },
        'column-3': {
            id: 'column-3',
            title: 'Hoàn thành',
            cardIds: [],
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

interface ColumnProps {
    column: Column;
    allCards: Record<string, Card>;
    onDrop: (cardId: string, sourceColumnId: string, targetColumnId: string) => void;
}

const ColumnComponent = ({ column, allCards, onDrop }: ColumnProps) => {
    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const cardIdDraged = e.dataTransfer.getData('cardId');
        const sourceColumnId = e.dataTransfer.getData('sourceColumnId');
        const targetColumnId = column.id;

        onDrop(cardIdDraged, sourceColumnId, targetColumnId);
    };

    return (
        <div
            style={{
                width: 300,
                height: '100%',
                borderRadius: '10px',
                padding: '10px',
                border: '1px solid #ccc',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center'
            }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <h2>{column.title}</h2>
            {column.cardIds.map((cardId) => (
                <CardComponent key={cardId} card={allCards[cardId]} columnId={column.id} />
            ))}
        </div>
    );
};

interface CardProps {
    card: Card;
    columnId: string;
}

const CardComponent = ({ card, columnId }: CardProps) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('cardId', card.id);
        e.dataTransfer.setData('sourceColumnId', columnId);
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            className='card-duy'
            style={{
                cursor: isDragging ? 'grabbing' : 'grab',
                width: '90%',
                borderRadius: '10px',
                padding: '10px',
                border: '1px solid #ccc',
                backgroundColor: 'green',
                opacity: isDragging ? 0.5 : 1,
            }}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <p>{columnId}</p>
            <p>{card.id}</p>
            <p>{card.content}</p>
        </div>
    );
};

function TestDragAndDrop() {
    const [boardData, setBoardData] = useState<BoardData>(initialBoardData);

    const handleDrop = (cardIdDraged: string, sourceColumnId: string, targetColumnId: string) => {
        const sourceColumn = boardData.columns[sourceColumnId];
        const sourceCardIds = sourceColumn.cardIds;
        const targetColumn = boardData.columns[targetColumnId];
        const targetCardIds = targetColumn.cardIds;
        console.log(`tui se luu cai id card ${cardIdDraged} tu cot ${sourceColumnId} vao cot ${targetColumnId}`);

        const newSourceCardIds = sourceCardIds.filter((cardId) => cardId !== cardIdDraged);
        const newTargetCardIds = [...targetCardIds, cardIdDraged];

        setBoardData((prevBoardData) => {
            return {
                ...prevBoardData,
                columns: {
                    ...prevBoardData.columns,
                    [sourceColumnId]: { ...sourceColumn, cardIds: newSourceCardIds },
                    [targetColumnId]: { ...targetColumn, cardIds: newTargetCardIds },
                },
            };
        });
    };

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>Bảng của GreenDev</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                {boardData.columnOrder.map((columnId) => {
                    return (
                        <ColumnComponent
                            key={columnId}
                            column={boardData.columns[columnId]}
                            allCards={boardData.cards}
                            onDrop={handleDrop}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default TestDragAndDrop;

