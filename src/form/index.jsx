import { useState, useRef, useEffect } from "react";
import Swal from 'sweetalert2'
import Checkbox from "../checkbox"
import Button from "../button"
import Minus from "../../public/assets/img/minus.svg"
import MinusDisable from "../../public/assets/img/minus-disabled.svg"
import Plus from "../../public/assets/img/plus.svg"
import "./styles.css"

export default function Form(){
    const [ react, setReact ] = useState(false)
    const [ vue, setVue ] = useState(false)
    const [ angular, setAngular ] = useState(false)
    const [ valueSticker, setValueSticker ] = useState(0);
    const [ obs, setObs ] = useState("");
    const [ errorCheckbox, setErrorCheckbox ] = useState(false)
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    function handlePlus(){
        setValueSticker(valueSticker + 1);

        if(errorCheckbox){
            setErrorCheckbox(false)
        } 
    }

    function handleMinus(){
        setValueSticker(valueSticker - 1);
    }

    function validateCheckbox(){
        if(react === false && vue === false && angular === false){
           var validate = true
        }

        return validate
    }
    
    function resetForm(){
        setReact(false)
        setVue(false)
        setAngular(false)
        setErrorCheckbox(false)
        setValueSticker(0)
        setObs("")
    }

    function action(value){
        switch (value) {
            case "React":
                setReact(!react)
                setErrorCheckbox(false)
                break;
            case "Vue":
                setVue(!vue)
                setErrorCheckbox(false)
                break;
            case "Angular":
                setAngular(!angular)
                setErrorCheckbox(false)
                break;
        
            default:
                break;
        }
    }

    function buySticker(e){
        e.preventDefault()

        if(validateCheckbox()){
            setErrorCheckbox(true)
            return
        } 

        Swal.fire({
            title: "Realizar compra?",
            text: `Voce está comprando: \n 
                    ${valueSticker} Sticker(s) de \n 
                    ${react === true ? "React" : ""} \n 
                    ${vue === true ? "Vue" : ""} \n 
                    ${angular === true ? "Angular" : ""} \n
                    `,
            icon: "warning",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButton: 'Ok',
            cancelButton: 'Cancelar',
            dangerMode: true,
            confirmButtonColor: "#2f3676",
          }).then(({isConfirmed}) => {
            if (isConfirmed) {
                resetForm()
            }else{
                return
            }
          });
    }

    return(
        <form onSubmit={buySticker}>
             <fieldset className="fieldset">
                 <label className="label">Quais stickers:</label>
                 <Checkbox 
                    id="React"
                    text="React" 
                    value={react}
                    onChange={() => action("React")}    
                    style={errorCheckbox ? {backgroundColor: "#F59393", color: "#F33232"} : undefined}
                    focus={inputRef}

                />
                 <Checkbox 
                    id="Vue"
                    text="Vue" 
                    value={vue}
                    onChange={() => action("Vue")} 
                    style={errorCheckbox ? {backgroundColor: "#F59393", color: "#F33232"} : undefined}
                />
                 <Checkbox 
                    id="Angular"
                    text="Angular" 
                    value={angular}
                    onChange={() => action("Angular")}
                    style={errorCheckbox ? {backgroundColor: "#F59393", color: "#F33232"} : undefined}
                />
             </fieldset>
                    
             <fieldset className="fieldset">
                 <label className="label">Quantos stickers de cada?</label> 
                 <div className="counter" data-testid="counter">
                    <button 
                        type="button"
                        onClick={valueSticker > 0 ? handleMinus : undefined}
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
                        onClick={handlePlus}
                    >
                        <img 
                            data-testid="plus"
                            src={Plus} 
                            alt="imagem representando botao mais" 
                            
                        />
                    </button>
                    
                </div>
             </fieldset>
                    
             <fieldset className="fieldset">
                 <label className="label">Observações:</label>
                 <textarea 
                    name="descricao" 
                    placeholder="Alguma dúvida? Recado?"
                    value={obs}
                    onChange={(e) => setObs(e.target.value)}
                >
                </textarea>
             </fieldset>
                    
             <footer className="footer">
                 <Button 
                    text="Enviar" 
                    type="submit"
                    disabled={valueSticker === 0 ? true : false}
                />
             </footer>  
        </form>
    )
}