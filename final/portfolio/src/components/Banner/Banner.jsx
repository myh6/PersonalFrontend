import '../../BaseStyle.css';
import LightImage from '../../assets/self.jpg';
import DarkImage from '../../assets/pinkself.jpg';
import HTMLDecorator from '../HTMLDecorator/HTMLDecorator';
import './Banner.css';
import { useTheme } from '../ThemeContext/ThemeContext';

function Banner() {
    const { theme } = useTheme();
    const currentImage = theme === 'light' ? LightImage : DarkImage;

    return (
        <>
            <div className='banner-container'>
                <HTMLDecorator>
                    <h1 className='banner-text'>HI. I'M</h1>
                    <h1 className='name banner-text'>Min-Yang Huang</h1>
                    <h1 className='banner-text'>iOS DEVELOPER</h1>
                    <h1 className='banner-text'>NEU GRADUATE STUDENT</h1>
                </HTMLDecorator>
                <div>
                    <img src={currentImage} alt='self image'></img>
                </div>
            </div>
        </>
    );
}

export default Banner;