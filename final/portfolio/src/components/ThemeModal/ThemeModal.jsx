import '../../BaseStyle.css';
import Button from '../Button/Button';
import './ThemeModal.css';

function ThemeModal({ children, onSave, onClose }) {
    return (
        <dialog className='modal'>
            <div className='modal-container'>
                {children}
                <div className='button-group'>
                    <Button className="subscribe-form" type="submit" onClick={onSave}>Save</Button>
                    <Button className="cancel-modal" onClick={onClose}>Cancel</Button>
                </div>
            </div>
        </dialog>
    );
}

export default ThemeModal;