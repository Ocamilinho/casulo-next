import Divider from "@/components/Divider";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image";
import Integrante from "@/components/quem-somos/Integrante";


const integrantes = [
    {
        name: "Fernando Brame",
        description: "Professor de Sociologia. Mestre e doutor em Ciências Sociais (UERJ). Trabalha no IFRJ, Campus Nilópolis.",
        imageSrc: "/integrantes/integrante_generico.jpg",
    },
    {
        name: "Ines Rocha Petereit",
        description: "Professora de Artes Cênicas. Mestre em Educação Física (UNIVERSO). Atua na SEEDUC/RJ, em escolas de São Gonçalo.",
        imageSrc: "/integrantes/integrante_generico.jpg",
    },
    {
        name: "José Manuel Faria",
        description: "Professor de História da SEEDUC/RJ e da rede municipal de Itaboraí. Mestre em História Social (UERJ/FFP). Especialista em Ensino de Histórias e Culturas Africanas e Afro-brasileiras (IFRJ).",
        imageSrc: "/integrantes/integrante_generico.jpg", 
    },
    {
        name: "Luiz Claudio da Silva",
        description: "Professor de Matemática. Trabalhou na SEEDUC/RJ em Niterói e São Gonçalo. Doutor em Educação (UFF), com especialização em Etnomatemática.",
        imageSrc: "/integrantes/integrante_generico.jpg", 
    },
    {
        name: "Ortelia Moraes",
        description: "Professora de História. Atua na rede privada de Niterói. Atualmente, é diretora do SINPRO - Sindicato dos Professores de Niterói e São Gonçalo.",
        imageSrc: "/integrantes/integrante_generico.jpg",
    },
    {
        name: "Paulo Gomes Coutinho",
        description: "Professor de História. Especialista (UFRJ) e Mestre em Educação (UERJ). Atua na SEEDUC/RJ e na rede municipal do Rio de Janeiro, em escolas da Zona Oeste.",
        imageSrc: "/integrantes/integrante_generico.jpg",
    },
    {
        name: "Ricardo Cesar Costa",
        description: "Professor de Sociologia. Mestre em Ciência Política (UFF) e doutor em Serviço Social (UERJ). Trabalha no IFRJ, Campus Arraial do Cabo.",
        imageSrc: "/integrantes/integrante_generico.jpg",
    },
    {
        name: "Roberto Carlos Costa Silva",
        description: "Professor de História. Especialista em Ensino de Histórias e Culturas Africanas e Afro-brasileiras (IFRJ), com atuação na Baixada Fluminense.",
        imageSrc: "/integrantes/integrante_generico.jpg",
    },
    {
        name: "Sérgio Oliveira",
        description: "Professor de Filosofia. Especialista em Educação e em História (UFF) e Gestão em Administração Pública (UFJF). Mestre em História Social do Território (UERJ/FFP). Trabalhou na SEEDUC/RJ, FAETEC e rede privada de ensino em escolas de Niterói e São Gonçalo.",
        imageSrc: "/integrantes/integrante_generico.jpg",
    },
    {
        name: "Simone Lauar",
        description: "Comunicadora popular que atua nas Redes da Maré e na região de S. Gonçalo.",
        imageSrc: "/integrantes/integrante_generico.jpg",
    },
    {
        name: "Tânia Correia",
        description: "Assistente Social e Professora de Geografia. Especialista em Educação Inclusiva. Atua na REDE EMANCIPA de educação popular e na rede municipal de S. Gonçalo.",
        imageSrc: "/integrantes/integrante_generico.jpg",
    },
];
export default function SobreColetivo() {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center gap-10">
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
					<div className="bg-preto p-7 flex flex-col gap-5 mt-4">
						<div className="flex flex-col gap-5">
							<h1 className="text-4xl text-branco">Atual coordenação</h1>
							<Divider/>
							<p className="text-xl text-branco">A atual coordenação do Coletivo Casulo, reorganizada em 2024, conta com as/os seguintes educadoras/es e ativistas na coordenação dos seus projetos de formação e de educação popular:</p>
						</div>
						<div className="flex flex-col gap-5">
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

