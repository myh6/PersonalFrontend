import '../../BaseStyle.css';
import './FrostedGlass.css';

function FrostedGlass({children}) {
    return (
        <div className="frosted-glass">
            {children}
        </div>
    );
}

export default FrostedGlass;