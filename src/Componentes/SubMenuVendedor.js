import React from 'react'
import Estilo from './SubMenuClientes'
import { Routes, Route, Link} from 'react-router-dom';
import Cadastro from './CadastrarVendedor'

export default function SubMenuVendedor(){

    return(
        <>
        <Routes>
            <Route path='/CadastrarVendedor' Component={Cadastro}/>
        </Routes>
        <div class="SubMenu">

        <div class="SubTexto"> <h1 class="texto">Escolha o que Deseja Fazer com Vendedor</h1> </div>

            <div class="SubBotao">
            <div className="bot"> <Link className='Link' to='/CadastrarCliente'>Cadastrar</Link> </div>
            <div class="Subbot"> <h1>Editar</h1> </div>
            <div class="Subbot"> <h1>Listar</h1> </div>
            <div class="Subbot"> <h1>Deletar</h1> </div>
            <div class="Subbot"> <h1>Registrar Venda</h1> </div>
        </div>

        </div>
    
        
        </>
    )

}