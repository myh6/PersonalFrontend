import '../../BaseStyle.css'
import './MainContent.css'

function MainContent({ children }) {
    return (
        <>
        <div className='main-area'>
            {children}
        </div>
        </>
    );
}

export default MainContent;