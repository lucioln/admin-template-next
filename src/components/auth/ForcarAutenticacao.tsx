import Head from "next/head";
import Image from "next/image"
import loading from '../../../public/images/loading.gif'
import useAuth from "@/data/hooks/useAuth"
import { useRouter } from "next/router"

export function ForcarAutenticacao(props){
    const {usuario, carregando} =useAuth()
    const router = useRouter()
    function renderizarConteudo(){
        return (
            <>
            <Head>
                <script dangerouslySetInnerHTML={{
                    __html: `if(!document.cookie?.includes("admin-template-auth")){
                        window.location.href = '/autenticacao'
                    }`
                }}/>

            </Head>
                {props.children}
            </>
        )
    }

    function renderizarCarregando(){
        return (
            <div className={`flex justify-center items-center  h-screen`}>
                <Image src={loading} alt="loading"/>
            </div>
        )
    }
    
    if(!carregando && usuario?.email){
        return renderizarConteudo()
    }else if(carregando){
        return renderizarCarregando()
    }else{
        router.push('/autenticacao')
        return null
    }
}