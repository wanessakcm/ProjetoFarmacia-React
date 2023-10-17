import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import homeLogo from '../../assets/logo_farmacia.png'
import userImage from '../../assets/user 1.png'
import cartImage from '../../assets/shopping-cart 1.png'


function Navbar() {



  return (
    <>
      <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className="flex justify-center " >
            <img src={homeLogo} alt="" className='w-2/3' />
          </Link>
          
          <div className="flex">
           <label className="relative block w-96">
             <input
                className="placeholder:italic placeholder:text-slate-400 block bg-black w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Pesquisar"
                type="text"
                name="search"
              />
            </label>
          </div>

          <div className='flex gap-4'>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
            <Link to='/perfil' className="flex justify-center ">
              <img src={userImage} alt="" className='w-1/1 h-1/3 ' />
            </Link>
            <Link to='/carrinho' className="flex justify-center ">
              <img src={cartImage} alt="" className='w-1/1 h-1/3' />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar