import './Reorder.css'
import { useState } from 'react'

function Reorder({ onReorder }) {
    return (
        <button className="fadeIn" onClick={onReorder}>Reorder</button>
    );
}

export default Reorder;

