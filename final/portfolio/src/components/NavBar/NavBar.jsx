import '../../BaseStyle.css';
import Button from '../Button/Button';
import './NavBar.css';
import { useState } from 'react';

function NavBar({ tabs, onTabClick, currentPage }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav>
            <Button className="hamburger" onClick={toggleMenu}>☰</Button>
            <ul className={`nav-bar__menu ${isOpen ? `show` : ``}`}>
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