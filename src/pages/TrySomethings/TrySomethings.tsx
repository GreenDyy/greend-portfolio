import { Typography, Layout, Card, Flex, Button, Space, FloatButton } from 'antd';
import { useNavigate, Link, useLocation, Outlet } from 'react-router-dom';
import { HomeTwoTone, RollbackOutlined } from '@ant-design/icons';

function TrySomethings() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log('location', location);
    console.log(location);
    return (
        <>
            <Flex vertical justify="center" align="center" style={{ height: '100vh' }}>
                <h1>Try Some Things</h1>
                <Card title="Bảng điều khiển" style={{ width: '100%', maxWidth: 800 }}>
                    <Space wrap style={{ width: '100%', padding: 10 }} >
                        <Button type="primary" style={{ backgroundColor: '#f5222d', borderColor: '#f5222d' }} onClick={() => navigate('/test-area/test-3d')}>/test-area/test-3d</Button>
                        <Button type="primary" style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }} onClick={() => navigate('/test-3d')}>/test-3d</Button>
                        <Button type="primary" style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }} onClick={() => navigate('/test-area')}>/test-area</Button>
                        <Button type="primary" style={{ backgroundColor: '#722ed1', borderColor: '#722ed1' }} onClick={() => navigate('/test-2')}>/Test-2</Button>
                        <Button type="primary" style={{ backgroundColor: '#fa8c16', borderColor: '#fa8c16' }} onClick={() => navigate('/test-promise')}>/test-promise</Button>
                        <Button type="primary" style={{ backgroundColor: '#13c2c2', borderColor: '#13c2c2' }} onClick={() => navigate('/test-use-context')}>/test-use-context</Button>
                        <Button type="primary" style={{ backgroundColor: '#eb2f96', borderColor: '#eb2f96' }} onClick={() => navigate('/test-upload')}>/test-upload</Button>
                        <Button type="primary" style={{ backgroundColor: '#2f54eb', borderColor: '#2f54eb' }} onClick={() => navigate('/test-drag-and-drop')}>/test-drag-and-drop</Button>
                        <Button type="primary" style={{ backgroundColor: '#faad14', borderColor: '#faad14' }} onClick={() => navigate('/test-video')}>/test-video</Button>
                        <Button type="primary" style={{ backgroundColor: '#a0d911', borderColor: '#a0d911' }} onClick={() => navigate('/test-animation')}>/test-animation</Button>
                        <Button type="primary" style={{ backgroundColor: '#f5222d', borderColor: '#f5222d' }} onClick={() => navigate('/test-traffic')}>/test-traffic</Button>
                        <Button type="primary" style={{ backgroundColor: '#f5222d', borderColor: '#f5222d' }} onClick={() => navigate('/test-count-down')}>/test-count-down</Button>
                        <Button type="primary" style={{ backgroundColor: '#f5222d', borderColor: '#f5222d' }} onClick={() => navigate('/login')}>/login</Button>
                        <Button type="primary" style={{ backgroundColor: '#f5222d', borderColor: '#f5222d' }} onClick={() => navigate('/test-form-template')}>/test-form-template</Button>
                    </Space>
                </Card>
                {/* float button */}
                <FloatButton
                    icon={<HomeTwoTone twoToneColor="#52c41a" />}
                    tooltip="Quay lại Home"
                    onClick={() => navigate('/')}
                    style={{
                        backgroundColor: '#52c41a',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(82, 196, 26, 0.4)',
                        // transition: 'all 0.3s ease',
                        // ':hover': {
                        //     transform: 'scale(1.1)'
                        // }
                    }}
                />
            </Flex>
            {/* <Outlet /> */}
        </>

    );
}

export default TrySomethings;

