import Divider from "@/components/Divider"
import Footer from "@/components/Footer";
import Header from "@/components/Header"
export default function CursoDeExtensao() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center bg-preto md:pb-5 md:gap-5">
        <div className="flex flex-col gap-10 items-center justify-center bg-greve p-10 w-full">
          <h1 className="text-2xl md:text-4xl font-bold text-branco text-center">CURSO DE EXTENSÃO AFRICANIDADES</h1>
          <Divider/>
        </div>
        <div className="p-10 flex flex-col items-center justify-start min-h-screen  lg:w-3/5 w-full rounded-lg  bg-cinza gap-5 text-md md:text-xl  text-branco indent-1">
          <p>Curso planejado, originalmente, para ser oferecido com uma carga horária total de 24h, com uma série de 8 encontros com 3h cada. Na sua ementa, destacamos temas tais como educação popular e a educação das relações étnico-raciais; história da África e afro-brasileira; racismo estrutural e institucional no Brasil; o mito da democracia racial; movimento negro; cultura negra e educação brasileira; ações afirmativas e política de cotas; dentre outros.</p>
          <p>O curso é oferecido pelas/os educadoras/os participantes do Coletivo Casulo e do GEPECD, parte desses especialistas oriunda da Pós-Graduação em Ensino de Histórias e Culturas Africanas e Afro-brasileiras que existe no Instituto Federal do Rio de Janeiro, campus São Gonçalo, desde 2011. Além das/os educadoras/os do nosso coletivo, contamos sempre com a participação de convidadas/os, especialistas nos temas tratados.</p>
          <p>A depender da avaliação da CPP formada juntamente com a escola, movimento social ou organização interessada no curso, este poderá apresentar uma carga horária diferente da apontada nesta apresentação, assim como poderá abarcar outras temáticas relacionadas, sempre a depender da disponibilidade de convidadas/os que desenvolvam o debate de forma qualificada.</p>
        </div>
      </div>
      <Footer/>
    </>
  );
}