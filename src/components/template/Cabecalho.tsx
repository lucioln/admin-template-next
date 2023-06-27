import useAppData from "@/data/hooks/useAppData"
import BotaoAlternarTema from "./BotaoAlternarTema"
import Titulo from "./Titulo"
import AvatarUsuario from "./AvatarUsuario"
import useAuth from "@/data/hooks/useAuth"

interface CabecalhoProps{
    titulo: string 
    subtitulo:string
}

export default function Cabecalho(props:CabecalhoProps){
    const {tema, alternarTema} = useAppData()
    const {usuario} = useAuth()

    return (
        <div className={`flex`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
            <div className={`flex flex-grow justify-end items-center`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema}/>
                <AvatarUsuario />
            </div>
        </div>
    )
}