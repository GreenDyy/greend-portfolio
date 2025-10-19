import { Button, Card, Col, Flex, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Games.scss';
import { appColors } from '../../constants/appColors';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { gamesData } from './initData';
import type { Game } from './initData';

const { Title, Text } = Typography;

function Games() {
  const navigate = useNavigate();

  const handleGameClick = (game: Game) => {
    if (game.url !== '#') {
      window.open(game.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="full-screen">
      {/* Header */}
      <Flex
        vertical
        align="center"
        style={{
          padding: '60px 20px 40px',
          maxWidth: 1200,
          width: '100%',
        }}
      >
        {/* Back button */}
        <Flex
          justify="flex-start"
          style={{ width: '100%', marginBottom: 40 }}
        >
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={handleBackHome}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'linear-gradient(135deg, rgba(64, 175, 88, 0.15) 0%, rgba(64, 175, 88, 0.05) 100%)',
              border: '2px solid rgba(64, 175, 88, 0.3)',
              borderRadius: '12px',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            className="back-button"
          >
            Quay lại
          </Button>
        </Flex>

        {/* Title */}
        <Title
          style={{
            color: appColors?.GREEND,
            marginBottom: 20,
            fontSize: 'clamp(36px, 6vw, 56px)',
            fontWeight: 900,
            textAlign: 'center',
            textShadow: `
              0 0 40px rgba(64, 175, 88, 0.5),
              0 0 80px rgba(64, 175, 88, 0.2)
            `,
          }}
        >
          GAME CỦA TÔI
        </Title>

        <Text
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 'clamp(14px, 2vw, 18px)',
            textAlign: 'center',
            maxWidth: 600,
            marginBottom: 60
          }}
        >
          Khám phá các game mini mà tôi đã tạo ra. Chơi thử và vui vẻ nhé!
        </Text>

        {/* Games Grid */}
        <Row gutter={[24, 24]} style={{ width: '100%' }}>
          {gamesData.map((game) => (
            <Col xs={24} sm={12} md={8} key={game.id}>
              <Card
                hoverable={game.url !== '#'}
                className="game-card"
                onClick={() => handleGameClick(game)}
                style={{
                  cursor: game.url === '#' ? 'not-allowed' : 'pointer',
                  opacity: game.url === '#' ? 0.6 : 1
                }}
              >
                <Flex vertical gap={16}>
                  {/* Game Image */}
                  <div className="game-image-wrapper">
                    <img
                      src={game.imageUrl}
                      alt={game.title}
                      className="game-image"
                    />
                    {game.category && (
                      <div className="game-category">
                        {game.category}
                      </div>
                    )}
                    {game.url !== '#' && (
                      <div className="play-overlay">
                        <div className="play-icon">▶</div>
                      </div>
                    )}
                  </div>

                  {/* Game Info */}
                  <Flex vertical style={{ padding: '0 8px 8px' }}>
                    <Title
                      level={3}
                      style={{
                        color: game.url === '#' ? '#666' : 'white',
                        margin: 0,
                        marginBottom: 8,
                        fontSize: 'clamp(20px, 2.5vw, 24px)',
                        textAlign: 'left'
                      }}
                    >
                      {game.title}
                    </Title>

                    <Text
                      style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: 'clamp(13px, 1.5vw, 15px)',
                        lineHeight: 1.6,
                        textAlign: 'left'
                      }}
                    >
                      {game.description}
                    </Text>
                  </Flex>
                </Flex>
              </Card>
            </Col>
          ))}
        </Row>
      </Flex>
    </div>
  );
}

export default Games;

