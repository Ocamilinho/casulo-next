import Divider from "@/components/Divider"
import Footer from "@/components/Footer";
import Header from "@/components/Header"
export default function PreTecnico() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center bg-preto md:pb-5 md:gap-5">
        <div className="flex flex-col gap-10 items-center justify-center bg-greve p-10 w-full">
          <h1 className="text-2xl md:text-4xl font-bold text-branco text-center">PRÉ-TÉCNICO</h1>
          <Divider/>
        </div>
        <div className="p-10 flex flex-col items-center justify-start min-h-screen lg:w-3/5 w-full rounded-lg  bg-cinza gap-5 text-xl text-branco indent-1 ">
          <p>O Coletivo Casulo, em parceria com a Faculdade de Formação de Professores (FFP) da Universidade do Estado do Rio de Janeiro (UERJ) e o Instituto Federal do Rio de Janeiro (IFRJ), Campus São Gonçalo, vem realizando, a cada ano, desde 2022, um curso de extensão com o caráter de formação básica, com o objetivo de preparar academicamente adolescentes que estejam cursando o 9º ano do ensino fundamental em escolas públicas da região, visando à participação mais qualificada desses estudantes nos processos seletivos de ingresso nas escolas públicas federais, como o IFRJ, o Colégio Pedro II e o IFF – Instituto Federal Fluminense. Como o curso é oferecido presencialmente no campus São Gonçalo do IFRJ, podemos considerar como a região de abrangência do curso as escolas federais mais próximas geograficamente. Assim, além do campus citado, portanto, temos o IFRJ – Campus Niterói, localizado no bairro Sapê; o Instituto Federal Fluminense (IFF) – Campus Maricá; e o Colégio Pedro II, Unidade Niterói, localizada no bairro Barreto.</p>
          <p>O curso preparatório é ministrado em dois turnos, com uma turma no turno da manhã e uma turma no turno da tarde, em dois dias da semana, terças e quintas-feiras. Como é ofertado na modalidade presencial, as aulas e encontros de tutoria ocorrem no auditório do IFRJ - campus São Gonçalo para estudantes de turmas de 9º ano das escolas das redes municipais de ensino que estabeleçam parceria institucional com o IFRJ, assim como associações e outras organizações da sociedade civil que implementem projetos de formação e qualificação de adolescentes residentes nas periferias de São Gonçalo e outros municípios do entorno do campus, como Itaboraí, Maricá e Niterói. Os componentes curriculares do curso obedecem às exigências programáticas que constam dos Editais de acesso ao ensino médio nas escolas federais – que são as disciplinas de Matemática e Língua Portuguesa –, podendo ser acrescidas de dois componentes programáticos voltados para a formação complementar e cidadã dos estudantes. Esses componentes complementares podem ser ofertados ou não, a depender da disponibilidade das instituições parceiras e dos docentes envolvidos</p>
          <p>O curso conta com um total de 112 horas. A metodologia do curso compreende a utilização de metade da carga horária (56 horas) para a oferta das aulas dos conteúdos curriculares, com a outra metade (56 horas) sendo reservada para a tutoria, com presença facultativa. As aulas presenciais e a tutoria são ministradas por estudantes dos cursos de Licenciaturas em Língua Portuguesa e em Matemática oferecidos pela FFP/UERJ. A supervisão desses/as estagiários/as ficará a cargo dos/as docentes do IFRJ Campus São Gonçalo comprometidos institucionalmente com o curso. As informações relativas à carga horária podem ser alteradas de ano para ano, a depender da disponibilidade das/os escolas e das/os docentes que participam da equipe político-pedagógica.</p>
        </div>
      </div>
      <Footer/>
    </>
  );
}