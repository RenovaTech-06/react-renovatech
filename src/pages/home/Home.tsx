import React from 'react';
import './Home.css';
import ModalServico from '../../components/servicos/modalServico/ModalServico';
import ListaServicos from '../../components/servicos/listarServico/listarServico';


function Home() {
    return (
        <>
        
        <div className="relative w-full ">
   
          <img src="https://i.imgur.com/UV9tvYw.jpg" alt="Imagem de fundo" className="w-full h-full object-cover"/>
        

      
        <div className="absolute inset-0 flex justify-center items-center p-8 bg-green-400 bg-opacity-20">
          <div className="text-white text-center">
            <img src="../../src/assets/logo-renovatech-white.svg" alt="logo" />
            {/* <h1 className="text-4xl font-bold mb-4">Renovatech</h1> */}
            <p className="mb-4">Impulsionando Inovação Sustentável</p>
            <div>
            <ModalServico />
              
        </div>
      </div>
    </div>
  </div>
  
  <ListaServicos/>
        
        
      </>
    );
}

export default Home;