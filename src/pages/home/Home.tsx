import React from 'react';
// import homeLogo from '../../assets/home.png'
import './Home.css';


function Home() {
    return (
        <>
        <div className=" flex justify-center">
          <div className='container grid text-green-800'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Renovatech</h2>
              <p className='text-xl'>Impulsionando Inovação Sustentável</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-orange-500 text-white py-2 px-4'>Ver Serviços</button>
              </div>
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;