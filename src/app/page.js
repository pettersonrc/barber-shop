import Image from "next/image";
import styles from "./page.module.css";
import Topo from "@/components/Topo";
import SecaoBanner from "@/components/SecaoBanner";
import SecaoInformacoes from "@/components/SecaoInformacoes";

export default function Home() {
    return (
        <div>
            <Topo />
            <SecaoBanner />
            <SecaoInformacoes />
        </div>
    );
}
