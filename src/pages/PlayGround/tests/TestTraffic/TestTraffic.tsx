import React, { useState, useEffect } from 'react'
import './Traffic.scss'
import { Button, Flex, message, Space, Switch } from 'antd'

const trafficLights = {
    red: {
        color: 'red',
        countDown: 3,
    },
    yellow: {
        color: 'yellow',
        countDown: 3
    },
    green: {
        color: 'green',
        countDown: 3
    }
}

const TestTraffic = () => {
    const [countDown, setCountDown] = useState(10)
    const [isCountDown, setIsCountDown] = useState(true)
    const [currentLight, setCurrentLight] = useState('red')
    const [isHiddenNumber, setIsHiddenNumber] = useState(false)

    useEffect(() => {
        if (isCountDown && countDown > 0) {
            const interval = setInterval(() => {
                setCountDown(prevCount => prevCount - 1)
            }, 1000)
            return () => clearInterval(interval)
        } else if (countDown === 0 && currentLight === trafficLights.red.color) {
            setCurrentLight(trafficLights.yellow.color)
            setCountDown(trafficLights.yellow.countDown)
        } else if (countDown === 0 && currentLight === trafficLights.yellow.color) {
            setCurrentLight(trafficLights.green.color)
            setCountDown(trafficLights.green.countDown)
        }
        else if (countDown === 0 && currentLight === trafficLights.green.color) {
            setCurrentLight(trafficLights.red.color)
            setCountDown(trafficLights.red.countDown)
        }
    }, [isCountDown, countDown])

    const handleTurnRed = () => {
        console.log('turn red')
        setCurrentLight(trafficLights.red.color)
        setCountDown(trafficLights.red.countDown)
    }

    const handleTurnYellow = () => {
        console.log('turn yellow')
        setCurrentLight(trafficLights.yellow.color)
        setCountDown(trafficLights.yellow.countDown)
    }

    const handleTurnGreen = () => {
        console.log('turn green')
        setCurrentLight(trafficLights.green.color)
        setCountDown(trafficLights.green.countDown)
    }
    const handleReset = () => {
        setCurrentLight(trafficLights.red.color)
        setCountDown(trafficLights.red.countDown)
    }

    const handleHiddenNumber = () => {
        setIsHiddenNumber(!isHiddenNumber)
    }

    const handleStopCountDown = () => {
        setIsCountDown(prev => { return !prev })
    }

    return (
        <div className="traffic-container">
            <h1> Đèn giao thông nè ku</h1>
            <Flex style={{ border: '1px solid black', width: '600px', height: '900px', gap: 10, padding: 16, borderRadius: 16 }}>
                <Flex vertical style={{ border: '1px solid blue', width: '40%', height: '100%', borderRadius: 16, alignItems: 'center', gap: 10 }}>
                    <h2>Bảng điều khiển</h2>
                    <Button
                        onClick={handleTurnRed}
                        style={{
                            width: '120px',
                            height: '40px',
                        }}
                    >
                        Bật đèn đỏ
                    </Button>
                    <Button
                        onClick={handleTurnYellow}
                        style={{
                            width: '120px',
                            height: '40px',
                        }}
                    >
                        Bật đèn vàng
                    </Button>
                    <Button
                        onClick={handleTurnGreen}
                        style={{
                            width: '120px',
                            height: '40px',
                        }}
                    >
                        Bật đèn xanh
                    </Button>
                    <Button
                        onClick={handleReset}
                        style={{
                            width: '120px',
                            height: '40px',
                        }}
                    >
                        Reset
                    </Button>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span>Nút ẩn hiện số:</span>
                        <Switch checked={isHiddenNumber} onChange={handleHiddenNumber} />
                    </div>
                    <Button onClick={handleStopCountDown}>{isCountDown ? 'Tạm dừng' : 'Tiếp tục'}</Button>
                </Flex>
                <Flex vertical style={{ border: '1px solid blue', width: '60%', height: '100%', borderRadius: 16, alignItems: 'center', position: 'relative' }}>
                    <h2>Traffic</h2>
                    <Space direction='vertical'>
                        <div style={{ height: 100, width: 100, backgroundColor: currentLight === trafficLights.red.color ? trafficLights.red.color : 'gray', borderRadius: 999 }}></div>
                        <div style={{ height: 100, width: 100, backgroundColor: currentLight === trafficLights.yellow.color ? trafficLights.yellow.color : 'gray', borderRadius: 999 }}></div>
                        <div style={{ height: 100, width: 100, backgroundColor: currentLight === trafficLights.green.color ? trafficLights.green.color : 'gray', borderRadius: 999 }}></div>
                    </Space>

                    <div id='count-down' style={{ position: 'absolute', height: 60, width: 60, top: 80, right: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: 'gray', color: 'white' }}>
                        <h1 hidden={isHiddenNumber}>{countDown}</h1>
                    </div>
                </Flex>
            </Flex>
        </div>
    )
}

export default TestTraffic