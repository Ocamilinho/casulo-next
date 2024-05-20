import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Proposta2() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center px-12 bg-preto gap-5">
        <div className="flex items-center flex-col gap-6">
          <h1 className="text-4xl text-branco">Projeto de economia solidária</h1>
          <Divider/>
        </div>
        <div className="p-10 flex flex-col items-center justify-center  w-3/5 rounded-lg  bg-cinza gap-5">
        <p className="text-xl  text-branco indent-1 ">Um projeto de economia solidária é uma iniciativa que busca promover a justiça social e econômica através da criação de empreendimentos coletivos que visam a autogestão e a solidariedade entre seus membros. Esses projetos surgem como uma alternativa ao modelo tradicional de produção e consumo, que muitas vezes é baseado na exploração do trabalho e no acúmulo de lucros por um pequeno grupo de pessoas.</p>
        <p className="text-xl  text-branco indent-1 ">Na economia solidária, a ideia é que as pessoas se unam para criar e gerir negócios que atendam às necessidades da comunidade e que sejam baseados em valores como cooperação, solidariedade, democracia e sustentabilidade. Esses empreendimentos podem assumir diferentes formas, como cooperativas, associações, empresas autogestionárias e outros tipos de organizações sem fins lucrativos.</p>
        <p className="text-xl  text-branco indent-1 ">Um dos objetivos do projeto de economia solidária é promover a inclusão social e econômica de grupos que muitas vezes são marginalizados pelo mercado de trabalho tradicional, como mulheres, jovens, pessoas com deficiência, idosos, entre outros. Ao participar de um empreendimento solidário, essas pessoas têm a oportunidade de ganhar uma renda digna, desenvolver suas habilidades e competências e se tornar mais autônomas e independentes.</p>
        <p className="text-xl  text-branco indent-1 ">Além disso, a economia solidária também tem um forte componente de responsabilidade social e ambiental. Os empreendimentos solidários buscam criar produtos e serviços que sejam sustentáveis e que promovam a preservação do meio ambiente. Eles também se preocupam com o impacto social de suas atividades, buscando contribuir para o desenvolvimento das comunidades em que estão inseridos.</p>
        <p className="text-xl  text-branco indent-1 ">Para que um projeto de economia solidária seja bem-sucedido, é necessário que haja uma ampla articulação entre os diferentes atores envolvidos, como trabalhadores, gestores, clientes, fornecedores, entre outros. É importante que haja transparência, diálogo e participação democrática em todas as etapas do processo, desde a concepção do projeto até a sua implementação e avaliação.</p>
        <p className="text-xl  text-branco indent-1 ">Em resumo, um projeto de economia solidária é uma alternativa viável e importante para a construção de uma sociedade mais justa e solidária. Ao promover a autogestão, a cooperação e a sustentabilidade, esses projetos contribuem para o fortalecimento da economia local e para a inclusão social e econômica de grupos historicamente excluídos.</p>
          <div className="relative w-screen flex justify-center items-center  right-5">
            <iframe width="640" height="360" src="https://www.youtube.com/embed/BXJL_HGaLj4" title="Lorem Ipsum Video - SEO Para" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
