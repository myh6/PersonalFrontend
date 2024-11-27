import '../../BaseStyle.css';
import './ThemeModal.css';
import Button from '../Button/Button';
import { useRef, useEffect } from 'react';

function ThemeModal({ children, onSave, onClose }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (dialog) {
            dialog.showModal();
            
            const handleClose = () => {
                onClose();
            };

            dialog.addEventListener('close', handleClose);
            return () => {
                dialog.removeEventListener('close', handleClose);
            }
        }
    }, [onClose]);

    function handleSave() {
        onSave();
        dialogRef.current.close();
    }

    return (
        <dialog ref={dialogRef} className='modal' close>
            <div className='modal-container'>
                {children}
                <div className='button-group'>
                    <Button className="subscribe-form" type="submit" onClick={handleSave}>Save</Button>
                    <Button className="cancel-modal" onClick={() => dialogRef.current.close()}>Cancel</Button>
                </div>
            </div>
        </dialog>
    );
}

export default ThemeModal;