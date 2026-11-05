import Card from "../Card/Card";
import './CardCollection.css';

import BasicLayou2Image from '../../assets/02.png';
import Adaptive3Image from '../../assets/03.png';
import BasicForm from '../../assets/04.png';
import DottiePage from '../../assets/06.png';
import JSForm from '../../assets/07.png';
import ReactIntro from '../../assets/09.png';
import FinalReact from '../../assets/10.png';

const REPO_WORK_URL = 'https://github.com/myh6/PersonalFrontend/tree/main/work';

// Running copies of each homework, made by `npm run demos` (see scripts/build-demos.sh).
const DEMOS_URL = '/demos';

function CardCollection() {
    const cardCollectionData = [
        {
            title: '02-basic-layout',
            page: 'homepage.html',
            imageUrl: BasicLayou2Image,
            description: 'Practicing CSS and HTML',
        },
        {
            title: '03-responsive-grid',
            imageUrl: Adaptive3Image,
            description: 'Learn adaptive design and Card element',
        },
        {
            title: '04-basic-form',
            imageUrl: BasicForm,
            description: 'Create form with checking logic in HTML',
        },
        {
            title: '06-js-intro',
            imageUrl: DottiePage,
            description: 'Create Card element and DropDown menu in JavaScript with EventListener',
        },
        {
            title: '07-js-form',
            imageUrl: JSForm,
            description: 'Create Form element with checking logic in JavaScript',
        },
        {
            title: '09-react-intro',
            imageUrl: ReactIntro,
            description: 'Create Inventory counter written in React (JavaScript)',
        },
        {
            title: '10-react-components',
            imageUrl: FinalReact,
            description: 'Create a single-page application that have several pages with elements such as banner, card.',
        },
    ];

    return (
        <div className="card-collection">
            {cardCollectionData.map((item, index) => (
                <Card
                    key={index}
                    demoUrl={`${DEMOS_URL}/${item.title}/${item.page ?? 'index.html'}`}
                    codeUrl={`${REPO_WORK_URL}/${item.title}`}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
}

export default CardCollection;