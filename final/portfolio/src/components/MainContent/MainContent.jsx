import '../../BaseStyle.css'
import './MainContent.css'

function MainContent({ children }) {
    return (
        <>
            <div className='main-area'>
                <div className='circle one'></div>
                <div className='circle two'></div>
                <div className='circle three'></div>
                <div className='circle four'></div>
                {children}
            </div>
        </>
    );
}

export default MainContent;