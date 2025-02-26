import Divider from "@/components/Divider"
import Footer from "@/components/Footer";
import Header from "@/components/Header"
export default function FormacaoPolitica() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center px-12 bg-preto gap-10 min-h-screen">
        <div className="flex items-center flex-col gap-10">
          <h1 className="text-4xl text-branco text-center">FORMAÇÃO POLÍTICA</h1>
          <Divider/>
        </div>
        <div className="p-10 flex flex-col items-center justify-center  lg:w-3/5 w-full rounded-lg  bg-cinza gap-5 text-xl  text-branco indent-1 ">
          <p>O Curso de Introdução à Formação Política do Coletivo Casulo pretende oferecer a educadores, estudantes, coletivos e movimentos sociais uma visão histórica, filosófica e sociológica sobre conceitos e teorias políticas produzidas em diferentes contextos históricos e geográficos. Como se trata de um curso de caráter introdutório, o projeto pedagógico do curso prevê a disponibilização de textos básicos para leitura prévia, sempre relacionados à temática específica a ser programada, visando ao melhor aproveitamento possível de cada participante.  </p>
          <p>O curso não apresenta um formato rígido, pois este pode ser organizado de acordo com o interesse das organizações envolvidas, mediante deliberação da Coordenação Político-Pedagógica a ser indicada pelos parceiros proponentes. Isso inclui a possibilidade de oferta do curso nas modalidades presencial ou online; a escolha dos temas a serem tratados; e a duração de cada encontro e sua carga horária total.</p>
          <p>Dentre os temas possíveis a serem tratados no Curso de Introdução à Formação Política, podemos listar: pensamento social brasileiro; fascismo e neofascismo; capitalismo; neoliberalismo; socialismo; o que é política; introdução à economia; meio ambiente; políticas públicas; políticas sociais e direitos; Sistema Único de Saúde; etc.</p>
        </div>
      </div>
      <Footer/>
    </>
  );
}