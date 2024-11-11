import './Header.css';

function Header({ children }) {
    return (
        <div className="header-content">
            <h1>MY</h1>
            { children }
        </div>
    );
}

export default Header;