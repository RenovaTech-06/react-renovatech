import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClienteLogin from "../../models/ClienteLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { RotatingLines } from 'react-loader-spinner';

function Login() {
    let navigate = useNavigate();
  
    const [clienteLogin, setClienteLogin] = useState<ClienteLogin>(
      {} as ClienteLogin
    );
  
    const { cliente, handleLogin } = useContext(AuthContext);
  
    const {isLoading} = useContext(AuthContext) 
  
    useEffect(() => {
      if (cliente.token !== "") {
          navigate('/')
      }
  }, [cliente])
  
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setClienteLogin({
        ...clienteLogin,
        [e.target.name]: e.target.value
    })
  }
  
  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(clienteLogin)
  }
  
    return (
      <>

<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" onSubmit={login}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
</div>


        {/* <div className="grid grid-cols-1 h-screen place-items-center font-bold ">
          <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
            <h2 className="text-slate-900 text-5xl ">Entrar</h2>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="border-2 border-slate-700 rounded p-2"
                value={clienteLogin.email} 
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
                value={clienteLogin.senha} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <button  type='submit' className="rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
             {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
              <span>Entrar</span>}
            </button>
  
            <hr className="border-slate-800 w-full" />
  
            <p>
              Ainda não tem uma conta?{' '}
              <Link to="/cadastro" className="text-indigo-800 hover:underline">
                Cadastre-se
              </Link>
            </p>
          </form>
          <div className="fundoLogin hidden lg:block"></div>
        </div> */}
      </>
    );
  }
  
  export default Login;