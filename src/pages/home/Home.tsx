import React from 'react';
import './Home.css';
import ModalServico from '../../components/servicos/modalServico/ModalServico';


function Home() {
    return (
        <>
        
        <div className="relative w-full ">
      {/* <!-- Imagem de fundo --> */}
      <img src="https://images.pexels.com/photos/17485678/pexels-photo-17485678/free-photo-of-clima-abstrato-resumo-abstrair.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagem de fundo" className="w-full h-full object-cover"/>
    

    {/* <!-- Texto e links sobre a imagem --> */}
    <div className="absolute inset-0 flex justify-center items-center p-8 bg-green-400 bg-opacity-20">
      <div className="text-white text-center">
        <img src="http://www.w3.org/2000/svg" alt="logo" />
        <h1 className="text-4xl font-bold mb-4">Renovatech</h1>
        <p className="mb-4">Impulsionando Inovação Sustentável</p>
        <div>
        <ModalServico />
          
        </div>
      </div>
    </div>
  </div>
        
        
        {/* <div className=" flex justify-center">
          <div className='container grid  grid-cols-2 text-green-800'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Renovatech</h2>
              <p className='text-xl'>Impulsionando Inovação Sustentável</p>
  
              <div className="flex justify-around gap-4">
              <ModalServico />
              <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
            </div>

            </div>
          </div>
        </div> */}
      </>
    );
}

export default Home;