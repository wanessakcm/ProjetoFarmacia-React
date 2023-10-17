import React from 'react';
import homeImage from '../../assets/2546639-ai(1) 1.png'
import './Home.css';

function Home() {
  return (
    <>
      <div className="bg-emerald-300 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl text-black font-bold'>Seja bem vinde!</h2>
            <p className='text-xl text-black'>Aqui você encontra Medicamentos e Cosméticos</p>

            <div className="flex justify-around gap-4">
              <button className='rounded bg-indigo-900 text-white py-2 px-4'>Cadastrar produtos</button>
            </div>
          </div>
          <div className="flex justify-center ">
            <img src={homeImage} alt="" className='w-2/3' />
          </div>
        </div>
      </div>
    </>
  );
}


export default Home;