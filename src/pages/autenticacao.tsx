import AuthInput from "@/components/auth/AuthInput";
import { useState } from "react";
import SpanError from "@/components/template/SpanError";
import useAuth from "@/data/hooks/useAuth";

export default function Autenticacao() {
    const {usuario, loginGoogle} = useAuth()

    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState(null)

    function submit() {
        if (modo === 'login') {
            exibirError('Ocorreu um erro no login')
        } else {
            console.log('cadastrar')
            exibirError('Ocorreu um erro no cadastro')
        }
    }

    function exibirError(msg:string, tempoEmSegundos:number = 5){
        setError(msg)
        setTimeout(()=> setError(null), tempoEmSegundos * 1000)
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="w-1/2 mlg:w-1/3">
                <h1 className={`
                text-xl md:text-3xl font-bold mb-5 text-center 
            `}>
                    {modo === 'login' ? 'Entre com a sua Conta' : 'Cadastre-se na plataforma!'}
                </h1>
                {error ? <SpanError mensagem={error}/> : false}
                
                <AuthInput tipo="email" label="Email" valor={email} valorMudou={setEmail} obrigatorio />
                <AuthInput tipo='password' label="Senha" valor={senha} valorMudou={setSenha} obrigatorio />
                <button onClick={submit} className={`
                w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg
                px-5 py-3 mt-6
           `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>
                <hr className="my-6 border-gray-300 w-full" />
                <button onClick={loginGoogle} className={`
                w-full bg-red-500 hover:bg-red-400 text-white rounded-lg
                px-5 py-3 mt-6
           `}>
                    Entrar com o Google
                </button>
                {modo === 'login'  ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        `}> Crie uma conta!</a>
                    </p>
                ): (
                    <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo('login')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        `}> Entre com suas Credenciais</a>
                    </p>
                )}
            </div>
        </div>
    )
}