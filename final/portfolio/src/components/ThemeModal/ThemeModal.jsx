import '../../BaseStyle.css';
import './ThemeModal.css';
import { useRef, useEffect } from 'react';

function ThemeModal({ children, onClose }) {
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

    return (
        <dialog ref={dialogRef} className='modal'>
            <div className='modal-container'>
                {children}
            </div>
        </dialog>
    );
}

export default ThemeModal;