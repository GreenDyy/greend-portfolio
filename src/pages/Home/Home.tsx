import { useState, useEffect, useRef } from 'react';
import './Home.scss';
import '../../styles/global-animations.scss';
import { Card, Col, Flex, FloatButton, Layout, Row, Space, Typography } from 'antd';
import {
  GithubOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  CustomerServiceFilled,
  FireFilled,
  ToolFilled,
  DatabaseFilled,
  GlobalOutlined,
  TrophyOutlined,
  CloseOutlined,
  HeartTwoTone,
  PauseOutlined,
  QqOutlined,
  HeartFilled,
  CodeSandboxOutlined
} from '@ant-design/icons';

import { coreTechs, beAndDatabases, tools } from './initData';
import type { Tech } from './initData';
import { university } from './initData';
import { iconMap } from '../../constants/icons';
import { useNavigate } from 'react-router-dom';
import { PageLoader, PlaySong, Video } from '../../components';
import { appColors } from '../../constants/appColors';
import { dLog } from '../../utils/utils';
const { Title, Text, Link } = Typography;

interface ShowLines {
  line1: boolean;
  line2: boolean;
  line3: boolean;
}

function Home() {
  const TAG = 'Home';
  const navigate = useNavigate();
  const [dataCoreTechs, setDataCoreTechs] = useState<Tech[]>(coreTechs);
  const [dataBeAndDatabases, setDataBeAndDatabases] = useState<Tech[]>(beAndDatabases);
  const [dataTools, setDataTools] = useState<Tech[]>(tools);
  const [isPlayingSong, setIsPlayingSong] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const timerRef = useRef<number | null>(null);

  // Helper function để render icon từ iconName
  const renderIcon = (iconName: string, altText: string = '') => {
    const iconSrc = iconMap[iconName];
    if (!iconSrc) {
      return <GithubOutlined style={{ fontSize: 40, color: appColors?.GREEND }} />;
    }
    return <img src={iconSrc} alt={altText} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />;
  };

  const [showLines, setShowLines] = useState<ShowLines>({
    line1: false,
    line2: false,
    line3: false
  });

  const handlePlaySong = () => {
    setIsPlayingSong(!isPlayingSong);
  };

  const startContentAnimation = () => {
    setShowContent(true);
    setShowLines((current) => ({
      ...current,
      line1: true
    }));
    setTimeout(() => {
      setShowLines((current) => ({
        ...current,
        line2: true
      }));
    }, 200);
    setTimeout(() => {
      setShowLines((current) => ({
        ...current,
        line3: true
      }));
    }, 400);
  };

  const handleSkipLoader = () => {
    // Clear timer nếu còn tồn tại
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Set states để bỏ qua loader
    setShowLoader(false);

    // Bắt đầu animation content
    startContentAnimation();
  };

  useEffect(() => {
    dLog(TAG, 'test dlog nè');
    //set data
    setDataCoreTechs(coreTechs);
    setDataBeAndDatabases(beAndDatabases);
    setDataTools(tools);

    //xử lý animation
    const timer = setTimeout(() => {
      setShowLoader(false);
      setTimeout(() => {
        startContentAnimation();
      }, 300);
    }, 2000);

    timerRef.current = timer;

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <PageLoader onClick={handleSkipLoader} />;
  }

  return (
    <Layout style={{
      color: "white",
      overflow: 'hidden',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#000'
    }}>
      {/* <Header /> */}

      <Layout.Content className={`container ${showContent ? 'content-visible' : 'content-hidden'}`} style={{
        width: '100%',
        maxWidth: '100%',
        margin: 0,
        padding: 0
      }}>
        <PlaySong
          src="/audios/TinhYeuDau.mp3"
          hidden
          isPlaying={isPlayingSong}
          setIsPlaying={setIsPlayingSong}
        />


        <Flex vertical justify='center' align='center'>
          {/*I. Intro */}
          <Flex className='intro' vertical align='flex-start' style={{ maxWidth: 1200, width: '100%', textAlign: 'left' }}>
            {/* Greeting với style đặc biệt */}
            <Title
              className={`content-fade-in ${showLines.line1 ? 'is-visible' : ''}`}
              style={{
                color: appColors?.GREEND,
                fontSize: 'clamp(56px, 8vw, 80px)',
                margin: 0,
                padding: 0,
                fontWeight: 900,
                letterSpacing: '-3px',
                textShadow: `
                  0 0 40px rgba(64, 175, 88, 0.6),
                  0 0 80px rgba(64, 175, 88, 0.3),
                  0 5px 15px rgba(0, 0, 0, 0.5)
                `,
                lineHeight: 1.1,
                position: 'relative',
                display: 'inline-block'
              }}
              level={1}
            >
              Hii! 👋
            </Title>

            {/* Name với gradient text */}
            <Title
              className={`content-fade-in ${showLines.line2 ? 'is-visible' : ''}`}
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 700,
                marginTop: 24,
                marginBottom: 0,
                background: `linear-gradient(135deg, #ffffff 0%, ${appColors?.GREEND} 50%, #2d7d42 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% auto',
                animation: 'gradientShift 4s ease infinite',
                lineHeight: 1.3
              }}
              level={2}
            >
              My name is <span style={{
                fontWeight: 900,
                fontSize: 'clamp(32px, 4.5vw, 48px)'
              }}>Huynh Khanh Duy</span> (GreenD) ✨
            </Title>

            {/* Description */}
            <Text
              className={`content-fade-in ${showLines.line3 ? 'is-visible' : ''}`}
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: 'clamp(16px, 2vw, 22px)',
                fontWeight: '400',
                lineHeight: 1.8,
                marginTop: 24,
                maxWidth: '850px',
                display: 'block',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              I'm a <span style={{
                color: appColors?.GREEND,
                fontWeight: 700,
                textShadow: `0 0 20px rgba(64, 175, 88, 0.5)`
              }}>passionate developer</span> who likes to do different and cool things,
              learn from great people 😉
              <br />
              Oh, and I <span style={{
                color: appColors?.GREEND,
                fontWeight: 700
              }}>really love</span> the color green! 🍀💚
            </Text>

            {/* Social Links với style mới */}
            <Flex
              gap="middle"
              wrap="wrap"
              style={{
                marginTop: 40,
                paddingTop: 30,
                borderTop: `2px solid rgba(64, 175, 88, 0.2)`
              }}
            >
              <Link
                href="https://github.com/GreenDyy"
                target="_blank"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(64, 175, 88, 0.1)',
                  border: '2px solid rgba(64, 175, 88, 0.3)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="intro-social-icon"
              >
                <GithubOutlined style={{ fontSize: '26px', color: appColors?.GREEND, zIndex: 1 }} />
              </Link>

              <Link
                href="https://www.facebook.com/greendyy"
                target="_blank"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(64, 175, 88, 0.1)',
                  border: '2px solid rgba(64, 175, 88, 0.3)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                className="intro-social-icon"
              >
                <FacebookOutlined style={{ fontSize: '26px', color: appColors?.GREEND, zIndex: 1 }} />
              </Link>

              <Link
                href="https://www.instagram.com/greendyy"
                target="_blank"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(64, 175, 88, 0.1)',
                  border: '2px solid rgba(64, 175, 88, 0.3)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                className="intro-social-icon"
              >
                <InstagramOutlined style={{ fontSize: '26px', color: appColors?.GREEND, zIndex: 1 }} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/greendyy"
                target="_blank"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(64, 175, 88, 0.1)',
                  border: '2px solid rgba(64, 175, 88, 0.3)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                className="intro-social-icon"
              >
                <LinkedinOutlined style={{ fontSize: '26px', color: appColors?.GREEND, zIndex: 1 }} />
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCvmIHpWJ5HFjA3qqOIXaM7A"
                target="_blank"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(64, 175, 88, 0.1)',
                  border: '2px solid rgba(64, 175, 88, 0.3)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                className="intro-social-icon"
              >
                <YoutubeOutlined style={{ fontSize: '26px', color: appColors?.GREEND, zIndex: 1 }} />
              </Link>

              <Link
                href="https://flight-catch.naiscorp.com/"
                target="_blank"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(64, 175, 88, 0.1)',
                  border: '2px solid rgba(64, 175, 88, 0.3)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                className="intro-social-icon"
              >
                <CodeSandboxOutlined style={{ fontSize: '26px', color: appColors?.GREEND, zIndex: 1 }} />
              </Link>
            </Flex>
          </Flex>

          {/* II. Skills & Expertise */}
          <Flex
            vertical
            style={{ padding: "40px 20px", maxWidth: 1200, margin: '0 auto', width: '100%' }}
          >
            <Title
              style={{
                color: appColors?.GREEND,
                marginBottom: 60,
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 900,
                textAlign: 'center',
                textShadow: `
                  0 0 40px rgba(64, 175, 88, 0.5),
                  0 0 80px rgba(64, 175, 88, 0.2)
                `,
                position: 'relative',
                paddingBottom: 20
              }}
              className="section-title"
            >
              Skills & Expertise
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '4px',
                background: `linear-gradient(90deg, transparent, ${appColors?.GREEND}, transparent)`,
                borderRadius: '2px',
                boxShadow: `0 0 15px ${appColors?.GREEND}`
              }} />
            </Title>

            {/* Core Technologies */}
            <Flex
              vertical
              gap={30}
              className="skills-section"
            >
              <Title level={2} className='title-custom-modern'>
                <div className="title-icon-wrapper">
                  <img src={iconMap.core} className="icon-title" alt="Core Technologies" />
                </div>
                <span className="title-text">Core Technologies</span>
                <div className="title-line" />
              </Title>
              <Row gutter={[24, 24]}>
                {dataCoreTechs?.map((item, index) => (
                  <Col xs={24} sm={12} md={8} key={index} style={{ textAlign: 'left' }}>
                    <Card
                      hoverable
                      className="card-custom-modern"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Flex gap={16} align="center" vertical={false}>
                        {renderIcon(item.iconName, item.name)}
                        <Flex vertical style={{ flex: 1 }}>
                          <Title level={4} style={{ color: 'white', margin: 0, marginBottom: 8, fontWeight: 700 }}>
                            {item.name}
                          </Title>
                          <div className="experience-badge">
                            <span className={`badge-text ${item.experience.toLowerCase()}`}>
                              {item.experience}
                            </span>
                          </div>
                        </Flex>
                      </Flex>
                      <div className="card-glow" />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Flex>

            {/* Backend & Database */}
            <Flex
              vertical
              gap={30}
              className="skills-section"
              style={{ marginTop: 60 }}
            >
              <Title level={2} className='title-custom-modern'>
                <div className="title-icon-wrapper">
                  <img src={iconMap.database} className="icon-title" alt="Backend & Database" />
                </div>
                <span className="title-text">Backend & Database</span>
                <div className="title-line" />
              </Title>
              <Row gutter={[24, 24]}>
                {dataBeAndDatabases?.map((item, index) => (
                  <Col xs={24} sm={12} md={8} key={index} style={{ textAlign: 'left' }}>
                    <Card
                      hoverable
                      className="card-custom-modern"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Flex gap={16} align='center' vertical={false}>
                        {renderIcon(item.iconName, item.name)}
                        <Flex vertical style={{ flex: 1 }}>
                          <Title level={4} style={{ color: 'white', margin: 0, marginBottom: 8, fontWeight: 700 }}>
                            {item?.name}
                          </Title>
                          <div className="experience-badge">
                            <span className={`badge-text ${item.experience.toLowerCase()}`}>
                              {item.experience}
                            </span>
                          </div>
                        </Flex>
                      </Flex>
                      <div className="card-glow" />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Flex>

            {/* Tools & DevOps */}
            <Flex
              vertical
              gap={30}
              className="skills-section"
              style={{ marginTop: 60 }}
            >
              <Title level={2} className='title-custom-modern'>
                <div className="title-icon-wrapper">
                  <img src={iconMap.tools} className="icon-title" alt="Tools" />
                </div>
                <span className="title-text">Tools</span>
                <div className="title-line" />
              </Title>
              <Row gutter={[24, 24]}>
                {dataTools?.map((item, index) => (
                  <Col xs={24} sm={12} md={8} key={index} style={{ textAlign: 'left' }}>
                    <Card
                      hoverable
                      className="card-custom-modern"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Flex gap={16} align='center' vertical={false}>
                        {renderIcon(item.iconName, item.name)}
                        <Flex vertical style={{ flex: 1 }}>
                          <Title level={4} style={{ color: 'white', margin: 0, marginBottom: 8, fontWeight: 700 }}>
                            {item?.name}
                          </Title>
                          <div className="experience-badge">
                            <span className={`badge-text ${item.experience.toLowerCase()}`}>
                              {item.experience}
                            </span>
                          </div>
                        </Flex>
                      </Flex>
                      <div className="card-glow" />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Flex>

          </Flex>
          {/* III. Education */}
          <Flex
            vertical
            style={{ padding: "80px 20px 40px", maxWidth: 1200, margin: '0 auto', width: '100%' }}
          >
            <Title
              style={{
                color: appColors?.GREEND,
                marginBottom: 60,
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 900,
                textAlign: 'center',
                textShadow: `
                  0 0 40px rgba(64, 175, 88, 0.5),
                  0 0 80px rgba(64, 175, 88, 0.2)
                `,
                position: 'relative',
                paddingBottom: 20
              }}
              className="section-title"
            >
              Education
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '4px',
                background: `linear-gradient(90deg, transparent, ${appColors?.GREEND}, transparent)`,
                borderRadius: '2px',
                boxShadow: `0 0 15px ${appColors?.GREEND}`
              }} />
            </Title>

            <Card
              hoverable
              className="info-card-modern"
              style={{ textAlign: 'left' }}
            >
              <Title level={4} style={{ marginTop: 0, color: 'white' }}>{university.name}</Title>

              <Title level={4} style={{ color: appColors?.GREEND }}>{university.degree}</Title>
              <Text style={{ color: '#A6A6A6', display: 'block', marginBottom: 10 }}>{university.duration}</Text>

              <Text style={{ color: '#A6A6A6', display: 'block' }}>{university.description}</Text>
            </Card>
          </Flex>

          {/* IV. Languages */}
          <Flex
            vertical
            style={{ padding: "40px 20px", maxWidth: 1200, margin: '0 auto', width: '100%' }}
          >
            <Title
              style={{
                color: appColors?.GREEND,
                marginBottom: 60,
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 900,
                textAlign: 'center',
                textShadow: `
                  0 0 40px rgba(64, 175, 88, 0.5),
                  0 0 80px rgba(64, 175, 88, 0.2)
                `,
                position: 'relative',
                paddingBottom: 20
              }}
              className="section-title"
            >
              Languages
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '4px',
                background: `linear-gradient(90deg, transparent, ${appColors?.GREEND}, transparent)`,
                borderRadius: '2px',
                boxShadow: `0 0 15px ${appColors?.GREEND}`
              }} />
            </Title>

            <Row gutter={[24, 24]} justify="center">
              <Col xs={24} sm={12} style={{ display: 'flex' }}>
                <Card
                  hoverable
                  className="info-card-modern"
                  style={{ width: '100%' }}
                >
                  <Flex align="center" gap={16}>
                    <GlobalOutlined style={{ fontSize: 32, color: appColors?.GREEND }} />
                    <Flex vertical align="flex-start" style={{ textAlign: 'left' }}>
                      <Title level={4} style={{ marginTop: 0, marginBottom: 8, color: 'white' }}>Vietnamese</Title>
                      <Text style={{ color: '#A6A6A6', fontWeight: 'bold' }}>Native Proficiency</Text>
                      <Text style={{ color: '#A6A6A6', fontSize: 12 }}>Native speaker with complete fluency in reading, writing, and speaking. Deep understanding of cultural nuances and business communication.</Text>
                    </Flex>
                  </Flex>
                </Card>
              </Col>

              <Col xs={24} sm={12} style={{ display: 'flex' }}>
                <Card
                  hoverable
                  className="info-card-modern"
                  style={{ width: '100%' }}
                >
                  <Flex align="center" gap={16}>
                    <GlobalOutlined style={{ fontSize: 32, color: appColors?.GREEND }} />
                    <Flex vertical align="flex-start" style={{ textAlign: 'left' }}>
                      <Title level={4} style={{ marginTop: 0, marginBottom: 8, color: 'white' }}>English</Title>
                      <Text style={{ color: '#A6A6A6', fontWeight: 'bold' }}>Professional Proficiency</Text>
                      <Text style={{ color: '#A6A6A6', fontSize: 12 }}>Strong command of English in professional settings. Proficient in business communication, technical documentation, and daily conversation.</Text>
                    </Flex>
                  </Flex>
                </Card>
              </Col>
            </Row>
          </Flex>

          {/* V. Certifications & Awards */}
          <Flex
            vertical
            style={{ padding: "40px 20px", maxWidth: 1200, margin: '0 auto', width: '100%' }}
          >
            <Title
              style={{
                color: appColors?.GREEND,
                marginBottom: 60,
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 900,
                textAlign: 'center',
                textShadow: `
                  0 0 40px rgba(64, 175, 88, 0.5),
                  0 0 80px rgba(64, 175, 88, 0.2)
                `,
                position: 'relative',
                paddingBottom: 20
              }}
              className="section-title"
            >
              Certifications & Awards
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '4px',
                background: `linear-gradient(90deg, transparent, ${appColors?.GREEND}, transparent)`,
                borderRadius: '2px',
                boxShadow: `0 0 15px ${appColors?.GREEND}`
              }} />
            </Title>

            <Row gutter={[24, 24]} justify="center">
              <Col xs={24} sm={12} style={{ display: 'flex' }}>
                <Card
                  hoverable
                  className="info-card-modern"
                  style={{ width: '100%' }}
                >
                  <Flex align='center' gap={16}>
                    <TrophyOutlined style={{ fontSize: 32, color: appColors?.GREEND }} />
                    <Flex vertical align="flex-start" style={{ textAlign: 'left' }}>
                      <Title level={4} style={{ marginTop: 0, marginBottom: 8, color: 'white' }}>TOEIC 545</Title>
                      <Text style={{ color: '#A6A6A6', fontWeight: 'bold' }}>Educational Testing Service (ETS)</Text>
                      <Text style={{ color: '#A6A6A6', fontSize: 12 }}>Issue January 2025 • No Expiration Date</Text>
                    </Flex>
                  </Flex>
                </Card>
              </Col>
            </Row>
          </Flex>

          {/* embed video */}
          <Video
            title=""
            // title="AI LỚN CŨNG PHẢI"
            description="Có thể chìm nhưng không thể ngã"
          // src="https://www.youtube.com/embed/zlaEpHztvj0"
          />

          {/* Footer Social Links */}
          <Flex
            vertical
            align="center"
            style={{
              width: '100%',
              padding: '60px 20px 40px',
              maxWidth: 1200,
              margin: '0 auto'
            }}
          >
            {/* Divider */}
            <div style={{
              width: '100%',
              height: '1px',
              background: `linear-gradient(90deg, transparent, ${appColors?.GREEND}, transparent)`,
              marginBottom: 40,
              boxShadow: `0 0 10px ${appColors?.GREEND}`
            }} />

            {/* Social Icons */}
            <Flex gap={24} wrap="wrap" justify="center" className="footer-social-container">
              <Link
                href="https://github.com/GreenDyy"
                target="_blank"
                className="footer-social-link"
              >
                <div className="footer-social-icon-wrapper">
                  <GithubOutlined className="footer-social-icon" />
                </div>
              </Link>

              <Link
                href="https://www.facebook.com/greendyy"
                target="_blank"
                className="footer-social-link"
              >
                <div className="footer-social-icon-wrapper">
                  <FacebookOutlined className="footer-social-icon" />
                </div>
              </Link>

              <Link
                href="https://linkedin.com/in/greendyy"
                target="_blank"
                className="footer-social-link"
              >
                <div className="footer-social-icon-wrapper">
                  <LinkedinOutlined className="footer-social-icon" />
                </div>
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCvmIHpWJ5HFjA3qqOIXaM7A"
                target="_blank"
                className="footer-social-link"
              >
                <div className="footer-social-icon-wrapper">
                  <YoutubeOutlined className="footer-social-icon" />
                </div>
              </Link>
            </Flex>

            {/* Copyright */}
            <Text style={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: 14,
              marginTop: 32,
              textAlign: 'center'
            }}>
              Made with 💚 by GreenD
            </Text>
          </Flex>
        </Flex>

        <FloatButton.Group
          trigger="click"
          className='custom-float-btn'
          icon={<HeartFilled style={{ color: appColors?.GREEND }} />}
          closeIcon={<CloseOutlined style={{ color: appColors?.GREEND }} />}
        >
          <FloatButton
            icon={isPlayingSong ? <PauseOutlined style={{ color: appColors?.GREEND }} /> : <CustomerServiceFilled style={{ color: appColors?.GREEND }} />}
            onClick={handlePlaySong}
            tooltip="Âm nhạc"
          />
          <FloatButton
            icon={<GithubOutlined style={{ color: appColors?.GREEND }} />}
            tooltip="Github"
            onClick={() => {
              window.open('https://github.com/GreenDyy', '_blank', 'noopener');
            }}
          />
          {/* <FloatButton icon={<GlobalOutlined />} tooltip="Website" /> */}
          <FloatButton
            icon={<QqOutlined style={{ color: appColors?.GREEND }} />}
            tooltip="Vùng thử nghiệm 🤣"
            onClick={() => navigate('/playground')}
          />

          <FloatButton
            icon={<CodeSandboxOutlined style={{ color: appColors?.GREEND }} />}
            tooltip="My Game"
            onClick={() => {
              window.open('https://flight-catch.naiscorp.com/', '_blank', 'noopener');
            }}
          />
        </FloatButton.Group>

        {/*place 3d, đang bị chặn tương tác toàn vùng, cần fix*/}
        {/* <div className='container-3d'>
          <Canvas
            camera={{ near: 0.1, far: 100, position: [0, 0, 10] }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={4} />
            <hemisphereLight intensity={1} groundColor="black" skyColor="green" />
            <Phoenix
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              isPlayAction={false}
              position={[-10, 0, 0]} // V
            />
          </Canvas>
        </div> */}
      </Layout.Content>

      {/* <Footer /> */}
    </Layout >
  );
}

export default Home;

