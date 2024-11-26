import '../../BaseStyle.css';
import Image from '../../assets/self.jpg';
import HTMLDecorator from '../HTMLDecorator/HTMLDecorator';
import './Banner.css';


function Banner() {
    return (
        <>
            <div className='banner-container'>
                <HTMLDecorator>
                    <h1 className='banner-text'>HI. I'M</h1>
                    <h1 className='name banner-text'>Min-Yang Huang</h1>
                    <h1 className='banner-text'>iOS DEVELOPER</h1>
                    <h1 className='banner-text'>NEU GRADUATE STUDENT</h1>
                </HTMLDecorator>
                <img src={Image} alt='self image'></img>
            </div>
        </>
    );
}

export default Banner;