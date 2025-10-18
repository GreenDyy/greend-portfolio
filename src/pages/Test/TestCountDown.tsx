import { Flex } from 'antd';
import dayjs from 'dayjs';
import { useState, useEffect, useRef } from 'react';

//các bước thức hiện hàm giảm dần thời gian ước tính
//1. tạo 1 hàm tính toán thời gian còn lại
//2. cập nhật timeLeft
//3. tạo 1 interval để cập nhật timeLeft
//4. clear interval khi timeLeft = 0

interface TimeLeft {
    timeStamp?: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const TestCountDown = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [expired, setExpired] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const estimatedTime = 1752503406;

    const updateCountdown = () => {
        //tính toán thời gian còn lại
        const now = dayjs().unix();
        const timeDiff = estimatedTime - now;
        console.log('timeDiff', timeDiff);
        const totalSecondOneDay = 24 * 60 * 60;
        const totalSecondOneHour = 60 * 60;
        const totalSecondOneMinute = 60;

        // Lưu lại tổng số giây còn lại
        setTimeLeft({
            timeStamp: timeDiff,
            days: Math.floor(timeDiff / totalSecondOneDay),
            hours: Math.floor((timeDiff % totalSecondOneDay) / totalSecondOneHour),
            minutes: Math.floor((timeDiff % totalSecondOneHour) / totalSecondOneMinute),
            seconds: timeDiff % 60
        });

        if (timeDiff <= 0) {
            setExpired(true);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        } else {
            setExpired(false);
        }
    };

    useEffect(() => {
        //tính toàn lần đầu
        updateCountdown();
        //tạo interval để cập nhật thời gian còn lại
        intervalRef.current = setInterval(updateCountdown, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <Flex vertical style={{ height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
            <p>Thời gian dự kiến Duy set nè: {estimatedTime}</p>
            {
                expired ? (
                    <p>Đơn hàng của bạn đã hết hạn</p>
                )
                    :
                    (
                        <>
                            <p>Đơn hàng của bạn còn (Dạng timeStamp): {timeLeft.timeStamp}</p>
                            <p>Đơn hàng của bạn còn: {timeLeft.days > 0 ? `${timeLeft.days}:` : ''}{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}</p>
                        </>
                    )
            }
            <p>Đơn hàng chỉ tồn tại trong 3 ngày</p>
        </Flex>
    );
};

export default TestCountDown;

