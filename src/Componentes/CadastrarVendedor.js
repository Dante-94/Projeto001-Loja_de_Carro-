import React from "react";
import Estilo from "./Cadastro.css"

export default function CadastrarVendedor(){

    return(
        <>
        <div className="Principal">

        <div class="Cadastro">
            <h1 class='top'> Cadastrar Vendedor</h1>
            <input class="Cad" type="text" placeholder="Nome"/>
            <input class="Cad" type="text" placeholder="Email"/>
            <button class="Salvar">Salvar</button>
        </div>

        </div>
        </>
    )
}