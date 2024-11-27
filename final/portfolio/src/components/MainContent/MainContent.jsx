import '../../BaseStyle.css'
import './MainContent.css'

function MainContent({ children, id}) {
    return (
        <>
            <div className='main-area' id={id}>
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