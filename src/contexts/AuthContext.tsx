import { createContext, ReactNode, useState } from "react"

import { login } from "../services/Service"
import ClienteLogin from "../models/ClienteLogin"

interface AuthContextProps {
    cliente: ClienteLogin
    handleLogout(): void
    handleLogin(usuario: ClienteLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [cliente, setCliente] = useState<ClienteLogin>({
        id: 0,
        cnpj:"",
        razaoSocial: "",
        email: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: ClienteLogin) {
        setIsLoading(true)
        try {
            await login(`/clientes/logar`, userLogin, setCliente)
            alert("Cliente logado com sucesso")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            alert("Dados do cliente inconsistentes")
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setCliente({
            id: 0,
            cnpj:"",
            razaoSocial: "",
            email: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ cliente, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}