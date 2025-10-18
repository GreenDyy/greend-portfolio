import { Flex, Typography } from 'antd';
import { useBreakpoints } from '../../utilities/breakpoint';
import type { CSSProperties } from 'react';

interface VideoProps {
    title: string;
    src?: string;
    description?: string;
}

function Video(props: VideoProps) {
    const { title, src, description } = props;
    const { isMobile, isTablet } = useBreakpoints();

    const getVideoContainerStyle = (): CSSProperties => {
        const baseStyle: CSSProperties = {
            width: '100%',
            aspectRatio: '16/9',
            maxWidth: '100%',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        };

        if (isMobile) {
            return {
                ...baseStyle,
                width: '95%',
                maxWidth: '400px'
            };
        }
        if (isTablet) {
            return {
                ...baseStyle,
                width: '85%',
                maxWidth: '600px'
            };
        }
        return {
            ...baseStyle,
            width: '70%',
            maxWidth: '800px'
        };
    };

    return (
        <Flex vertical justify="center" align="center" style={{ width: '100%', height: '100%' }}>
            <Typography.Title level={2} style={{ color: 'white', marginTop: 0 }}>{title}</Typography.Title>

            <div style={getVideoContainerStyle()}>
                <iframe
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        border: 'none'
                    }}
                    src={src || "https://www.youtube.com/embed/SivLRE0ez2w"}
                    title={title}
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
            <Typography.Text
                style={{
                    marginTop: 16,
                    color: '#A6A6A6',
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: 24,
                    fontStyle: 'italic'
                }}
            >
                {description}
            </Typography.Text>
        </Flex>
    );
}

export default Video;

