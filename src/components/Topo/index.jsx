import estilos from "./Topo.module.css"
import Image from 'next/image'
import Logo from "../../../public/barbearia.png"
import { FiMoon } from "react-icons/fi";
import { CiSun } from "react-icons/ci";

export default function Topo() {
    

    return (
        <header className={estilos.container_topo}>
            <div className={estilos.container_largura}>
                <Image src={Logo} className={estilos.logo} alt="logo"></Image>
                <button className={estilos.botao}><FiMoon /></button>
            </div>
        </header>
    )
}