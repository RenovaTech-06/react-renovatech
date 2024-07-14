import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import ModalServico from '../../components/servicos/modalServico/ModalServico';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import CardServicos from '../../components/servicos/cardServicos/CardServicos';
import Servicos from '../../models/Servicos';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar } from '../../services/Service';
import { toastAlerta } from '../../util/toastAlerta';
import Contato from '../contato/Contato';
import { ThreeCircles } from 'react-loader-spinner';

import logowhite from '../../assets/logo-renovatech-white.svg';


function Home() {

  const [servicos, setServicos] = useState<Servicos[]>([]);

  const { cliente, handleLogout } = useContext(AuthContext);
  const token = cliente.token;

  async function buscarServico() {
    try {
      await buscar('/servicos', setServicos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente','info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarServico();
  }, [servicos.length]);


    return (
        <>

        
        
      <div className="relative w-full">
          <img
            src="https://i.imgur.com/Nnv1wMa.jpeg"
            alt="Imagem de fundo"
            className="w-full h-full object-cover"
          />
        
       <div className=" absolute inset-0 flex justify-end items-center bg-green-400 bg-opacity-20 md:p-8 md:mr-2">
          <div className="text-white text-center mx-auto md:ml-auto md:mr-48 p-4 md:p-0">
            <img
              src={logowhite}
              alt="logo"
              className="mb-4 mx-auto md:mx-0"
            />
            <p className="mb-4">Impulsionando Inovação Sustentável</p>
            <div>
              <ModalServico />
            </div>
          </div>
        </div>
        
        
      </div>
      {servicos.length === 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ThreeCircles
          visible={true}
          height="150"
          width="150"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />    
          </div> 
      )}
  <div className='container flex mx-auto my-4'>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
        modules={[Pagination]}
        className="mySwiper p-6"
      >
        {servicos.map((servico) => (
          <SwiperSlide key={servico.id} >
            <CardServicos post={servico} />
          </SwiperSlide>
      )
      )}
      </Swiper>
  </div>

  {/* <ListaServicos/> */}
        
  <section className="bg-green-600 py-40">
        <div className="container mx-auto px-10 lg:px-20">
          <div className="lg:max-w-2xl lg:flex lg:flex-col lg:items-center">
            <div className="flex gap-x-2 items-center justify-center mb-2">
             
              <h2 className="text-white text-[2.9rem]">Missão</h2>
            </div>
            <p className="text-white text-center leading-20">
            Proporcionar soluções eficientes e personalizadas para nossos clientes, 
          oferecendo uma gestão de serviços de alta qualidade que atenda às necessidades 
          específicas de cada setor de atuação. Nosso compromisso é entregar resultados que 
          impulsionem o crescimento e a inovação, sempre focados na satisfação e no sucesso dos nossos clientes.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-10 lg:px-20 mt-20 flex justify-end">
          <div className="lg:max-w-2xl lg:flex-row-reverse lg:items-en lg:col-end">
            <div className="flex gap-x-2 items-center justify-center mb-2">
             
              <h2 className="text-white text-[2.9rem]">Visão</h2>
            </div>
            <p className="text-white text-center leading-20">
            Ser reconhecida como líder no mercado de gestão de serviços, destacando-se pela excelência no atendimento 
          ao cliente e pela capacidade de adaptação às demandas dinâmicas do mercado. Aspiramos a ser a referência 
          em inovação e qualidade, criando parcerias duradouras e promovendo o desenvolvimento contínuo de nossos 
          serviços e tecnologias.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-10 lg:px-20 mt-20">
          <div className="lg:max-w-2xl lg:flex lg:flex-col lg:items-center mb-2">
            <div className="flex gap-x-2 items-center justify-center">
              
              <h2 className="text-white text-[2.9rem]">Valores</h2>
              
            </div>
            <h3 > Eficiência:</h3>
            <h3 > Inovação:</h3>
            <h3 > Transparência:</h3>
            <h3 >Personalização:</h3>    
            <p className="text-white text-center leading-20">
              Nossos princípios unem: Acesso Universal a Alimentos saudáveis,
              educação nutricional consciente, sustentabilidade agrícola e apoio
              a pequenos produtores. Solidariedade e equidade impulsionam nosso
              compromisso com comunidades vulneráveis. Inovação responsável e
              transparência sustentam nossa busca por um impacto positivo,
              moldando um futuro saudável e sustentável para todos.
            </p>
          </div>
        </div>
      </section> 

      <Contato/>   
      </>
    );
}

export default Home;