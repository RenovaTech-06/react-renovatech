import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import loginLogo from '../../assets/logo-renovatech.png';
import { toastAlerta } from '../../util/toastAlerta';

function Perfil() {
  let navigate = useNavigate();

  const { cliente } = useContext(AuthContext);

  useEffect(() => {
    if (cliente.token === "") {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.','erro');
      navigate("/login");
    }
  }, [cliente.token, navigate]);

  return (
    <div className='container mx-auto mt-10 rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl'>
      <div className='relative'>
        <img className='w-full h-72 object-cover border-b-8 border-white' src={loginLogo} alt="Capa do Perfil" />
        <div className='flex justify-center'>
          <img 
            src={cliente.foto} 
            alt={`Foto de perfil de ${cliente.razaoSocial}`} 
            className='rounded-full w-56 -mt-28 border-8 border-white relative z-10 shadow-lg transform transition-all duration-500 hover:scale-110' 
          />
        </div>
      </div>
      <div className="relative -mt-24 h-72 flex flex-col bg-gradient-to-r from-green-500 to-green-700 text-white text-2xl items-center justify-center rounded-b-3xl shadow-inner">
        <p className='transition-transform duration-300 hover:scale-105 hover:text-green-300'>Nome: {cliente.razaoSocial}</p>
        <p className='transition-transform duration-300 hover:scale-105 hover:text-green-300'>Email: {cliente.email}</p>
      </div>
    </div>
  );
}

export default Perfil;





// import React, { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthContext';
// import loginLogo from '../../assets/logo-renovatech.png';


// function Perfil() {
//   let navigate = useNavigate();

//   const { cliente } = useContext(AuthContext);

//   useEffect(() => {
//     if (cliente.token === "") {
//       alert('Dados inconsistentes. Verifique as informações de cadastro.');
//       navigate("/login");
//     }
//   }, [cliente.token, navigate]);

//   return (
//     <div className='container mx-auto mt-10 rounded-3xl overflow-hidden shadow-lg'>
//       <div className='relative'>
//         <img className='w-full h-72 object-cover border-b-8 border-white' src={loginLogo} alt="Capa do Perfil" />
//         <img 
//           src={cliente.foto} 
//           alt={`Foto de perfil de ${cliente.razaoSocial}`} 
//           className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10 shadow-lg' 
//         />
//       </div>
//       <div className="relative mt-[-5rem] h-72 flex flex-col bg-gradient-to-r from-green-500 to-green-700 text-white text-2xl items-center justify-center rounded-b-3xl shadow-inner">
//         <p className='transition-transform duration-300 hover:scale-105'>Nome: {cliente.razaoSocial}</p>
//         <p className='transition-transform duration-300 hover:scale-105'>Email: {cliente.email}</p>
//       </div>
//     </div>
//   );
// }

// export default Perfil;



