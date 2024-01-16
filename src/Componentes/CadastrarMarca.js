import React from "react";
import Estilo from "./Cadastro.css"

export default function CadastrarMarcas(){

    return(
        <>
        <div className="Principal">

        <div class="Cadastro">
        <h1 class='top'> Cadastrar Marca</h1>
            <input class="Cad" type="text" placeholder="Nome da Marca"/>
            <button class="Salvar">Salvar</button>
        </div>

        </div>
        </>
    )
}