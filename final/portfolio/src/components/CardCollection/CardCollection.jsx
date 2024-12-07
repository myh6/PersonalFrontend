import Card from "../Card/Card";
import './CardCollection.css';

import BasicLayou2Image from '../../assets/02.png';
import Adaptive3Image from '../../assets/03.png';
import BasicForm from '../../assets/04.png';
import DottiePage from '../../assets/06.png';

function CardCollection() {
    const cardCollectionData = [
        {
            title: '02-basic-layout',
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
            imageUrl: DottiePage,
            description: 'Taipei, Taiwan - Mercuries Data System Ltd',
        },
        {
            title: '10-react-components',
            imageUrl: 'https://via.placeholder.com/300',
            description: 'Taipei, Taiwan - Mercuries Data System Ltd',
        },
    ];

    return (
        <div className="card-collection">
            {cardCollectionData.map((item, index) => (
                <Card
                    key={index}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
}

export default CardCollection;