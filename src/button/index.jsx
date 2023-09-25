import "./styles.css";

export default function Button({text, disabled}){
    return(
        <button 
            disabled={disabled}>
                {text}
        </button>
    )
}