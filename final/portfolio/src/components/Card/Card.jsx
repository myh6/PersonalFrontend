import '../../BaseStyle.css';
import './Card.css';

function Card({ imageUrl, title, description }) {
    return (
        <div className="card">
            <div className="card-thumbnail">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;