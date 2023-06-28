import useAuth from "@/data/hooks/useAuth";
import Link from "next/link";

export default function AvatarUsuario(){
    const {usuario} = useAuth()
    return (
        <div className="ml-2">
            <Link href={'/perfil'}>
                <img 
                src={usuario?.imagemUrl ?? 'https://ionicframework.com/docs/img/demos/avatar.svg'} 
                alt="Avatar do Usuário"
                className={`h-10 w-10 rounded-full cursor-pointer`}
                />
            </Link>
        </div>
    )
}