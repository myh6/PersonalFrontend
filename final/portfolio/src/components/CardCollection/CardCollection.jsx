import Card from "../Card/Card";
import './CardCollection.css';

function CardCollection() {
    const cardCollectionData = [
        {
            title: '02-basic-layout',
            imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
            description: 'Boston, MA - National Internet Observatory',
        },
        {
            title: '03-responsive-grid',
            imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
            description: 'Taiwan (Hybrid) - SHL Medical',
        },
        {
            title: '04-basic-form',
            imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
            description: 'Taipei, Taiwan - Mercuries Data System Ltd',
        },
        {
            title: '07-js-intro',
            imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
            description: 'Taipei, Taiwan - Mercuries Data System Ltd',
        },
        {
            title: '10-react-components',
            imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
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