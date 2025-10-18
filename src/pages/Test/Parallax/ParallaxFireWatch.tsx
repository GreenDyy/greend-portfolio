import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Flex } from 'antd'
import text_greend from '../../../assets/images/parallax/text_greend.png'

const imagesForParalax = {
    img1: 'https://www.firewatchgame.com/images/parallax/parallax0@2x.png',
    img2: 'https://www.firewatchgame.com/images/parallax/parallax1@2x.png',
    // img3: 'https://www.firewatchgame.com/images/parallax/parallax2@2x.png', //chữ FIREWATCH
    img3: text_greend,
    img4: 'https://www.firewatchgame.com/images/parallax/parallax3@2x.png',
    img5: 'https://www.firewatchgame.com/images/parallax/parallax4@2x.png',
    img6: 'https://www.firewatchgame.com/images/parallax/parallax5@2x.png',
    img7: 'https://www.firewatchgame.com/images/parallax/parallax6@2x.png',
    img8: 'https://www.firewatchgame.com/images/parallax/parallax7@2x.png',
    img9: 'https://www.firewatchgame.com/images/parallax/parallax8@2x.png'
}

const ParallaxFireWatch = () => {
    return (
        <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
            <ParallaxLayer offset={0} speed={0.25}>
                <div className="image" id="artback">
                    <img className='img-paralax' src={imagesForParalax?.img1} alt="Parallax layer 1" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div className="image" id="artback">
                    <img className='img-paralax' src={imagesForParalax?.img2} alt="Parallax layer 2" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.1}>
                <div className="image" id="artback">
                    <img className='img-paralax' src={imagesForParalax?.img3} alt="Parallax layer 3" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div className="image" id="artback">
                    <img className='img-paralax' src={imagesForParalax?.img4} alt="Parallax layer 4" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.35}>
                <div className="image" id="artback">
                    <img className='img-paralax' src={imagesForParalax?.img5} alt="Parallax layer 5" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <div className="image" id="artback">
                    <img className='img-paralax' src={imagesForParalax?.img6} alt="Parallax layer 6" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.45}>
                <div className="image" id="artback">
                    <img className='img-paralax' src={imagesForParalax?.img7} alt="Parallax layer 7" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.40}>
                <div className="image" id="artback">
                    <img className='img-paralax' src={imagesForParalax?.img8} alt="Parallax layer 8" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.35}>
                <div className="image" id="artback">
                    <img className='img-paralax' src={imagesForParalax?.img9} alt="Parallax layer 9" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer factor={1.8} offset={0.8} speed={0.25}>
                <Flex className='block-text'>
                    <h1>GreenD</h1>
                    <p>I'm a developer who likes to do different and cool things, learn from great people 😉. Oh, and I really like the color green!🍀</p>
                </Flex>
            </ParallaxLayer>
        </Parallax>
    )
}

export default ParallaxFireWatch