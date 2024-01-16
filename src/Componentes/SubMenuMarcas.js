import React from 'react'
import Estilo from './SubMenuClientes'
import { Routes, Route, Link} from 'react-router-dom';
import Cadastro from './CadastrarMarca'

export default function SubMenuMarcas(){

    return(
        <>
        <Routes>
            <Route path='/CadastrarMarca' Component={Cadastro}/>
        </Routes>
        <div class="SubMenu">
        <div class="SubTexto"> <h1 class="texto">Escolha o que Deseja Fazer com Marcas</h1> </div>
        
        <div class="SubBotao">
            <div className="bot"> <Link className='Link' to='/CadastrarCliente'>Cadastrar</Link> </div>
            <div class="Subbot"> <h1>Editar</h1> </div>
            <div class="Subbot"> <h1>Listar Marcas</h1> </div>
            <div class="Subbot"> <h1>Deletar</h1> </div>
            
        </div>
        
        </div>
        
        </>
    )

}