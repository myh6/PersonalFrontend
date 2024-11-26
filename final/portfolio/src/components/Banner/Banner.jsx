import '../../BaseStyle.css';
import Image from '../../assets/self.jpg';
import HTMLDecorator from '../HTMLDecorator/HTMLDecorator';
import './Banner.css';

function Banner() {
    return (
        <>
        <div className='banner-container'>
            <HTMLDecorator>
                <h1>Hi</h1>
            </HTMLDecorator>
            <img src={Image}></img>
        </div>
        </>
    );
}

export default Banner;