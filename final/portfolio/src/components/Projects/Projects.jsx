import '../../BaseStyle.css';
import CardCollection from '../CardCollection/CardCollection';
import './Projects.css';

function Projects() {
    return (        
    <div className='project-container'>
        <h1 className='project-title'>Projects</h1>
        <CardCollection></CardCollection>
    </div>
    );
}

export default Projects;