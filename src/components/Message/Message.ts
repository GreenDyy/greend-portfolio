import './Message.scss';

type MessageType = 'success' | 'warning' | 'error';

const Message = {
    success: (content: string, duration: number = 3000): void => {
        showMessage(content, 'success', duration);
    },
    warning: (content: string, duration: number = 3000): void => {
        showMessage(content, 'warning', duration);
    },
    error: (content: string, duration: number = 3000): void => {
        showMessage(content, 'error', duration);
    },
};

let messageContainer: HTMLDivElement | null = null;

const showMessage = (content: string, type: MessageType, duration: number): void => {
    if (!messageContainer) {
        messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';
        document.body.appendChild(messageContainer);
    }

    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = content;

    messageContainer.appendChild(messageElement);

    // Thêm animation khi hiển thị
    setTimeout(() => {
        messageElement.classList.add('show');
    }, 10);

    // Tự động xóa sau duration
    setTimeout(() => {
        messageElement.classList.remove('show');
        setTimeout(() => {
            if (messageContainer) {
                messageContainer.removeChild(messageElement);
                if (messageContainer.children.length === 0) {
                    document.body.removeChild(messageContainer);
                    messageContainer = null;
                }
            }
        }, 300); // Thời gian animation fade out
    }, duration);
};

export default Message;

