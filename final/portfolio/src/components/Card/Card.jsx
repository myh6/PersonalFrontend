import '../../BaseStyle.css';
import './Card.css';

function Card({ imageUrl, title, description, demoUrl, codeUrl }) {
    return (
        <div className="card">
            <a
                className="card-main"
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="card-thumbnail">
                    <img src={imageUrl} alt={title} />
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </a>
            <a
                className="card-code-link"
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                View code on GitHub
            </a>
        </div>
    );
}

export default Card;
