import { IconConfigs, IconHome, IconNotifications } from "../icons"
import MenuItem from "./MenuItem"

export default function MenuLateral(){
    return (
        <aside>
            <ul>
                <MenuItem url="/" texto="Home" icon={IconHome}/>
                <MenuItem url="/ajustes" texto="Ajustes" icon={IconConfigs} />
                <MenuItem url="/notificacoes" texto="Notificações" icon={IconNotifications} />
            </ul>
        </aside>
    )
}