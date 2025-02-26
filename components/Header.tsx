import Image from "next/image";
import Link from "next/link";
export default function Header() {
    return (
        <>
            <header className="flex items-center justify-between p-4 h-20 sticky bg-preto">
                <div className="header-logo">
                    <a href="/"><Image src="/images/logo-coletivo-pb.png" width={128} height={128} alt="logo-w-d2" id="logo-w-d2"/></a>
                </div>
                <ul className="flex justify-evenly gap-2 items-center">
                    <li className=" text-lg md:text-xl p-2 list-none text-branco hover:-translate-y-1 transition-all"><Link href="/sobreColetivo" className="">Sobre Nós</Link></li>
                    <li className="text-lg md:text-xl p-2 list-none text-branco hover:-translate-y-1 transition-all hidden md:block"><Link href="/#d4" className="">Projetos</Link></li>
                    <li className=" text-lg md:text-xl p-2 list-none text-branco hover:-translate-y-1 transition-all"><Link href="/cronograma" className="">Histórico</Link></li>
                </ul>
            </header>
        </>
    );
} 