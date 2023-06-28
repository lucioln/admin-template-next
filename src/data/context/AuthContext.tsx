import firebase from "@/firebase/config";
import Usuario from "@/model/Usuario"
import { createContext, useEffect, useState } from "react"
import { useRouter } from "next/router";
import Cookies from 'js-cookie'

interface AuthContextProps {
    usuario?: Usuario
    carregando?: boolean
    loginGoogle?: () => Promise<void>
    login?: (email, senha) => Promise<void>
    cadastrar?: (email, senha) => Promise<void>
    logout?: () => Promise<void>

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

function gerenciarCookie(logado: boolean) {
    if (logado) {
        Cookies.set('admin-template-auth', logado, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-auth')
    }
}


export function AuthProvider(props) {
    const [usuario, setUsuario] = useState<Usuario>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const router = useRouter()

    async function configurarSessao(usuarioFirebase) {
        if (usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setLoading(false)
            return usuario.email
        } else {
            setUsuario(null)
            gerenciarCookie(false)
            setLoading(false)
            return false
        }
    }

    async function loginGoogle() {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            if (resp.user?.email) {
                await configurarSessao(resp.user)
                router.push('/')
            }
        } finally {
            setLoading(false)
        }
    }

    async function login(email, senha) {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithEmailAndPassword(email, senha)
            await configurarSessao(resp.user)
            router.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function cadastrar(email, senha) {
        try {
            setLoading(true)
            const resp = await firebase.auth().createUserWithEmailAndPassword(email, senha)
            await configurarSessao(resp.user)
            router.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (Cookies.get('admin-template-auth')) {
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
            return () => cancelar()
        } else {
            setLoading(false)
        }
    }, [])



    return (
        <AuthContext.Provider value={{
            usuario,
            carregando: loading,
            loginGoogle,
            login,
            cadastrar,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext