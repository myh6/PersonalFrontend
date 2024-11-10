import './NavBar.css';
import Button from './Button';

function NavBar({ navTo, currentPage }) {
    const tabs = [
        { hash: '#home', label: 'Home' },
        { hash: '#secondPage', label: 'Second Page' },
        { hash: '#thirdPage', label: 'Third Page' },
    ];

    return (
        <nav>
            <ul className='nav-bar__menu'>
                {tabs.map(tab => (
                    <li key={tab.hash}>
                        <Button
                            onClick={() => navTo(tab.hash)}
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