import './NavBar.css';

function NavBar({navToHash}) {
    return (
        <nav>
            <ul className='nav-bar__menu'>
                <li><a href="#home" onClick={navToHash}>Home</a></li>
                <li><a href="#secondPage" onClick={navToHash}>Second Page</a></li>
                <li><a href="#thirdPage" onClick={navToHash}>Third Page</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;