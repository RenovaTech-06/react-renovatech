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
   
<div className="containerPrincipal">
<div className="w-100 max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
                
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={cliente.foto} alt="Imagem de perfil"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Razão social: {cliente.razaoSocial}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Email: {cliente.email}</span>
        <div className="flex mt-4 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Telefone</a>
            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Site</a>
        </div>
    </div>
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



