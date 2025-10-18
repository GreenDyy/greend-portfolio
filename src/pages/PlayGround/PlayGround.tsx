import { Card, Flex, Button, Space, FloatButton } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { HomeTwoTone } from '@ant-design/icons';
import Test from './tests/Test';
import TestPromise from './tests/TestPromise';
import TestUseContext from './tests/TestUseContext';
import TestUpload from './tests/TestUpload';
import TestDragAndDrop from './tests/TestDragAndDrop';
import VideoTest from './tests/VideoTest';
import TestAnimation from './tests/TestAnimation';
import TestTraffic from './tests/TestTraffic/TestTraffic';
import TestCountDown from './tests/TestCountDown';

// Map test type với component tương ứng
const testComponents: Record<string, React.ComponentType> = {
  '3d': Test,
  'promise': TestPromise,
  'use-context': TestUseContext,
  'upload': TestUpload,
  'drag-and-drop': TestDragAndDrop,
  'video': VideoTest,
  'animation': TestAnimation,
  'traffic': TestTraffic,
  'count-down': TestCountDown,
};

// Cấu hình cho từng test button
const testConfigs = [
  { key: '3d', label: '/playground/3d', color: '#52c41a' },
  { key: 'promise', label: '/playground/promise', color: '#fa8c16' },
  { key: 'use-context', label: '/playground/use-context', color: '#13c2c2' },
  { key: 'upload', label: '/playground/upload', color: '#eb2f96' },
  { key: 'drag-and-drop', label: '/playground/drag-and-drop', color: '#2f54eb' },
  { key: 'video', label: '/playground/video', color: '#faad14' },
  { key: 'animation', label: '/playground/animation', color: '#a0d911' },
  { key: 'traffic', label: '/playground/traffic', color: '#f5222d' },
  { key: 'count-down', label: '/playground/count-down', color: '#ff7a45' },
];

function PlayGround() {
  const navigate = useNavigate();
  const { testType } = useParams<{ testType: string }>();

  // Nếu không có testType hoặc testType không hợp lệ → Hiển thị menu
  if (!testType || !testComponents[testType]) {
    return (
      <Flex vertical justify="center" align="center" style={{ height: '100vh', padding: '20px' }}>
        <h1>🎮 Play Ground</h1>
        <Card title="Bảng điều khiển Test" style={{ width: '100%', maxWidth: 800 }}>
          <Space wrap style={{ width: '100%', padding: 10 }}>
            {testConfigs.map((config) => (
              <Button
                key={config.key}
                type="primary"
                style={{ backgroundColor: config.color, borderColor: config.color }}
                onClick={() => navigate(`/playground/${config.key}`)}
              >
                {config.label}
              </Button>
            ))}
          </Space>
        </Card>

        <FloatButton
          icon={<HomeTwoTone twoToneColor="#52c41a" />}
          tooltip="Quay lại Home"
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#52c41a',
            color: 'white',
            boxShadow: '0 4px 12px rgba(82, 196, 26, 0.4)',
          }}
        />
      </Flex>
    );
  }

  // Nếu có testType hợp lệ → Render component test tương ứng
  const TestComponent = testComponents[testType];
  return <TestComponent />;
}

export default PlayGround;

