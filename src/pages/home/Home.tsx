import React from 'react';
import './Home.css';
import ModalServico from '../../components/servicos/modalServico/ModalServico';


function Home() {
    return (
        <>
        <div className=" flex justify-center">
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
        </div>
      </>
    );
}

export default Home;