import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <ul className='nav-bar__menu'>
                <li><a href="#">First Page</a></li>
                <li><a href="#">Second Page</a></li>
                <li><a href="#">Third Page</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;