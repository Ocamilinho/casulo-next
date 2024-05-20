import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Divider from "@/components/Divider"
export default function QuemSomos() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center px-12 bg-preto gap-5 h-[160vh]">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl text-branco">Quem Somos!?</h1>
          <Divider />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xl text-branco indent-1 ">A história nos trouxe a necessidade de formarmos o Coletivo Casulo. A história nos convocou ao estudo, a formulação e a ação coletiva, para somarmos nossos esforços aos movimentos sociais que enfrentam seu inimigo maior: A concepção capitalista de sociedade.</p>
          <p className="text-xl  text-branco indent-1 ">O Coletivo Casulo não se constituiu para ser uma tendência política vinculada a uma agremiação partidária, nem tem a pretensão de atuar como um partido político. É um coletivo que pensa a política pelo princípio da democracia direta e popular, buscando portanto, uma relação estreita de diálogo, reflexão-crítica, aprendizagem e práxis com outros sujeitos sociais em luta contra a ordem capitalista, que têm em sua marcha globalitária exterminado milhões de vidas humanas e os ecossistemas que constituem nossa Natureza</p>
          <p className="text-xl  text-branco indent-1 ">O Coletivo Casulo não é um coletivo fechado ao diálogo com os partidos políticos do campo de esquerda, pois busca como sujeito social participar de ações conjuntas com esses partidos, desde que essas ações estejam do lado da margem da história onde se encontram as forças vivas da sociedade que trabalham e lutam pela superação das forças políticas que se alimentam da desigualdade social, degradação ambiental, desemprego e subemprego, isto é, as forças doentias, fracassadas que colocam em perigo a continuidade da vida no planeta.</p>
          <p className="text-xl  text-branco indent-1 ">O Coletivo Casulo não se constituiu para ser uma instituição burocrática incorporada a dinâmica da sociedade civil brasileira, com estatuto e regras rigidamente definidas. É um Coletivo que vive sua historicidade nessa sociedade e, nela e a partir dela, busca sua ampliação e posicionamento na conjuntura, defendendo políticas que não sejam soluções técnicas, mas que impulsionem organizações democráticas de âmbito comunitário. </p>
          <p className="text-xl  text-branco indent-1 ">Organizações que pensem o Mundo organizado comunitariamente a partir dos direitos políticos, econômicos, sociais, culturais e ambientais dos indivíduos, das famílias, dos povos tradicionais e dos direitos da natureza, para além da concepção de mundo construída pela lógica da mercadoria. </p>
          <p className="text-xl  text-branco indent-1 ">Organizações que respeitem, valorizem o diálogo crítico, a aprendizagem com os povos que não se deixaram sucumbir às ações coloniais do capitalismo e o legado  histórico da produção marxista, elementos que compreendemos como centrais para o aflorar de uma consciência viva e fortalecida, para se colocar em luta contra a doentia ação do capital.</p>
          <p className="text-xl indent-1 text-branco">O Coletivo Casulo, assim se posicionando, se entende através desse Manifesto como um Coletivo presente numa historicidade em defesa da luta de classNamees, mas compreendendo que essa luta não se esgota em si mesma, pois, no chão da sociedade, lutamos também contra as sociedades patriarcais, racistas, homofóbicas, intolerantes em relação as religiões, para mencionar alguns desdobramentos dos conflitos do capitalismo.</p>
        </div>

        <div className="relative w-screen flex justify-center items-center  right-5">
          <div className="container-proposta videoshadow">
          <iframe width="1268" height="713" src="https://www.youtube.com/embed/gfU1iZnjRZM" title="Next.js Conf Keynote (Next.js 14)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          </div>
        </div>
      </div >
      <Footer />
    </>
  );
}