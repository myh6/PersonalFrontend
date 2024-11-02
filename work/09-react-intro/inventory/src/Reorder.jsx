import './Reorder.css'
import './HoveredButton'
import HoveredButton from './HoveredButton';

function Reorder({ onReorder }) {
    return (
        <HoveredButton className="fadeIn" onClick={onReorder} name={"Reorder"}/>
    );
}

export default Reorder;

