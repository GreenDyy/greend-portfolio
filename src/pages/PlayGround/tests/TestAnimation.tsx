import { useRef } from 'react';
import './Test.scss';
import ParallaxGreenD from './Parallax/ParallaxGreenD';

const TestAnimation = () => {
    const refTest = useRef(null);

    return (
        <div className='test-container'>
            {/* <ButtonCustom /> */}
            {/* <ParallaxFireWatch /> */}
            <ParallaxGreenD />
        </div>
    );
};

export default TestAnimation;

