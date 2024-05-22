
import Divider from "@/components/Divider"
import Footer from "@/components/Footer";
import Header from "@/components/Header"
export default function Proposta3() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center px-12 bg-preto gap-5">
        <div className="flex items-center flex-col gap-5">
          <h1 className="text-4xl text-branco text-center">Justiça,direito e periferias</h1>
          <Divider />
        </div>
        <div className="p-10 flex flex-col items-center justify-center  lg:w-3/5 w-full rounded-lg  bg-cinza gap-5">
          <p className="text-xl  text-branco indent-1 ">A arte e a educação colonial estiveram profundamente interligadas durante o período em que o colonialismo estava em vigor. A colonização frequentemente envolveu a imposição de valores culturais e sistemas de educação europeus às culturas e populações indígenas dos territórios colonizados. A arte, por sua vez, foi frequentemente usada como uma ferramenta para difundir esses valores e sistemas de educação.</p>
          <p className="text-xl  text-branco indent-1 ">Na maioria dos casos, os sistemas educacionais coloniais enfatizavam a supremacia da cultura europeia e a inferioridade das culturas locais. Os estudantes eram frequentemente ensinados em línguas europeias, aprendiam a história, a literatura e a arte europeias e eram doutrinados com os valores europeus, muitas vezes sob a justificativa de "civilizar" as populações locais.</p>
          <p className="text-xl  text-branco indent-1 ">A arte era frequentemente utilizada como um meio para transmitir esses valores e ideias. Na África, por exemplo, a arte colonial frequentemente enfatizava a superioridade da cultura europeia em relação às culturas locais. O Museu do Homem, em Paris, exibiu uma grande quantidade de arte africana, que foi apresentada como "primitiva" e "bárbara". Essa visão desvalorizante da arte africana ajudou a reforçar a ideia de que as culturas africanas eram inferiores à cultura europeia.</p>
          <p className="text-xl  text-branco indent-1 ">No entanto, alguns estudiosos argumentam que, apesar desses efeitos negativos, a arte e a educação colonial também tiveram um papel positivo na história de alguns territórios colonizados. A introdução de sistemas educacionais formais em algumas partes da África, por exemplo, ajudou a reduzir as taxas de analfabetismo e aumentar o acesso a oportunidades educacionais. Além disso, muitos estudiosos locais foram treinados na arte e na história europeias, e posteriormente foram capazes de usar esse conhecimento para promover suas próprias culturas e produzir sua própria arte.</p>
          <p className="text-xl  text-branco indent-1 ">Em resumo, a arte e a educação colonial estiveram profundamente interligadas durante o período de colonização. Embora a arte tenha sido frequentemente utilizada como uma ferramenta para impor valores culturais europeus e subverter a cultura local, a introdução de sistemas educacionais formais também teve alguns efeitos positivos. No entanto, é importante reconhecer o papel que a arte e a educação colonial desempenharam na história do colonialismo e suas implicações para as culturas locais.</p>
          <div className="relative w-screen flex justify-center items-center  right-5">
            <iframe width="640" height="360" src="https://www.youtube.com/embed/BXJL_HGaLj4" title="Lorem Ipsum Video - SEO Para" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

