import './PageLoader.scss';

interface PageLoaderProps {
    onClick?: () => void;
}

const PageLoader = (props: PageLoaderProps) => {
    const { onClick } = props;
    return (
        <div className='pager-loader' onClick={onClick}>
            <div>
                <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDhlam5hdmUweXJ1dTJzaGcwcXl3dHJhNW8xNDBpdDIxOTI0MGZpZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tn8zWeNYA73G0/giphy.gif" alt="" />
            </div>
        </div>
    );
};

export default PageLoader;

