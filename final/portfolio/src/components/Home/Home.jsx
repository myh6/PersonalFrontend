import '../../BaseStyle.css';
import Banner from '../Banner/Banner';
import './Home.css';

function Home() {
    return (
        <div className='home-container'>
        <Banner/>
        <div className='quote'>
            <h1>Sometimes You Got To Run Before You Can Walk.</h1>
            <h2>-Tony Stark</h2>
        </div>
        </div>
    );
}

export default Home;