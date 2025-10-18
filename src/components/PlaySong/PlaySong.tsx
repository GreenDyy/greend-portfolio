import { useState, useRef, useEffect } from 'react';
import type { ChangeEvent } from 'react';

interface PlaySongProps {
    src?: string;
    autoPlay?: boolean;
    hidden?: boolean;
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
}

const PlaySong = ({ src, autoPlay = false, hidden = false, isPlaying, setIsPlaying }: PlaySongProps) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.6;
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollThreshold = 200; // Ngưỡng scroll để bắt đầu phát nhạc (200px)
    //         if (!hasScrolled && window.scrollY > scrollThreshold) {
    //             setHasScrolled(true);
    //             setIsPlaying(true);
    //             if (audioRef.current) {
    //                 audioRef.current.play();
    //             }
    //             window.removeEventListener('scroll', handleScroll);
    //         }
    //     }

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // }, [hasScrolled, setIsPlaying])

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setIsLoaded(true);
            setDuration(audioRef.current.duration);
        }
    };

    const handleProgressChange = (e: ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        setCurrentTime(time);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
        }
    };

    const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className='container' hidden={hidden}>
            <div className='play-song'>
                <div className='play-song-title'>
                    <h1>PlaySong</h1>
                </div>
                <audio
                    controls
                    ref={audioRef}
                    src={src || '/audios/TinhYeuDau.mp3'}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                />
                <div className="progress-container">
                    <span>{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleProgressChange}
                        className="progress-bar"
                    />
                    <span>{formatTime(duration)}</span>
                </div>
                <div className="volume-container">
                    <span>Âm lượng:</span>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="volume-slider"
                    />
                </div>
                <button onClick={handlePlayPause}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
            </div>
        </div>
    );
};

export default PlaySong;

