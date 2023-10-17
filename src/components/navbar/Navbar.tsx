import React from 'react'
import {Link} from 'react-router-dom';
import homeLogo from '../../assets/logo_farmacia.png'
import userImage from '../../assets/user 1.png'
import cartImage from '../../assets/shopping-cart 1.png'


function Navbar() {



  return (
    <>
      <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />
          </div>
          
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
            <div className='hover:underline'>Categorias</div>
            <div className='hover:underline'>Cadastrar categoria</div>
            <div className="flex justify-center ">
              <img src={userImage} alt="" className='w-1/1 h-1/3 ' />
            </div>
            <div className="flex justify-center ">
              <img src={cartImage} alt="" className='w-1/1 h-1/3' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar