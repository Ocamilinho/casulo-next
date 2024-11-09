import Divider from "@/components/Divider";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image";
export default function SobreColetivo() {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center">
				<div className="bg-cinza p-7 min-h-screen">
					<div className="flex lg:flex-row flex-col shadow-2xl">
						<Image src="/reuniao-casulo.jpg" id="imagem-sc" alt="reunião coletivo" width="600" height={0} />
						<div className="flex justify-between p-8 gap-8 bg-preto flex-col flex-wrap col-span-2 ">
							<div className="flex flex-col flex-nowrap gap-8">
								<h1 className="text-4xl text-branco">Quem somos?</h1>
								<Divider />
								<p className="text-xl text-branco">Coletivo Casulo: coletivo de militantes que atuam no campo da educação popular e da formação política de base, assim como na organização das comunidades periféricas. Organizado no final de 2018, na Região Metropolitana do Rio de Janeiro, tem desenvolvido desde então diversos projetos, cursos, oficinas, palestras, debates e rodas de conversa sobre temas de interesse da classe trabalhadora numa perspectiva socialista e interseccional – classista, de gênero e antirracista –, seguindo a pedagogia e a metodologia freiriana.</p>
								<div className="inter">
									<a href="./downloads-files/manifesto.pdf" className="text-preto" download><button className="p-5 text-xl w-54 border-0 rounded-lg bg-rosa text-branco">Entenda Mais!</button></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

