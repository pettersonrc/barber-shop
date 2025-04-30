"use client";

import { useState } from "react";
import Image from "next/image";
import estilos from "./page.module.css";
import Logo from "../../public/barbearia.png";
import { FiMoon } from "react-icons/fi";
import { CiSun } from "react-icons/ci";

export default function Home() {
    const [ehTemaEscuro, setEhTemaEscuro] = useState(false);
    const [botaoIcone, setBotaoIcone] = useState(<FiMoon />);

    const alterarTema = () => {
        setEhTemaEscuro(!ehTemaEscuro);

        if (ehTemaEscuro) {
            setBotaoIcone(<FiMoon />);
        } else {
            setBotaoIcone(<CiSun />);
        }
    };

    return (
        <div
            className={ehTemaEscuro ? estilos.modo_escuro : estilos.modo_claro}
        >
            <header className={estilos.container_topo}>
                <div className={estilos.container_largura}>
                    <Image
                        src={Logo}
                        className={estilos.logo}
                        alt="logo"
                    ></Image>
                    <button className={estilos.botao} onClick={alterarTema}>
                        {botaoIcone}
                    </button>
                </div>
            </header>
            <section className={estilos.banner}></section>
            <section className={estilos.secao_informacoes}>
                <div className={estilos.container_texto}>
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p className={estilos.paragrafo}>
                        Nossa barbearia sempre oferece profissionais de
                        qualidade e estamos prontos para lidar com suas maiores
                        expectativas.
                    </p>
                    <p className={estilos.paragrafo}>
                        Nossos serviços são dedicados ao seu sucesso pessoal.
                        Aqui temos uma equipe premiada que demonstrou o talento
                        de mestres barbeiros em vários concursos de estilo.
                        Deixe nosso barbeiro ser seu estilista pessoal e você
                        nunca ficará desapontado.
                    </p>
                    <p className={estilos.paragrafo_destaque}>S. Kelly</p>
                </div>
            </section>
        </div>
    );
}
