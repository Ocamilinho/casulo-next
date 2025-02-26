import Divider from "@/components/Divider";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image";
import Integrante from "@/components/quem-somos/Integrante";
import { integrantes } from "@/public/integrantes";

export default function SobreColetivo() {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center gap-10">
				<div className="bg-cinza p-7 min-h-screen">
					<div className="flex lg:flex-row flex-col shadow-2xl">
						<Image src="/images/reuniao-casulo.jpg" id="imagem-sc" alt="reunião coletivo" width="600" height={0} />
						<div className="flex justify-between p-8 gap-8 bg-preto flex-col flex-wrap col-span-2 ">
							<div className="flex flex-col flex-nowrap gap-8">
								<h1 className="text-2xl md:text-4xl text-branco font-bold">Quem somos?</h1>
								<Divider />
								<p className="text-lg md:text-xl text-branco">Coletivo Casulo: coletivo de militantes que atuam no campo da educação popular e da formação política de base, assim como na organização das comunidades periféricas. Organizado no final de 2018, na Região Metropolitana do Rio de Janeiro, tem desenvolvido desde então diversos projetos, cursos, oficinas, palestras, debates e rodas de conversa sobre temas de interesse da classe trabalhadora numa perspectiva socialista e interseccional – classista, de gênero e antirracista –, seguindo a pedagogia e a metodologia freiriana.</p>
								<div className="inter">
									<a href="./downloads-files/manifesto.pdf" className="text-preto" download><button className="p-5 text-xl w-54 border-0 rounded-lg bg-rosa text-branco">Entenda Mais!</button></a>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-preto p-7 flex flex-col gap-5 mt-4">
						<div className="flex flex-col gap-5">
							<h1 className="text-2xl md:text-4xl text-branco font-bold">Atual coordenação</h1>
							<Divider/>
							<p className="text-lg md:text-xl text-branco">A atual coordenação do Coletivo Casulo, reorganizada em 2024, conta com as/os seguintes educadoras/es e ativistas na coordenação dos seus projetos de formação e de educação popular:</p>
						</div>
						<div className="flex flex-col gap-10 ">
							{integrantes.map((integrante, index) => (
									<Integrante
										key={index}
										name={integrante.name}
										description={integrante.description}
										imageSrc={integrante.imageSrc}
									/>
								))}
						</div>
					</div>
				</div>
				
			</div>
			
			
			<Footer />
		</>
	);
}

