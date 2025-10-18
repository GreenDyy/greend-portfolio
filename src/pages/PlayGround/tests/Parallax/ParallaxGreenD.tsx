import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Flex } from 'antd'
//import images
import { images } from '../../../../constants/images'

const imagesForParalax = {
    img1: images.bgGreen,
    img2: images.catGreen,
}

const ParallaxFireWatch = () => {
    return (
        <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
            {/* //layer 0 */}
            <ParallaxLayer offset={0} speed={0.25}>
                <div className="image" id="artback">
                    <img className='img-paralax' src={imagesForParalax?.img1} alt="Parallax layer 1" />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div className="image" id="artback">
                    <img
                        src={imagesForParalax?.img2}
                        alt="Parallax layer 2"
                    />
                </div>
            </ParallaxLayer>
            {/* <ParallaxLayer offset={0} speed={0.3}>
                <div className="image" id="artback">
                    <img className='img-paralax' src={imagesForParalax?.img2} alt="Parallax layer 2" />
                </div>
            </ParallaxLayer> */}

            {/* <ParallaxLayer factor={1.5} offset={0.8} speed={0.25}>
                <Flex className='block-text'>
                    <h1>GreenD</h1>
                    <p>I'm a developer who likes to do different and cool things, learn from great people 😉. Oh, and I really like the color green!🍀</p>
                </Flex>
            </ParallaxLayer> */}
        </Parallax>
    )
}

export default ParallaxFireWatch