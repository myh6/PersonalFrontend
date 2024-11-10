import './NavBar.css';

function NavBar({navToHash, currentPage}) {
    const tabs = [
        { hash: '#home', label: 'Home'},
        { hash: '#secondPage', label: 'Second Page'},
        { hash: '#thirdPage', label: 'Third Page'},
    ];

    return (
        <nav>
            <ul className='nav-bar__menu'>
                { tabs.map( tab => (
                    <a 
                    key={tab.label}
                    href={tab.hash} 
                    onClick={navToHash}
                    className={currentPage === tab.hash ? 'active':''}
                    >
                    {tab.label}
                    </a>
                )) }
            </ul>
        </nav>
    );
}

export default NavBar;