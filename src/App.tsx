import React from 'react'
import Navbar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contato from './pages/contato/Contato'
import { AuthProvider } from './contexts/AuthContext';
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import ListaSetorAtuacao from './components/setorAtuacao/listaSetor/ListaSetorAtuacao'
import FormularioSetor from './components/setorAtuacao/formularioSetor/FormularioSetor'
import DeletarSetorAtuacao from './components/setorAtuacao/deletarSetor/DeletarSetorAtuacao'

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/setoratuacao" element={<ListaSetorAtuacao />} />
              <Route path="/cadastroSetorAtuacao" element={<FormularioSetor />} />
              <Route path="/editarSetorAtuacao/:id" element={<FormularioSetor />} />
              <Route path="/deletarSetorAtuacao/:id" element={<DeletarSetorAtuacao />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
