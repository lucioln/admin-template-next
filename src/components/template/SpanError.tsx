import { IconWarning } from "../icons";

interface SpanErrorProps{
    mensagem: string
}


export default function SpanError(props:SpanErrorProps){
    return (
        <div className={`bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg 
                        flex items-center`}>
            {IconWarning()}
            <span className="ml-3">{props.mensagem}</span>
        </div>
    )
}