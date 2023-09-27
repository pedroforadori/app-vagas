import Minus from "../../../public/assets/img/minus.svg"
import MinusDisable from "../../../public/assets/img/minus-disabled.svg"
import Plus from "../../../public/assets/img/plus.svg"
import "./styles.css"

export default function Counter({minus, plus, valueSticker}){
    return(
        <div className="counter" data-testid="counter">
             <button 
                 type="button"
                 onClick={valueSticker > 0 ? minus : undefined}
             >
                 <img 
                     data-testid="minus"
                     src={valueSticker === 0 ? MinusDisable : Minus} 
                     alt="imagem representando botao menos" 
                     
                 />
             </button>
             <input 
                 data-testid="valueSticker"
                 type="number"
                 disabled={true} 
                 placeholder="0" 
                 onChange={(e) => setValueSticker(e.target.value)}
                 value={valueSticker}
             />
             <button
                 type="button"
                 onClick={plus}
             >
                 <img 
                     data-testid="plus"
                     src={Plus} 
                     alt="imagem representando botao mais" 
                     
                 />
             </button>   
        </div>
    )
}