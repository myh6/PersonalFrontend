import '../../BaseStyle.css';
import Image from '../../assets/self.jpg';
import HTMLDecorator from '../HTMLDecorator/HTMLDecorator';
import './Banner.css';


function Banner() {
    return (
        <>
            <div className='banner-container'>
                <HTMLDecorator>
                    <h1 className='banner-text'>Hi. I'm</h1>
                    <h1 className='name banner-text'>Min-Yang Huang</h1>
                    <h1 className='banner-text'>iOS Developer</h1>
                    <h1 className='banner-text'>NEU Graduate Student</h1>
                </HTMLDecorator>
                <img src={Image}></img>
            </div>
        </>
    );
}

export default Banner;