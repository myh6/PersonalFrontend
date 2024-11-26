import '../../BaseStyle.css';
import './HTMLDecorator.css';

function HTMLDecorator({ children }) {
    return (
        <div className="page">
            <span className="tags top-tags">&lt;body&gt;</span>

            <div className='content'>
                {children}
            </div>

            <span className="tags bottom-tags">
                &lt;/body&gt;
                <br />
                <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
        </div>
    );
}

export default HTMLDecorator;