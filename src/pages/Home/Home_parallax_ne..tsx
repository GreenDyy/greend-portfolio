import React, { useState, useEffect, useRef } from 'react'
import './Home.scss'
import '../../styles/global-animations.scss'
import { Button, Card, Col, Flex, FloatButton, Layout, Row, Space, Typography } from 'antd'
import { useMediaQuery } from 'react-responsive';
import { Footer, Header } from '../../components'
import { blue, green } from '@ant-design/colors'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Phoenix from '../../models3d/Phoenix'
import {
  GithubOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  CustomerServiceFilled,
  FireFilled,
  ToolOutlined,
  ToolTwoTone,
  ToolFilled,
  DatabaseFilled,
  GlobalOutlined,
  TrophyOutlined,
  CloseOutlined,
  MoreOutlined,
  HeartTwoTone,
  PlaySquareTwoTone,
  PauseOutlined,
  QqOutlined
} from '@ant-design/icons'

import { coreTechs, beAndDatabases, tools } from './initData'
import { university } from './text'
import { useNavigate } from 'react-router-dom'
import PlaySong from '../../components/PlaySong/PlaySong'
import { useBreakpoints } from '../../utilities/breakpoint'
import Video from '../../components/Video/Video';
import { PageLoader } from '../../components'
import { appColors } from '../../constants/appColors'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import cat_green from '../../assets/images/parallax/cat_green.png'
import bg_green from '../../assets/images/parallax/bg_green1.jpg'

const imagesForParalax = {
  img1: bg_green,
  img2: cat_green,
}

const { Title, Text, Link } = Typography

function Home() {
  const navigate = useNavigate()
  const [dataCoreTechs, setDataCoreTechs] = useState(coreTechs)
  const [dataBeAndDatabases, setDataBeAndDatabases] = useState(beAndDatabases)
  const [dataTools, setDataTools] = useState(tools)
  const [isPlayingSong, setIsPlayingSong] = useState(false)
  const [isRotating, setIsRotating] = useState(false)
  const { isMobile, isTablet, isDesktop } = useBreakpoints()
  const [showContent, setShowContent] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const timerRef = useRef(null);

  const [showLines, setShowLines] = useState({
    line1: false,
    line2: false,
    line3: false
  });

  const handlePlaySong = () => {
    setIsPlayingSong(!isPlayingSong)
  }

  const startContentAnimation = () => {
    setShowContent(true)
    setShowLines((current) => ({
      ...current,
      line1: true
    }))
    setTimeout(() => {
      setShowLines((current) => ({
        ...current,
        line2: true
      }))
    }, 200)
    setTimeout(() => {
      setShowLines((current) => ({
        ...current,
        line3: true
      }))
    }, 400)
  }

  const handleSkipLoader = () => {
    // Clear timer nếu còn tồn tại
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    // Set states để bỏ qua loader
    setShowLoader(false)

    // Bắt đầu animation content
    startContentAnimation()
  }

  useEffect(() => {
    //set data
    setDataCoreTechs(coreTechs)
    setDataBeAndDatabases(beAndDatabases)
    setDataTools(tools)

    //xử lý animation
    const timer = setTimeout(() => {
      setShowLoader(false)
      setTimeout(() => {
        startContentAnimation()
      }, 300)
    }, 2000)

    timerRef.current = timer

    return () => clearTimeout(timer)
  }, [])

  if (showLoader) {
    return <PageLoader onClick={handleSkipLoader} />
  }

  return (
    <Layout style={{ color: "white", overflow: 'hidden' }}>
      {/* <Header /> */}
      <Parallax pages={2.5} style={{ top: '0', left: '0' }}>
        <PlaySong
          src="/audios/TinhYeuDau.mp3"
          hidden
          isPlaying={isPlayingSong}
          setIsPlaying={setIsPlayingSong}
        />

        {/* Background layer */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            backgroundImage: `url(${imagesForParalax?.img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Intro content layer */}
        <ParallaxLayer
          offset={0}
          speed={0.25}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '10vh'
          }}
        >
          <Flex
            className={`intro ${showContent ? 'content-visible' : 'content-hidden'}`}
            vertical
            align='flex-start'
            style={{ maxWidth: 1200, textAlign: 'left', zIndex: 10 }}
          >
            <Title className={`content-fade-in ${showLines.line1 ? 'is-visible' : ''}`} style={{ color: appColors?.GREEND, fontSize: '68px', margin: 0, padding: 0 }} level={1}>
              Hii!
            </Title>
            <Title className={`content-fade-in ${showLines.line2 ? 'is-visible' : ''}`} style={{ color: appColors?.GREEND, marginTop: 30 }}>
              {'My name is Huynh Khanh Duy (GreenD)'}
            </Title>
            <Text className={`content-fade-in ${showLines.line3 ? 'is-visible' : ''}`} style={{ color: 'white', fontSize: '24px', fontWeight: '500' }}>
              I'm a developer who likes to do different and cool things, learn from great people 😉. Oh, and I really like the color green!🍀
            </Text>
            <Space size={'large'} style={{ marginTop: 20 }}>
              <Link href="https://github.com/GreenDyy" target="_blank">
                <GithubOutlined style={{ fontSize: '30px', color: appColors?.GREEND }} />
              </Link>
              <Link href="https://www.facebook.com/greendyy" target="_blank">
                <FacebookOutlined style={{ fontSize: '30px', color: appColors?.GREEND }} />
              </Link>
              <Link href="https://www.instagram.com/greendyy" target="_blank">
                <InstagramOutlined style={{ fontSize: '30px', color: appColors?.GREEND }} />
              </Link>
              <Link href="https://github.com/GreenDyy" target="_blank">
                <LinkedinOutlined style={{ fontSize: '30px', color: appColors?.GREEND }} />
              </Link>
              <Link href="https://www.youtube.com/channel/UCvmIHpWJ5HFjA3qqOIXaM7A" target="_blank">
                <YoutubeOutlined style={{ fontSize: '30px', color: appColors?.GREEND }} />
              </Link>
            </Space>
          </Flex>
        </ParallaxLayer>

        {/* Cat image layer */}
        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            paddingRight: '5%',
            paddingBottom: '5%'
          }}
        >
          <div className="image">
            <img
              src={imagesForParalax?.img2}
              alt="Cat parallax"
              style={{
                maxWidth: '400px',
                height: 'auto'
              }}
            />
          </div>
        </ParallaxLayer>

        {/* Background for content sections */}
        <ParallaxLayer offset={1.1} speed={0.1} style={{ backgroundColor: '#000', height: '200vh' }} />

        {/* Content sections layer */}
        <ParallaxLayer offset={1.1} speed={0.5}>
          <Layout.Content className={`container ${showContent ? 'content-visible' : 'content-hidden'}`} style={{
            width: '100%',
            maxWidth: '100%',
            backgroundColor: '#000',
            paddingTop: '20vh'
          }}>
            <Flex vertical justify='center' align='center'>

              {/* II. Skills & Expertise */}
              <Flex
                vertical
                style={{ padding: "40px 20px", maxWidth: 1200, margin: '0 auto' }}
              >
                <Title style={{ color: appColors?.GREEND, marginBottom: 40, textAlign: 'center' }}>
                  Skills & Expertise
                </Title>

                {/* Core Technologies */}
                <Flex
                  vertical
                >
                  <Title level={2} style={{ color: 'white', marginBottom: 40, textAlign: 'left' }}>
                    {/* <span style={{ color: green[6], marginRight: 10 }}>|</span> Core Technologies */}
                    <FireFilled style={{ color: appColors?.GREEND, marginRight: 8 }} />
                    Core Technologies
                  </Title>
                  <Row gutter={[24, 24]}>
                    {/* Row 1 */}
                    {dataCoreTechs?.map((item, index) => {
                      let icon = null;
                      //xử lý icon
                      if (item.pathIcon) {
                        icon = <img src={item.pathIcon} alt={item.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                      }
                      else {
                        if (item.icon) {
                          icon = item.icon
                        }
                        else {
                          icon = <GithubOutlined style={{ fontSize: 40, color: appColors?.GREEND }} />
                        }
                      }
                      return (
                        <Col xs={24} sm={12} md={8} key={index} style={{ textAlign: 'left' }}>
                          <Card
                            hoverable
                            className="card-custom"
                          >
                            <Flex gap={20} align="center">
                              {icon}
                              <Flex vertical>
                                <Title level={4} style={{ color: 'white', margin: 0, fontWeight: 'bold' }}>{item.name}</Title>
                                <Text style={{ color: '#999' }}>{item.experience}</Text>
                              </Flex>
                            </Flex>
                          </Card>
                        </Col>
                      )
                    })}
                  </Row>
                </Flex>
                {/* Backend & Database */}
                <Flex
                  vertical
                >
                  <Title level={2} style={{ color: 'white', marginBottom: 40, textAlign: 'left' }}>
                    <DatabaseFilled style={{ color: appColors?.GREEND, marginRight: 8 }} />
                    Backend & Database
                  </Title>
                  <Row gutter={[24, 24]}>
                    {dataBeAndDatabases?.map((item, index) => {
                      let icon = null;
                      //xử lý icon
                      if (item.pathIcon) {
                        icon = <img src={item.pathIcon} alt={item.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                      }
                      else {
                        if (item.icon) {
                          icon = item.icon
                        }
                        else {
                          icon = <GithubOutlined style={{ fontSize: 40, color: appColors?.GREEND }} />
                        }
                      }
                      return (
                        <Col xs={24} sm={12} md={8} key={index} style={{ textAlign: 'left' }}>
                          <Card
                            hoverable
                            className="card-custom"
                          >
                            <Flex gap={20} align='center'>
                              {icon}
                              <Flex vertical>
                                <Title level={4} style={{ color: 'white', margin: 0, fontWeight: 'bold' }}>{item?.name}</Title>
                                <Text style={{ color: '#999' }}>{item.experience}</Text>

                                {/* <Text style={{ color: '#999' }}>3 months</Text> */}
                              </Flex>
                            </Flex>
                          </Card>
                        </Col>
                      )
                    })}
                  </Row>
                </Flex>
                {/* Tools & DevOps */}
                <Flex
                  vertical
                >
                  <Title level={2} style={{ color: 'white', marginBottom: 40, textAlign: 'left' }}>
                    <ToolFilled style={{ color: appColors?.GREEND, marginRight: 8 }} />
                    Tools
                  </Title>
                  <Row gutter={[24, 24]}>
                    {dataTools?.map((item, index) => {
                      let icon = null;
                      //xử lý icon
                      if (item.pathIcon) {
                        icon = <img src={item.pathIcon} alt={item.name} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                      }
                      else {
                        if (item.icon) {
                          icon = item.icon
                        }
                        else {
                          icon = <GithubOutlined style={{ fontSize: 40, color: appColors?.GREEND }} />
                        }
                      }
                      return (
                        <Col xs={24} sm={12} md={8} key={index} style={{ textAlign: 'left' }}>
                          <Card
                            hoverable
                            className="card-custom"
                          >
                            <Flex gap={20} align='center'>
                              {icon}
                              <Flex vertical>
                                <Title level={4} style={{ color: 'white', margin: 0, fontWeight: 'bold' }}>{item?.name}</Title>
                                <Text style={{ color: '#999' }}>{item.experience}</Text>
                              </Flex>
                            </Flex>
                          </Card>
                        </Col>
                      )
                    })}
                  </Row>
                </Flex>

              </Flex>
              {/* III. Education */}
              <Flex
                vertical
                style={{ padding: "40px 20px", maxWidth: 1200, margin: '0 auto' }}
              >
                <Title style={{ color: appColors?.GREEND, marginBottom: 40, textAlign: 'center' }}>
                  Education
                </Title>

                <Card
                  style={{ textAlign: 'left', background: '#1e1e1e', border: '1px solid #333' }}
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
                <Title style={{ color: appColors?.GREEND, marginBottom: 40, textAlign: 'center' }}>
                  Languages
                </Title>

                <Row gutter={[24, 24]} justify="center">
                  <Col xs={24} sm={12} style={{ display: 'flex' }}>
                    <Card
                      style={{ background: '#1e1e1e', border: '1px solid #333', width: '100%' }}
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
                      style={{ background: '#1e1e1e', border: '1px solid #333', width: '100%' }}
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
                <Title style={{ color: appColors?.GREEND, marginBottom: 40, textAlign: 'center' }}>
                  Certifications & Awards
                </Title>

                <Row gutter={[24, 24]} justify="center">
                  <Col xs={24} sm={12} style={{ display: 'flex' }}>
                    <Card
                      style={{ background: '#1e1e1e', border: '1px solid #333', width: '100%' }}
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
                // title="AI LỚN CŨNG PHẢI"
                description="Có thể chìm nhưng không thể ngã"
              // src="https://www.youtube.com/embed/zlaEpHztvj0"
              />

              <Space style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '40px 0' }}>
                <Link href="https://github.com/GreenDyy" target="_blank">
                  <GithubOutlined style={{ fontSize: 32, color: '#A6A6A6', marginRight: 24, transition: 'color 0.3s' }} className="social-icon" />
                </Link>
                <Link href="https://www.facebook.com/greendyy" target="_blank">
                  <FacebookOutlined style={{ fontSize: 32, color: '#A6A6A6', marginRight: 24, transition: 'color 0.3s' }} className="social-icon" />
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <LinkedinOutlined style={{ fontSize: 32, color: '#A6A6A6', marginRight: 24, transition: 'color 0.3s' }} className="social-icon" />
                </Link>
                <Link href="https://www.youtube.com/channel/UCvmIHpWJ5HFjA3qqOIXaM7A" target="_blank">
                  <YoutubeOutlined style={{ fontSize: 32, color: '#A6A6A6', transition: 'color 0.3s' }} className="social-icon" />
                </Link>
              </Space>
            </Flex>
          </Layout.Content>
        </ParallaxLayer>

        <FloatButton.Group trigger="click" icon={<HeartTwoTone twoToneColor={appColors?.GREEND} />} switchIcon={<CloseOutlined />}>
          <FloatButton icon={isPlayingSong ? <PauseOutlined /> : <CustomerServiceFilled />} onClick={handlePlaySong} tooltip="Âm nhạc" />
          <FloatButton
            icon={<GithubOutlined />}
            tooltip="Github"
            onClick={() => { window.open('https://github.com/GreenDyy', '_blank', 'noopener') }}
          />
          {/* <FloatButton icon={<GlobalOutlined />} tooltip="Website" /> */}
          <FloatButton icon={<QqOutlined />} tooltip="Vùng thử nghiệm 🤣" onClick={() => navigate('/test-area')} />
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
      </Parallax>

      {/* <Footer /> */}
    </Layout>
  )
}

export default Home 