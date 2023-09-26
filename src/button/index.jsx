import "./styles.css";

export default function Button({text, disabled}){
    return(
        <button 
            className="submitForm"
            disabled={disabled}>
                {text}
        </button>
    )
}