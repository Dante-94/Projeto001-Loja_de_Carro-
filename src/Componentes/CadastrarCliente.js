import React from "react";
import Estilo from "./Cadastro.css"

export default function CadastrarClientes(){

    return(
        <>
        <div className="Principal">
            <div className="Cadastro">
                <h1 class='top'> Cadastrar Clientes</h1>
                <input class="Cad" type="text" placeholder="Nome"/>
                <input class="Cad" type="text" placeholder="Email"/>
                <input class="Cad" type="text" placeholder="CPF"/>
                <input class="Cad" type="text" placeholder="Data de Nascimento"/>
                <input class="Cad" type="text" placeholder="Endereço"/>
                <button class="Salvar">Salvar</button>
            </div>

        </div>
        </>
    )
}