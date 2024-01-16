import React from "react";
import Estilo from "./Cadastro.css"

export default function CadastrarVeículos(){

    return(
        <>
        <div className="Principal">

        <div class="Cadastro">
            <h1 class='top'> Cadastrar Veículos</h1>
                <input class="Cad" type="text" placeholder="Modelo"/>
                <input class="Cad" type="text" placeholder="Ano"/>
                <input class="Cad" type="text" placeholder="Marca"/>
                <input class="Cad" type="text" placeholder="Preço"/>
                <button class="Salvar">Salvar</button>
        </div>

        </div>
        </>
    )
}