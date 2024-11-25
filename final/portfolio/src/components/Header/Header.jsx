import '../../BaseStyle.css';
import './Header.css';

function Header({ children }) {
    return (
        <div className='header-content'>
            <h1>MY.H</h1>
            { children }
        </div>
    );
}

export default Header;