import { images } from '../../../constants/images';
import './PageLoader.scss';

interface PageLoaderProps {
    onClick?: () => void;
}

const PageLoader = (props: PageLoaderProps) => {
    const { onClick } = props;
    return (
        <div className='pager-loader' onClick={onClick}>
            <div>
                <img src={images.giphyLoader} alt="Loader" />
            </div>
        </div>
    );
};

export default PageLoader;

