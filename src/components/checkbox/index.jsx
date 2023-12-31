import { useEffect } from "react"
import "./styles.css"

export default function Checkbox({id, text, value, onChange, style, focus}){
    return(
        <label className="container">
            <input
                id={id} 
                type="checkbox" 
                checked={value} 
                onChange={onChange}
                style={style}
                ref={focus}
            />   
            <span style={style}>{text}</span>
        </label>
    )
}