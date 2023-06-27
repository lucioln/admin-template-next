import Layout from '@/components/template/Layout'
import useAuth from '@/data/hooks/useAuth'

export default function Home() {
  const {usuario} = useAuth()
  return (
    <Layout titulo='Página inicial' subtitulo='Em construção'>
      <h3>Conteudo!!!</h3>
    </Layout>
  )
}
