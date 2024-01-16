import React from "react"
import Estilo from "GerarVenda.css"

export default function GerarVenda(){

    return(
        <>
        <div class="Principal">
        
            <div class="Venda">
                <h1 class='top'>Gerar Venda</h1>
                <input class="Cad" type="text" placeholder="Valor da Venda"/>
                <input class="Cad" type="text" placeholder="Vendedor Responsável"/>
                <input class="Cad" type="date" placeholder="Data da Venda"/>
                <button class="Salvar">Salvar</button>
            </div>

        
        </div>
        </>
    )
}