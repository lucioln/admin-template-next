import Link from "next/link"

interface MenuItemProps {
    url: string
    texto: string
    icon: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <li className={`hover:bg-blue-100`}>
            <Link href={props.url}>
                <p className={`flex flex-col justify-center items-center h-20 w-20`}>
                {props.icon}
                <span className={`text-xs font-light text-gray-600`}>
                    {props.texto}
                </span>
                </p>
            </Link>
        </li>
    )
}