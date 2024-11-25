import './NavBar.css';
import Button from '../Button/Button';

function NavBar({ tabs, onTabClick, currentPage }) {
    return (
        <nav>
            <ul className='nav-bar__menu'>
                {tabs.map((tab, index) => (
                    <li key={index}>
                        <Button
                            onClick={() => onTabClick(tab)}
                            className={`${currentPage === tab.hash ? 'active' : ''} ${"nav-button"}`}
                        >
                            {tab.label}
                        </Button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;