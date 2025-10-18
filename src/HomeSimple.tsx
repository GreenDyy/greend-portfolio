import { useState, useEffect } from 'react';
import { Card, Col, Flex, Layout, Row, Space, Typography } from 'antd';
import { GithubOutlined, FacebookOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

function HomeSimple() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout style={{ 
      color: "white", 
      overflow: 'hidden',
      backgroundColor: '#000',
      minHeight: '100vh'
    }}>
      <Layout.Content style={{
        width: '100%',
        maxWidth: '100%',
        padding: '20px'
      }}>
        <Flex vertical justify='center' align='center'>
          <Flex className='intro' vertical align='flex-start' style={{ maxWidth: 1200, textAlign: 'left' }}>
            <Title style={{ color: '#40AF58', fontSize: '68px', margin: 0, padding: 0 }} level={1}>
              Hii!
            </Title>
            <Title style={{ color: '#40AF58', marginTop: 30 }}>
              My name is Huynh Khanh Duy (GreenD)
            </Title>
            <Text style={{ color: 'white', fontSize: '24px', fontWeight: '500' }}>
              I'm a developer who likes to do different and cool things, learn from great people 😉. Oh, and I really like the color green!🍀
            </Text>
            <Space size={'large'} style={{ marginTop: 20 }}>
              <Link href="https://github.com/GreenDyy" target="_blank">
                <GithubOutlined style={{ fontSize: '30px', color: '#40AF58' }} />
              </Link>
              <Link href="https://www.facebook.com/greendyy" target="_blank">
                <FacebookOutlined style={{ fontSize: '30px', color: '#40AF58' }} />
              </Link>
            </Space>
          </Flex>
        </Flex>
      </Layout.Content>
    </Layout>
  );
}

export default HomeSimple;
