import '../../BaseStyle.css';
import Banner from '../Banner/Banner';
import Quote from '../Quote/Quote';
import SmallIntro from '../SmallIntro/SmallIntro';
import './Home.css';

function Home() {
    return (
        <div className='home-container'>
        <Banner/>
        <Quote/>
        <SmallIntro/>
        </div>
    );
}

export default Home;