import '../../BaseStyle.css';
import CardCollection from '../CardCollection/CardCollection';
import Timeline from '../Timeline/Timeline';
import './About.css';

function About() {
    return (        
    <div className='about-container'>
        <h1>About</h1>
        <Timeline/>
        <h2 className='project-title'>Projects</h2>
        <CardCollection></CardCollection>
    </div>
    );
}

export default About;