import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'


function Navbar() {

  let navigate = useNavigate()

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
          <div className='text-2xl font-bold uppercase'>RENOVATECH</div>

          <div className='flex gap-4'>
            <Link to='/' className='hover:underline'>Home</Link>
            <Link to='/servicos' className='hover:underline'>Serviços</Link>
            {/* <Link to='/sobre' className='hover:underline'>Sobre Nós</Link> */}
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