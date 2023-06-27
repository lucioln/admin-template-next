import { IconMoon, IconSun } from "../icons"

interface BotaoAlternarTemaProps{
    tema: string
    alternarTema: () => void
}

export default function BotaoAlternarTema(props:BotaoAlternarTemaProps){
    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema} className={`
            hidden sm:flex items-center cursor-pointer
            bg-gradient-to-r from-yellow-300 to-yellow-600
            w-14 lg:w-24 h-8 p-1 rounded-full
        `}> 
            <div className={` 
                flex items-center justify-center
                bg-white text-yellow-600 
                w-6 h-6 rounded-full
            `} >
               {IconSun('h-4 w-4')} 
            </div>
            <div className={`
            hidden lg:flex items-center ml-2
            text-white font-normal
            `}>
                <span>Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={props.alternarTema} className={`
            hidden sm:flex items-center cursor-pointer
            bg-gradient-to-r from-blue-900 to-black
            w-14 lg:w-24 h-8 rounded-full
        `}> 
            <div className={`
            hidden lg:flex items-center
            text-white font-normal ml-2
            `}>
                <span>Escuro</span>
            </div>

            <div className={` 
                flex items-center justify-center
                bg-black text-blue-600 
                w-6 h-6 rounded-full ml-2
            `} >
               {IconMoon(4)} 
            </div>
        </div>
    )
}