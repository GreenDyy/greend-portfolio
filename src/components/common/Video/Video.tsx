import { Typography } from 'antd';
import './Video.scss';

interface VideoProps {
    title: string;
    src?: string;
    description?: string;
}

function Video(props: VideoProps) {
    const { title, src, description } = props;

    return (
        <div className='video-wrapper'>
            <Typography.Title level={2} className='video-title'>
                {title}
            </Typography.Title>

            <div className='video-container'>
                <iframe
                    src={src || "https://www.youtube.com/embed/SivLRE0ez2w"}
                    title={title}
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>

            {description && (
                <Typography.Text className='video-description'>
                    {description}
                </Typography.Text>
            )}
        </div>
    );
}

export default Video;

