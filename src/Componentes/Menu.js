import React from 'react'
import Estilo from './Menu.css'
import { Routes, Route, Link} from 'react-router-dom';
import SubMenu from './SubMenuClientes'
import SubMenu1 from './SubMenuMarcas'
import SubMenu2 from './SubMenuCarro'
import SubMenu3 from './SubMenuMarcas'
import SubMenu4 from './SubMenuMarcas'


export default function Menu(){
      

    return(
        
        <div className="Menu">
            <Routes>
                <Route path='/SubMenu' Component={SubMenu}/>
                <Route path='/SubMenu1' Component={SubMenu1}/>
                <Route path='/SubMenu2' Component={SubMenu2}/>
                <Route path='/SubMenu3' Component={SubMenu3}/>
                <Route path='/SubMenu4' Component={SubMenu4}/>
            </Routes>
            <h1 className="PagMenu">Escolha o que deseja acessar!</h1>
        
            <div className="Botao">
                <div className="bot"> <Link className='Link' to='/SubMenu'>Clientes</Link> </div>
                <div className="bot"> <Link className='Link' to='/SubMenu1'>Marcas</Link> </div>
                <div className="bot"> <Link className='Link' to='/SubMenu2'>Carros</Link> </div>
                <div className="bot"> <Link className='Link' to='/SubMenu3'>Vendedor</Link> </div>
                <div className="bot"> <h1>Listar Vendas</h1> </div>
            </div>
        
        </div>

    )
}