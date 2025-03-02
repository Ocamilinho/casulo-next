import Divider from "@/components/Divider"
import Footer from "@/components/Footer";
import Header from "@/components/Header"
export default function Minicurso() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center bg-preto md:pb-5 md:gap-5">
        <div className="flex flex-col gap-10 items-center justify-center bg-greve p-10 w-full">
          <h1 className="text-2xl md:text-4xl font-bold text-branco text-center">“Paulo Freire e a nossa escola: prática educativa e realidade educacional”</h1>
          <Divider/>
        </div>
        <div className="p-10 flex flex-col items-center justify-start min-h-screen lg:w-3/5 w-full md:rounded-lg  bg-cinza gap-5 text-md md:text-xl text-branco indent-1">
          <p>Paulo Freire, além da sua inegável contribuição para pensar o lugar da educação na sociedade e a criação de práticas educativas comprometidas com um projeto democrático e transformador da realidade, ganha destaque, nos últimos anos, como um alvo de setores mais reacionários da classe dominante, naquilo que denominaram como “guerra cultural”, recebendo, da parte destes, a alcunha de “inimigo da educação brasileira”. No contexto escolar, trabalhadoras da educação pouco conseguem refletir sobre a importância da sua prática educativa e o seu contexto de trabalho, ao passo que se intensifica, por projetos como “escola sem partido”, à perseguição ao professorado e qualquer iniciativa que se contraponha a uma conduta escolar domesticadora.</p>
          <p>A compreensão da concepção pedagógica de Paulo Freire pode influir na prática docente dos educadores e educadoras, na percepção dos contextos em que essas práticas se constituem, como o do próprio exercício de reflexão sobre a prática docente. </p>
          <p>Portanto, em síntese, afirmamos três objetivos para a experiência do Minicurso Paulo Freire e a nossa escola: prática docente e realidade educacional.</p>
          <ul className="list-disc">
            <li>Disputar a memória e o legado de Paulo Freire.</li>
            <li>Investir na formação e estimular o pensamento crítico de jovens licenciandos e de docentes que atuam nas redes pública e privada.</li>
            <li>Refletir sobre a prática educativa desenvolvida por educadores e educadores no contexto escolar.</li>
          </ul>
          <p>A primeira experiência de aplicação do minicurso pelo Coletivo Casulo ocorreu, com muito sucesso, em parceria com a Escola Nacional Paulo Freire e o SINPRO – Niterói em região, entre setembro e novembro de 2023, nas dependências do Colégio Assunção, em São Francisco, Niterói. Foram três encontros aos sábados, pela manhã e pela tarde, um a cada mês, reunindo dezenas de educadoras/es que procuraram desenvolver/aprofundar reflexões sobre a vida e a obra de Freire.</p>
        </div>
      </div>
      <Footer/>
    </>
  );
}