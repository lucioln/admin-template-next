import Link from "next/link"

interface MenuItemProps {
    url?: string
    texto: string
    icon: any
    className?: string
    onClick?: (evento: any) => void 
}

export default function MenuItem(props: MenuItemProps) {

    function renderizarItem() {
        return (
            <p className={`flex flex-col justify-center items-center h-20 w-20`}>
                {props.icon}
                <span className={`text-xs font-light `}>
                    {props.texto}
                </span>
            </p>
        )
    }

    return (
        <li onClick={props.onClick} className={`cursor-pointer text-gray-600 hover:bg-blue-100  
        dark:text-gray-200 dark:hover:bg-blue-700 ${props.className}`}>
            {props.url ? (
                <Link href={props.url}>
                   {renderizarItem()}
                </Link>
            ) : (
                renderizarItem()
            )}
        </li>

    )
}