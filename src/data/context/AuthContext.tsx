import firebase from "@/firebase/config";
import Usuario from "@/model/Usuario"
import { createContext, useState } from "react"
import { useRouter } from "next/router";

interface AuthContextProps {
    usuario?: Usuario
    loginGoogle?: () => Promise<void>

}
const AuthContext = createContext<AuthContextProps>({})


async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()

    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token: token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL,
    }
}



export function AuthProvider(props) {
    const [usuario, setUsuario] = useState<Usuario>(null)
    const router = useRouter()

    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )
        if (resp.user?.email) {
            const usuario = await usuarioNormalizado(resp.user)
            setUsuario(usuario)
            router.push('/')
        } else {
            console.log('Login Google deu problema...')
        }
    }

    return (
        <AuthContext.Provider value={{
            usuario,
            loginGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext