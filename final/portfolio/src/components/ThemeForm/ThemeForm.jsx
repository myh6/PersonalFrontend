import { useState } from 'react';
import '../../BaseStyle.css';
import './ThemeForm.css';
import Button from '../Button/Button';

function ThemeForm({ initialTheme = 'light', onSave, onCancel }) {
    const [theme, setTheme] = useState(initialTheme);

    function handleToggle() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    function handleSave() {
        onSave(theme);
    }

    return (
        <form className="theme-form" onSubmit={handleSave}>
            <div className="theme-toggle">
                <div className='theme-input-container'>
                    <label htmlFor="theme-switch" className="theme-label">Dark Mode</label>
                    <input
                        type="checkbox"
                        id="theme-switch"
                        className="theme-switch"
                        checked={theme === 'dark'}
                        onChange={handleToggle}
                    />
                </div>
                <div className='button-group'>
                    <Button className="subscribe-form" type="submit" onClick={handleSave}>Save</Button>
                    <Button className="cancel-modal" onClick={onCancel}>Cancel</Button>
                </div>
            </div>
        </form>
    );
}

export default ThemeForm;