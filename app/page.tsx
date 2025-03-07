import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Divider from "@/components/Divider";

import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-10 md:p-20 bg-cover flex flex-col items-center bg-greve">
        <div className="flex items-center flex-col flex-wrap gap-11 ">
          <h1 className="text-2xl md:text-4xl text-branco text-center font-semibold">
            Projetos de Educação Popular e Formação Política
          </h1>
          <Divider />
          <div className="text-md md:text-xl text-branco text-justify md:text-center flex flex-col gap-5">
            <p>
              O Coletivo Casulo, enquanto organização militante, tem se
              constituído numa práxis voltada para a articulação política, para
              a militância e para a apresentação de projetos voltados para a
              educação popular e para a formação política. Nesse sentido, nos
              autodefinimos como uma{" "}
              <span className="font-bold">ESCOLA DE FORMAÇÃO</span> em processo
              de construção. Apresentamos nesta página uma síntese desses
              trabalhos. Caso haja interesse em dialogar conosco, visando à
              parceria dos projetos citados ou similares, não deixe de entrar em
              contato com a nossa Coordenação.{" "}
            </p>
            <p>
              Importante registrar que todas as nossas construções são coletivas
              e de acordo com a realidade específica de cada movimento social,
              cada região, e em consonância com a leitura política necessária a
              se fazer da conjuntura, seja local, regional ou nacional. Nossa
              metodologia de trabalho é dialógica e política e tem como base e
              inspiração a pedagogia elaborada historicamente por Paulo Freire.
              Assim, <span className="underline underline-offset-4">todas</span>{" "}
              as propostas de cursos citadas neste site são planejadas
              coletivamente e avaliadas permanentemente por Coordenações
              Político-Pedagógicas (CPP) responsáveis pela aplicação e
              desenvolvimento do curso, durante todas as suas etapas de
              execução. As CPP são constituídas de acordo com a realidade de
              cada curso, envolvendo, democraticamente, representantes indicados
              por todos os coletivos e educadoras/es envolvidas/os.
            </p>
          </div>

          <Link href="/sobreColetivo">
            <button className="p-5 w-56 text-xl rounded-lg border-0 text-branco bg-preto shadow-lg hover:-translate-y-3 transition-all">
              Saiba Mais!
            </button>
          </Link>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col shadow-2xl">
        <Image
          src="/images/paulo-freire-pb.png"
          width="600"
          height={0}
          alt="paulofreire"
          id="paulofreire-d3"
        />
        <div className="flex justify-between p-8 gap-8 bg-preto flex-col flex-wrap col-span-2 ">
          <div className="flex flex-col flex-nowrap gap-8">
            <h1 className="text-2xl md:text-4xl text-branco font-bold">
              Quem foi Paulo Freire?
            </h1>
            <Divider />
            <p className=" text-md md:text-xl text-branco">
              Paulo Freire (1921-1997) é Patrono da Educação Brasileira e autor
              da “Pedagogia do Oprimido”. Conhecido pelo método de alfabetização
              de adultos que leva seu nome, Freire desenvolveu um pensamento
              pedagógico que defende que o objetivo maior da educação é
              conscientizar o estudante. Seu trabalho como educador mudou a
              forma de alfabetização dentro e fora do Brasil, e ao tratar o
              processo educacional como um ato de conscientização, Paulo Freire
              acabou sendo preso, acusado de “subversão”, pela ditadura militar
              brasileira (1964 – 1985), e após 72 dias em cárcere foi um dos
              primeiros brasileiros exilados.
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center flex-col flex-wrap pb-8 bg-preto"
        id="d4"
      >
        <div className="flex items-center justify-center flex-col flex-nowrap gap-2 my-8">
          <h1 className="text-2xl md:text-4xl text-branco font-bold">
            Escola de Formaçzão
          </h1>
          <h2 className="text-md md:text-xl text-branco">
            Principais Propostas
          </h2>
        </div>

        <div className="flex flex-wrap gap-5 items-center justify-center p-5">
          <Card
            title="Minicurso"
            subTitle="Paulo Freire e a nossa escola: prática educativa e realidade educacional"
            number="1"
            urlRef="escola/minicurso"
          />
          <Card
            title="Curso de extensão africanidades"
            subTitle="História, cultura e contribuições dos povos africanos na sociedade brasileira"
            number="2"
            urlRef="escola/cursodeextensao"
          />
          <Card
            title="Pré-técnico"
            subTitle="Preparação para o ensino técnico: fundamentos e desenvolvimento de habilidades"
            number="3"
            urlRef="escola/pretecnico"
          />
          <Card
            title="Formação política"
            subTitle="Consciência cidadã e participação ativa na sociedade"
            number="4"
            urlRef="escola/formacaopolitica"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
