import "./styles.css"

export default function Checkbox({id, text, value, onChange, style}){
    return(
        <label className="container" >
            <input
                id={id} 
                type="checkbox" 
                checked={value} 
                onChange={onChange}
                style={style}
            />   
            <div className="checkmark" style={style}>
                <div>{text}</div>
            </div>
        </label>
    )
}