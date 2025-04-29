import estilos from "./SecaoInformacoes.module.css"

export default function SecaoInformacoes() {
    return(
        <section className={estilos.secao_informacoes}>
            <div className={estilos.container_texto}>
                <h1>
                    Bem-vindo a Barber Shop
                </h1>
                <p className={estilos.paragrafo}>
                    Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
                </p>
                <p className={estilos.paragrafo}>
                    Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
                </p>
                <p className={estilos.paragrafo_destaque}>
                    S. Kelly
                </p>
            </div>
        </section>
    )
}