import Form from "./form"
import "./global.css"

export default function App(){
    return(
      <main className="box">
            <header className="header">
                <h1 className="title"> <p>Formulário</p> <p>para compra de</p> <span>Pacote de Stickers</span></h1>
            </header>
            <section className="form">
                <Form />
            </section>
      </main>
    )
}
