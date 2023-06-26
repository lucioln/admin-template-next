import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/template/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout titulo='Página inicial' subtitulo='Em construção'>
      <h3>Conteudo!!!</h3>
    </Layout>
  )
}
