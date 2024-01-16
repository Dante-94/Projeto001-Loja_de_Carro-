import React from 'react';
import './Style.css';
import { Routes, Route, Link} from 'react-router-dom';
import Menu from './Componentes/Menu';
import Login from './Login';  

export default function App() {
 
 //Não consegui implementar no código de maneira correta, mas a lógica está aqui.. 

//      <Routes>
//        <Route path='/Login' Component={Login}/>
//        <Route path='/Componentes/Menu' Component={Menu}/>
//      </Routes>
      
//      <div className='Link' >
//        <Link className='Links' to='/Login'>Login</Link>
//        <Link className='Links' to='/Componentes/Menu'>Menu</Link>
//        <Link className='Links' to='/'>Home</Link> 
//      </div>
  

  return (
    <>
    <div className='Principal'>

      {Login()}

      
      

    </div>
      
    </>
  );
}