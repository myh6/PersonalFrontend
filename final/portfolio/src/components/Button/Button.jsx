import '../../BaseStyle.css'
import './Button.css'

function Button({ children, type = "button", visual = "button", onClick, className }) {
    let buttonClass = "button";
    if (visual === "link") {
        buttonClass = "button-link";
    }

    return (
        <button
            className={`${buttonClass} ${className}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;