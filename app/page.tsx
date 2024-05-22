import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Divider from "@/components/Divider";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-20 bg-cover flex flex-col items-center bg-greve">
        <div className="flex items-center flex-col flex-wrap gap-11 ">
          <h1 className="text-4xl text-branco text-center"> A corrente do pensamento!</h1>
          <Divider />
          <p className="text-xl text-branco text-justify md:text-center">(...) O fato de uma multidão de seres humanos seja conduzida a pensar coerentemente e de
            maneira unitária a realidade presente é um fato "filosófico" bem mais importante e "original" do que a
            descoberta, por parte de um "gênio filosófico", de uma nova verdade que permaneça como patrimônio de
            pequenos grupos intelectuais"</p>
          <Link href="/sobreColetivo"><button className="p-5 w-56 text-xl rounded-lg border-0 text-branco bg-preto shadow-lg hover:-translate-y-3 transition-all">Saiba Mais!</button></Link>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col shadow-2xl">
        <Image src="/paulo-freire-pb.png" width="600" height={0} alt="paulofreire" id="paulofreire-d3" />
        <div className="flex justify-between p-8 gap-8 bg-preto flex-col flex-wrap col-span-2 ">
          <div className="flex flex-col flex-nowrap gap-8">
            <h1 className="text-4xl text-branco">Quem foi Paulo Freire?</h1>
            <Divider />
            <p className="text-xl text-branco">Paulo Freire (1921-1997) é Patrono da Educação Brasileira e autor da “Pedagogia do Oprimido”. Conhecido pelo método de alfabetização de adultos que leva seu nome, Freire desenvolveu um pensamento pedagógico que defende que o objetivo maior da educação é conscientizar o estudante. Seu trabalho como educador mudou a forma de alfabetização dentro e fora do Brasil, e ao tratar o processo educacional como um ato de conscientização, Paulo Freire acabou sendo preso, acusado de “subversão”, pela ditadura militar brasileira (1964 – 1985), e após 72 dias em cárcere foi um dos primeiros brasileiros exilados.</p>
          </div>
        </div>


      </div>
      <div className="flex items-center justify-center flex-col flex-wrap pb-8 bg-preto" id="d4">
        <div className="flex items-center justify-center flex-col flex-nowrap gap-2 my-8">
          <h1 className="text-4xl text-branco">Escola de Formação</h1>
          <h2 className="text-xl text-branco">Principais Propostas</h2>
        </div>


        <div className="flex items-center flex-row gap-4">
          <ul className="flex items-center justify-center gap-6 flex-row flex-wrap">
            <Link href="/proposta1" className="ancora-card">
              <li className="flex p-5 flex-col flex-nowrap gap-3 bg-rosa rounded-2xl min-h-80 w-80 md:w-96 md:h-96 hover:-translate-y-3 transition-all">
                <span className="flex items-center justify-center w-16 h-16 text-5xl  rounded-full text-preto bg-branco ">1</span>
                <p className="text-3xl mt-2 text-branco break-word ">A arte e a educação decolonial</p>
                <Divider />
                <p className="text-xl m-2 text-branco ">Descolonizar a arte e educação é valorizar saberes e culturas diversas</p>
              </li>
            </Link>

            <Link href="/proposta2" className="ancora-card">
              <li className="flex p-5 flex-col flex-nowrap gap-3 bg-rosa rounded-2xl min-h-80 w-80 md:w-96 md:h-96  hover:-translate-y-3 transition-all">
                <span className="flex items-center justify-center w-16 h-16 text-5xl  rounded-full text-preto bg-branco ">2</span>
                <p className="text-3xl mt-2 text-branco break-word ">Construindo um projeto de economia solidária</p>
                <Divider />
                <p className="text-xl m-2 text-branco ">Juntos, criamos oportunidades e fortalecemos a economia solidária.</p>
              </li>
            </Link>

            <Link href="/proposta3" className="ancora-card">
              <li className="flex p-5 flex-col flex-nowrap gap-3 bg-rosa rounded-2xl min-h-80 w-80 md:w-96 md:h-96 hover:-translate-y-3 transition-all">
                <span className="flex items-center justify-center w-16 h-16 text-5xl  rounded-full text-preto bg-branco ">3</span>
                <p className="text-3xl mt-2 text-branco break-word ">Justiça,direito e periferias</p>
                <Divider />
                <p className="text-xl m-2 text-branco ">Assim como o acesso à Justiça, o direito nas periferias é limitado.</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Footer />
    </>

  );
}
