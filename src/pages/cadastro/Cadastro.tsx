import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Cliente from "../../models/Cliente"
import { cadastrarCliente } from "../../services/Service"
import { toastAlerta } from "../../util/toastAlerta"
import { Buildings } from "@phosphor-icons/react"
import fotopadrao from '../../assets/buildings-light.svg'
function Cadastro() {

    let navigate = useNavigate()
  
    const [confirmaSenha, setConfirmaSenha] = useState<string>("")
  
    const [cliente, setCliente] = useState<Cliente>({
        id: 0,
        cnpj:"",
        razaoSocial: "",
        email: "",
        senha: "",
        foto: "https://i.imgur.com/cLoiHis.png"
    })
  
    const [clienteResposta, setClienteResposta] = useState<Cliente>({
        id: 0,
        cnpj:"",
        razaoSocial: "",
        email: "",
        senha: "",
        foto: "https://i.imgur.com/cLoiHis.png"
    })
  
    useEffect(() => {
      if (clienteResposta.id !== 0) {
        back()
      }
    }, [clienteResposta])
  
    function back() {
      navigate('/login')
    }
  
    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
      setConfirmaSenha(e.target.value)
    }
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setCliente({
        ...cliente,
        [e.target.name]: e.target.value
      })
    }
  
    async function cadastrarNovoCliente(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
  
      if (confirmaSenha === cliente.senha && cliente.senha.length >= 8) {

          // if(cliente.foto === ''){
          //   setCliente({
          //     ...cliente,
          //     foto: 'https://i.imgur.com/cLoiHis.png'
          //   })
          // }

        try {
          await cadastrarCliente(`/clientes/cadastrar`, cliente, setClienteResposta)
          toastAlerta('Cliente cadastrado com sucesso','sucesso')
  
        } catch (error) {
          toastAlerta('Erro ao cadastrar o Cliente','erro')
        }
  
      } else {
        toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.','erro')
        setCliente({ ...cliente, senha: "" }) 
        setConfirmaSenha("")                
      }
    }
  
    return (
      <>
        <div className="grid grid-cols-1  h-screen place-items-center font-bold">
          <div className="fundoCadastro hidden lg:block"></div>
          <form className='flex justify-center items-center flex-col w-2/3 gap-3' onSubmit={cadastrarNovoCliente}>
            <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
            <div className="flex flex-col w-full">
              <label htmlFor="nome">Razão Social</label>
              <input
                type="text"
                id="razaoSocial"
                name="razaoSocial"
                placeholder="Razão Social"
                className="border-2 border-slate-700 rounded p-2"
                value={cliente.razaoSocial} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="cnpj">Cnpj</label>
              <input
                type="text"
                id="cnpj"
                name="cnpj"
                placeholder="Cnpj"
                className="border-2 border-slate-700 rounded p-2"
                value={cliente.cnpj} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="border-2 border-slate-700 rounded p-2"
                value={cliente.email} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="foto">Foto</label>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Foto"
                className="border-2 border-slate-700 rounded p-2"
                value={cliente.foto} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-slate-700 rounded p-2"
                value={cliente.senha} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="border-2 border-slate-700 rounded p-2"
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              />
            </div>
            <div className="flex justify-around w-full gap-8">
              <button className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2' onClick={back}>
                Cancelar
              </button>
              <button className='rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2' type='submit'>
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </>
    )
  }
  
  export default Cadastro