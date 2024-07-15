import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'
import { Menu } from '@headlessui/react'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import logoBranco from '../../assets/logo-branco.png'

function Navbar() {

  let navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const { cliente, handleLogout } = useContext(AuthContext)
 
  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso','sucesso')
    navigate('/')
}

    let navBarComponent

    if(cliente.token !== '') {
      navBarComponent = (
        
        <div className='w-full bg-green-700 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <img
              className="h-8 mr-3"
              src={logoBranco}
              alt="Renovatech logo"
              />
            <div className='text-2xl font-bold uppercase'>RENOVATECH</div>

            <div className='flex gap-4'>
              <Link to='/' className='hover:underline'>Home</Link>
              <Link to='/servicos' className='hover:underline'>Serviços</Link>
              
              <Link to='/setoratuacao' className='hover:underline'>Setor de Atuação</Link>
              <Link to='/cadastroSetorAtuacao' className='hover:underline'>Cadastrar Setor</Link>
              <Link to='/perfil' className='hover:underline'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
      )
    } else {
      navBarComponent = (

        <div className='w-full bg-green-700 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
        
        <Link to='/' className="flex items-center">
          <div className='grid grid-flow-col'>
            <img
                  className="h-8 mr-3"
                  src={logoBranco}
                  alt="Renovatech logo"
                  />
              <div className='text-2xl font-bold uppercase'>RENOVATECH</div>
          </div>
        </Link> 
        
        

          <div className='flex gap-4'>
            <Link to='/' className='hover:underline'>Home</Link>
            <Link to='/servicos' className='hover:underline'>Serviços</Link>
            <Link to='/login' className='hover:underline'>Entrar</Link>
            <Link to='/cadastro' className='hover:underline'>Cadastro</Link>
          </div>
        </div>
      </div>
      )
    }

  return (
    <>
          {navBarComponent}
    </>
  )
}

export default Navbar