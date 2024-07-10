import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


function Navbar() {

  let navigate = useNavigate()

  const { cliente, handleLogout } = useContext(AuthContext)
 
  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/')
}

  return (
    <>
     <div className='w-full bg-orange-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>RENOVATECH</div>

            <div className='flex gap-4'>
              <Link to='/' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Serviços</div>
              <div className='hover:underline'>Categorias</div>
              <Link to='/contato' className='hover:underline'>Contato</Link>
              <Link to='/sobre' className='hover:underline'>Sobre Nós</Link>
              <Link to='/setoratuacao' className='hover:underline'>Setores de Atuação</Link>
              <Link to='/cadastroSetorAtuacao' className='hover:underline'>Cadastrar Setor</Link>
              <div className='hover:underline'>Perfil</div>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar