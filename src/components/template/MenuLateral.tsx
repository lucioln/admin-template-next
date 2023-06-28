import { IconConfigs, IconHome, IconLogout, IconNotifications } from "../icons"
import MenuItem from "./MenuItem"
import Logo from "./Logo"
import useAuth from "@/data/hooks/useAuth"

export default function MenuLateral() {
    const {logout} = useAuth()
    return (
        <aside className={`flex flex-col bg-gray-200 text-gray-900
                dark:bg-gray-900 dark:text-gray-200`}>
            <div className={`
            flex flex-col items-center justify-center 
            h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800`}>
                <Logo />
            </div>
            <ul className={`flex-grow `}>
                <MenuItem url="/" texto="Home" icon={IconHome} />
                <MenuItem url="/ajustes" texto="Ajustes" icon={IconConfigs} />
                <MenuItem url="/notificacoes" texto="Notificações" icon={IconNotifications} />
            </ul>
            <ul>
                <MenuItem texto="Sair" icon={IconLogout} onClick={logout} 
                className={`hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-900
                            hover:text-white`}/>
            </ul>
        </aside>
    )
}