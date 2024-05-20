import Divider from "@/components/Divider";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image";
export default function SobreColetivo() {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center">
				<div className="bg-cinza p-7 h-screen">
					<div className="flex rounded-2xl">
						<Image src="/reuniao-casulo.jpg" id="imagem-sc" alt="reunião coletivo" width={600} height={0} />
						<div className="flex justify-between p-8 gap-8 bg-preto flex-col flex-wrap">
							<div className="flex flex-col flex-nowrap gap-8">
								<h1 className="text-4xl text-branco">Quem Somos?</h1>
								<Divider />
								<p className="text-xl text-branco">O Coletivo Casulo não se constituiu para ser uma instituição burocrática incorporada a dinâmica da sociedade civil brasileira, com estatuto e regras rigidamente definidas. É um Coletivo que vive sua historicidade nessa sociedade e, nela e partir dela, busca sua ampliação e posicionamento na conjuntura, defendendo políticas que não sejam soluções técnicas, mas que impulsionou organizações democráticas de âmbito comunitário</p>
								<div className="inter">
									<a href="./downloads-files/manifesto.pdf" className="text-preto" download><button className="p-5 text-xl w-1/3 border-0 rounded-lg bg-rosa text-branco">Entenda Mais!</button></a>
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

