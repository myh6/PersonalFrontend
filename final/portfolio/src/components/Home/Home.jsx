import '../../BaseStyle.css';
import Banner from '../Banner/Banner';
import Quote from '../Quote/Quote';
import './Home.css';

function Home() {
    return (
        <div className='home-container'>
        <Banner/>
        <Quote/>
        </div>
    );
}

export default Home;