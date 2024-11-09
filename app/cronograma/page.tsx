import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image";
export default function Cronograma() {
  const width_image = "500";
  return (
    <>
      <Header />
      <div className="text-center p-10 bg-greve shadow-xl shadow-rosa">
        <h2 className="timeline-header__title">Atividades do Coletivo Casulo</h2>
        <h3 className="timeline-header__subtitle">Cursos, debates, rodas de conversa</h3>
      </div>
      <div className="w-full relative bg-fixed bg-cover bg-preto p-16 " id="timeline-1">
        <div className="flex flex-wrap flex-col-reverse relative max-x-96">
          <div className="timeline-item">
            <div className="timeline__content">
              <h2 className="timeline__content-title">2017, Maio</h2>
              <p className="timeline__content-desc">Organização do Grupo de Pesquisa Culturas, Marxismo e Decolonialidade, embrião do atual GEPECD – Grupo de Estudos e Pesquisas Educação, Culturas e Decolonialidade, vinculado institucionalmente ao IFRJ.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2018, Dezembro</h2>
              <p className="timeline__content-desc">Encontro fundador e articulador do Coletivo Casulo, no Auditório do IFRJ – Campus São Gonçalo, com uma ampla e aprofundada discussão sobre conjuntura política do país após a eleição da extrema-direita para a Presidência da República. Nesta data também é indicada a Coordenação provisória do Casulo, responsável pela redação do Manifesto do coletivo e pelo planejamento e encaminhamentos das ações previstas nas justificativas para a sua organização. Este primeiro encontro contou com a participação de 16 militantes.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <Image className="timeline__Image" src="/cronologia/1.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2019, Março</h2>
              <p className="timeline__content-desc"><a href="">Dia 13</a> – Debate sobre a Reforma da Previdência, com a presença da Profª Sara Granemann (UFRJ/ESS), na Faculdade de Formação de Professores/UERJ – São Gonçalo. Parceria com o Projeto de Extensão Observatório de Políticas Públicas da Região do COMPERJ – OPP COMPERJ, vinculado ao IFRJ – Campus São Gonçalo.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/3.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2019, Junho</h2>
              <p className="timeline__content-desc"> Realização da “Oficina de Ativismo Digital”, com a especialista Daniela Orofino, no Auditório do IFRJ – Campus São Gonçalo. Atividade realizada em parceria com o Grêmio Flores, o Projeto de Extensão OPP COMPERJ e a Rádio WEB Censura Livre</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2019, Setembro</h2>
              <p className="timeline__content-desc">Dia 21 – Debate sobre “Cristianismo e o resgate da dignidade na política”, com a participação do pastor e pesquisador Max Cassin, do bispo auxiliar diocesano Dom Luiz Antonio Ricci e da escritora Ana Helena Tavares lançando sua obra sobre Dom Pedro Casaldáliga – Salão paroquial da Igreja de São Lourenço, Ponto Cem Réis, Niterói..</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/5.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">Outubro, 2019</h2>
              <p className="timeline__content-desc">Dias 20, 22, 27 e 29 – Realização do Curso de Extensão “Como fazer análise de conjuntura”, com o Prof.Fabiano Faria (IFRJ), no IFRJ – Campus São Gonçalo, com carga horária de 8h. A atividade foi uma iniciativa do coletivo, com certificação pelo campus através do Projeto OPP COMPERJ.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">Outubro, 2019</h2>
              <p className="timeline__content-desc">Dia 26 – Lançamento público da articulação inicial das organizações que viriam a constituir o futuro COLETIVO DE COLETIVOS, com a divulgação da convocatória “Vamos organizar as Lutas!”, assinada pelo Coletivo Casulo; a Frente Ampla Suburbana (FAS); o Coletivo P.A.L.C.O.; o Coletivo de Educação Popular Margarida Maria Alves (de Campo Grande, município do Rio de Janeiro); e o Prosa Crítica. O encontro aconteceu na sede do SINPRO-RJ, Centro do Rio de Janeiro. Logo depois, como desdobramento desse primeiro encontro, reuniu-se à organização o Centro Cultural Otávio Brandão (CCOB), de Maria da Graça, município do Rio de Janeiro; o GPMC – Grupo de Pesquisa em Políticas Públicas, Movimentos Sociais e Culturas, vinculado institucionalmente à UFRRJ; e a Rádio WEB Censura Livre (RWCL), de São Gonçalo.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/07.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">Dezembro, 2019</h2>
              <p className="timeline__content-desc">
                Dia 07 – Debate “Crise do neoliberalismo na América Latina, o papel da esquerda e a ascensão da extrema-direita no Brasil, com os professores Rafael Araújo (História/UERJ) e Chico Alencar (PSOL), no Auditório do IFRJ – Campus São Gonçalo. Atividade realizada em parceria com o Grêmio Flores, do campus SG; o SINTIFRJ; e o Projeto de Extensão OPP COMPERJ. Contabilizamos a participação de 37 presentes.
              </p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/8.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">Março, 2022</h2>
              <p className="timeline__content-desc"> A partir da pandemia do Coronavírus, após certa paralisação inicial, em função do impacto provocado em toda a população, as atividades do coletivo precisaram ser replanejadas e redirecionadas prioritariamente para encontros remotos, mas que geraram as iniciativas relacionadas a seguir. Foram intensificadas também a realização de debates online voltados para o trabalho de formação política e de cunho cultural, organizados principalmente pelo COLETIVO DE COLETIVOS e transmitidos através da Rádio WEB Censura Livre. Como se trata de uma lista extensa de atividades, listamos neste documento somente as ações organizadas sob responsabilidade direta do Coletivo Casulo.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2020</h2>
              <p className="timeline__content-desc">O COLETIVO DE COLETIVOS inicia a Campanha de arrecadação financeira para doação de máscaras de proteção contra a COVID e para a distribuição de Cestas Básicas em comunidades periféricas da Região Metropolitana do Rio de Janeiro. O movimento lança e divulga amplamente, durante a campanha, o panfleto “Ficar Vivos pra Lutar! Vidas Negras Importam!”, assinado pelos coletivos participantes.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2020</h2>
              <p className="timeline__content-desc">
                Contato do Coletivo Casulo com o movimento Mães de Itaboraí, articulando a Defensoria Pública do Estado do Rio de Janeiro, através do procurador Guilherme Pimentel, para a garantia da distribuição da merenda escolar nas escolas municipais por parte da prefeitura da cidade, como ato de defesa do Direito à Segurança Alimentar para as famílias atingidas pelas consequências da pandemia, como o aumento do desemprego numa região que vive um quadro estrutural de extrema pobreza, que se acentuava desde a crise envolvendo a construção do COMPERJ. A partir dessa articulação, lideranças do Mães de Itaboraí passam a integrar a coordenação do Coletivo Casulo.
              </p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/9.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">Junho, 2020</h2>
              <p className="timeline__content-desc">Dia 16 – Realização de palestra online com a Profa Márcia Carneiro (UFF / História) sobre o tema “Integralismo”.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/10.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">Julho, 2020</h2>
              <p className="timeline__content-desc">Dia 02 – O Coletivo Casulo, juntamente com as demais organizações que formam o COLETIVO DE COLETIVOS, em parceria com a WEB RÁDIO CENSURA LIVRE, iniciam uma série de lives musicais como momentos de manifestações culturais de resistência popular e enfrentamento às restrições impostas pela pandemia. Neste dia, fomos prestigiados com a participação do violonista Vitor H. Rosa.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/13.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">Julho, 2020</h2>
              <p className="timeline__content-desc"> Dia 29 – Live “A Solidariedade Coletiva no Enfrentamento da Pandemia e da Lógica Neoliberal”, com o Padre Júlio Lancellotti. Disponível <a href="https://www.youtube.com/watch?v=o-iSp0QgwTM&t=1s">aqui!</a></p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/14.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">Julho, 2020</h2>
              <p className="timeline__content-desc"> Dia 30 – Finalizando o mês de lives culturais sob a responsabilidade do Coletivo Casulo, tivemos o prazer de receber o instrumentista Vitor de Medeiros, que também é professor de música do IFRJ – Campus São Gonçalo.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">Agosto, 2020</h2>
              <p className="timeline__content-desc"> Dia 31 – Plenária geral do Casulo, realizada de forma remota, com o debate sobre “Conjuntura e Eleições Municipais 2020”, com a participação de 25 pessoas. É apresentada uma proposta de documento, como contribuição à discussão, para a plenária avaliar e encaminhar críticas e sugestões à redação final do texto, para posterior divulgação pública.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">Outubro, 2020</h2>
              <p className="timeline__content-desc"> Dia 12 – Live “O Ecossistema das Redes Sociais e o uso da Inteligência Artificial nas Eleições Municipais: uma roda de conversa sobre a influência das redes sociais e seus impactos nos hábitos dos brasileiros e nos processos eleitorais”, com os pesquisadores Alexandre Pinto de Carvalho e José Manuel Faria.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/15.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">Outubro, 2020</h2>
              <p className="timeline__content-desc"> Dia 28 – Realização do Debate Eleições 2020, com a participação de candidatos(as) a vereador(a) no município de São Gonçalo, em parceria com a RÁDIO WEB CENSURA LIVRE, responsável pela coordenação do evento através da jornalista Dayse Alvarenga.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/16.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">Novembro, 2020</h2>
              <p className="timeline__content-desc"> Dias 06 e 07 – Participação, ao lado de diversas organizações, coletivos e grupos de pesquisa, na organização do I SEMINÁRIO INTEGRADO DE EDUCAÇÃO POPULAR: “Educação e formação em tempos de aridez: em que mundo e que seres humanos deveremos formar?”, no período de 25 de julho a 28 de novembro, com o Coletivo Casulo sendo responsável direto pela articulação do GT 8 – MOVIMENTOS SOCIAIS E REDES DE SOLIDARIEDADE NAS PERIFERIAS, que apresentou os seguintes debates, painéis e rodas de conversa:</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">Momento I (06/11)</h2>
              <p className="timeline__content-desc"> Atividade I: "A Solidariedade como instrumento da luta política: reflexões a partir de resistências populares em tempos de pandemia", com Flavia Braga Vieira (UFRRJ), Javier Walter Ghibaudi (UFF), Júlio Cesar Vieira (CCOB) e José Manuel Faria (Casulo).Disponível <a className="font-bold text-rosa" href="https://www.youtube.com/watch?v=JWMaiNHjKe4">aqui!</a>: </p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">Momento II (06/11)</h2>
              <p className="timeline__content-desc">Atividade II: “Economia Solidária: Painel - com a apresentação de questões e relatos de experiências”, com Adalton Mendonça (Prefeitura de Maricá), Marcos Rodrigo (Comunidade do Morro do Preventório, Charitas), José Luís Abreu Dutra (Coletivo Casulo) e Sérgio Oliveira (Coletivo Casulo). Disponível <a className="font-bold text-rosa" href="https://www.youtube.com/watch?v=tD1wzH42lpo">aqui!</a></p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">Momento III (07/11)</h2>
              <p className="timeline__content-desc">Atividade III: “As ações dos coletivos e das redes de solidariedade nas periferias”, com a presença de diversas lideranças e representantes das ações do Coletivo de Coletivos, assim como de diversas outras iniciativas, como Arraial do Cabo/RJ e Lauro de Freitas/BA, num total de 13 comunicações relatando as experiências de movimentos sociais, associações e coletivos políticos, com a presença de 31 militantes. Disponível <a className="font-bold text-rosa" href="https://www.youtube.com/watch?v=I4ZZ_-jSLI8">aqui!</a> </p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/17.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2021, Fevereiro </h2>
              <p className="timeline__content-desc">21 – Realização da Roda de Conversa online “A importância do SUS e da vacinação”, com a participação da sanitarista Bianca Leandro (EPSJV /FIOCRUZ).</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2021, Março </h2>
              <p className="timeline__content-desc">Dia 23 – Início do Curso Interno online de Formação sobre “Educação Popular e Trabalho de Base”, sob a coordenação das professoras Morena Marques e Giselle Souza (UNIRIO, Faculdade de Serviço Social). Participação das coordenações do Coletivo Casulo e do Movimento Mães de Itaboraí. Um dos objetivos originais vinculados a essa proposta era a organização de um movimento popular em defesa da Saúde Pública na comunidade local, com a formação de agentes populares de saúde. O curso transcorreu através de diversos encontros quinzenais, culminando no mês de julho.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2021, Abril </h2>
              <p className="timeline__content-desc">Dia 14 – Reunião online com o Padre Siro da Silva Chaves, da paróquia de Porto das Caixas, Itaboraí, visando à elaboração de projeto conjunto de formação política e pedagógica junto à juventude da comunidade, voltado para a questão ambiental.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2021, Abril </h2>
              <p className="timeline__content-desc">Dia 17 – SEMINÁRIO PERMANENTE DE EDUCAÇÃO POPULAR, evento online, coordenado por docentes da UFRRJ e organizado pelas entidades participantes do I Seminário Integrado de Educação Popular ocorrido durante o ano de 2020. Tema: “Educação popular e poder popular: contribuições dos movimentos sociais para pensar a formação e as lutas emancipatórias”, com representantes do MST, do Coletivo Terra e da CPT – Comissão Pastoral da Terra. A data do Seminário teve a importância política por representar o DIA MUNDIAL DA LUTA CAMPONESA, em que se rememora e se celebra a luta pela passagem dos 25 Anos do Massacre de Eldorado dos Carajás.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/19.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2021, Abril </h2>
              <p className="timeline__content-desc">Dia 19 – Debate sobre Conjuntura: “Fora Bolsonaro, em Defesa do SUS, da democracia e da vida”, com o Prof. Adalton Mendonça, a Profa Cláudia March e o Padre José Antonio Abreu Dutra.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2021, Abril </h2>
              <p className="timeline__content-desc">Dia 23 – Reunião online da coordenação com representantes do MTST e da coordenação do movimento Cozinha Solidária, em Santa Luzia, São Gonçalo.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/20.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2021, Maio </h2>
              <p className="timeline__content-desc">Dia 10 – Live sobre o tema “Análise de Conjuntura Nacional e Regional”, com a presença do deputado federal Marcelo Freixo. O evento contou com a audiência de 96 pessoas.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/21.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2021, Maio </h2>
              <p className="timeline__content-desc">Dia 22 – Participação na organização de mais uma edição do SEMINÁRIO PERMANENTE DE EDUCAÇÃO POPULAR, via Google Meet, sobre o tema: “Redes de solidariedade dos trabalhadores e trabalhadoras do campo e da cidade no combate à fome durante a pandemia”.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/22.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2021, Junho </h2>
              <p className="timeline__content-desc">Dia 17 – Realização do debate online “A rebelião popular chilena antes e após a pandemia de covid-19”, com a participação dos professores Eduardo Scheidt (UERJ-FFP) e Rafael Araújo (UERJ-Maracanã). A atividade compôs a série de debates Quintas Político-Culturais, coordenada pelo COLETIVO DE COLETIVOS e transmitida pela RÁDIO WEB CENSURA LIVRE.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2021, Agosto </h2>
              <p className="timeline__content-desc">Dia 04 – Primeira reunião online da coordenação com o Prof. Wanderley Freitas, representando o IFRJ – Campus São Gonçalo, para discussão e elaboração de proposta de parceria de oferta de Curso Pré-Técnico a ser oferecido no espaço do campus, tendo como público-alvo estudantes de 9o ano das redes públicas municipais da região.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2021, Setembro </h2>
              <p className="timeline__content-desc">21 – Reunião online de representantes da coordenação com representantes do GPMC e outras entidades e coletivos de educação popular de Niterói; da Rocinha, Rio de Janeiro; e da UFRPE, campus Serra Talhada; dentre outros, visando à organização de uma ESCOLA DE FORMAÇÃO POLÍTICA voltada para a educação popular e o trabalho de base. Nesse encontro debateu-se também sobre a possibilidade de realização de cursos de formação presenciais, tendo como espaços de atuação o Solar das Artes e Terapias, no Cafubá, Niterói, e a casa de candomblé Ilê Axé Ogunjá, sob responsabilidade do Babalorixá Jorge Carneiro, em Sambaetiba, Itaboraí.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2021, Setembro </h2>
              <p className="timeline__content-desc">23 – Encontro online com equipe de trabalho coordenada pelas professoras da Faculdade de Serviço Social da UNIRIO, Morena Marques e Giselle Souza, para apresentação do Mapeamento das unidades de saúde e de assistência e um levantamento inicial e debate sobre o Orçamento Público, realizado no trabalho de assessoria dessas profissionais e militantes junto ao movimento Mães de Itaboraí.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/23.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2021, Outubro </h2>
              <p className="timeline__content-desc">Dia 02 – Participação organizada dos militantes do Coletivo Casulo no ATO FORA BOLSONARO, realizado no Centro da cidade do Rio de Janeiro.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/25.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2021, Novembro </h2>
              <p className="timeline__content-desc">Dia 20 – Visita da Coordenação do Coletivo à casa de candomblé Ilê Axé Afonjá, em Sambaetiba, Itaboraí, para reunião com o Babalorixá Jorge Carneiro para Roda de Conversa, confraternização e conhecimento do espaço, em fase final de construção, visando à viabilização da oferta de cursos presenciais voltados para a formação política e pedagógica, em parceria com o GPMC.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2021, Novembro </h2>
              <p className="timeline__content-desc">Dia 29 – Reunião online com Adalton Mendonça, membro do Casulo recém-empossado como Secretário de Economia Solidária da Prefeitura de Maricá, para articulação da nossa participação no Seminário de Economia Solidária, a ser realizado no próximo mês.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/27.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2021, Dezembro </h2>
              <p className="timeline__content-desc">Dia 02 – Mais uma Debate da Série QUINTAS POLÍTICO-CULTURAIS, organizado pelo COLETIVO DE COLETIVOS e WEB RÁDIO CENSURA LIVRE, com representantes de diversos coletivos populares desenvolvendo o tema “Balanço de 2021 e Perspectiva de 2022”. Convidados: Almir Cezar Filho - Economista/WR Censura Livre, Antonio Carlos Schittino - Emancipação Socialista/CCOB, Fernando Rubano Noroes - CCOB/ Emancipação Socialista, Sérgio Oliveira - Professor/Coletivo Casulo. Apresentação de Marcello Deodoro - Comissão de Moradores da Comunidade Indiana Tijuca (CMCIT).</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/29.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2021, Dezembro </h2>
              <p className="timeline__content-desc">Dia 10 – Participação de representantes da coordenação do coletivo no I SEMINÁRIO de ECONOMIA SOLIDÁRIA, realizado no Auditório do Banco Mumbuca, organizado pela Secretaria de Economia Solidária da Prefeitura Municipal de Maricá, sob a coordenação do seu secretário, Prof. Adalton Mendonça. O Casulo compôs uma das mesas de debates sobre o tema, com a participação de José Luís Abreu Dutra, Luiz Claudio da Silva e Sérgio Oliveira, sob a coordenação da militante do MST, Maria, da Brigada Joaquin Piñera.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2022, Janeiro </h2>
              <p className="timeline__content-desc">Dia 10 – Reunião da coordenação com representantes de São Gonçalo da corrente política Articulação de Esquerda, vinculada ao PT. Pauta: análise de conjuntura e perspectivas de ações de organização popular no município em combate à extrema-direita, ao conservadorismo e ao mandonismo político histórico de SG.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2022, Janeiro</h2>
              <p className="timeline__content-desc">Dia 19 – Roda de conversa online aberta do Coletivo Casulo com o vereador Prof. Josemar Carvalho (PSOL/SG). Pauta: análise de conjuntura e perspectivas de ações de organização popular no município em combate à extrema-direita, ao conservadorismo e ao mandonismo político histórico de SG.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2022, Janeiro</h2>
              <p className="timeline__content-desc">Dia 24 – Organização do FÓRUM DE LUTAS ANTIBOLSONARISTA de São Gonçalo, junto a diversas entidades, movimentos sociais, coletivos, partidos políticos e mandatos parlamentares de esquerda.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/30.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2022, Fevereiro</h2>
              <p className="timeline__content-desc">Dia 12 – O FÓRUM DE LUTAS ANTIBOLSONARISTA promove ATO PÚBLICO de protesto contra o assassinato brutal de Durval, vítima de racismo no condomínio onde residia, em Colubandê/SG. O Coletivo Casulo esteve presente na organização do Ato, que contou também com a presença da família do trabalhador negro assassinado. A concentração se deu na Praça Zé Garoto, com caminhada até a Prefeitura municipal, contando com ampla participação.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2022, Fevereiro</h2>
              <p className="timeline__content-desc">Dia 14 – Reunião online com Maria, representante do MST/Brigada Nacional Joaquin Piñero, que atua em Maricá/RJ, para articulação de parceria no planejamento de encontros, cursos e ações de formação no campo da educação popular e da Economia Solidária.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/32.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2022, Fevereiro</h2>
              <p className="timeline__content-desc">Dia 23 - Visita da coordenação ao Solar Artes e Terapias, no Cafubá, Piratininga, Niterói, para conhecimento do espaço visando à oferta de cursos de formação política e pedagógica presenciais junto à comunidade local e outras comunidades ou instituições articuladas pelo Casulo.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/34.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2022, Março</h2>
              <p className="timeline__content-desc">Dia 09 – A convite do Grupo de Pesquisa GPMC e em parceria com o GEPECD, participamos da organização de encontro interno de formação para debate do tema ANÁLISE DE CONJUNTURA, com a presença do economista José Luiz Fevereiro. O evento ocorreu no auditório do Colégio de Aplicação da UERJ, localizado no Rio Comprido, município do Rio de Janeiro.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2022, Março</h2>
              <p className="timeline__content-desc">Dias 09 a 23 – Participação no movimento “21 Dias de Ativismo contra o Racismo”, com a organização de 07 atividades distintas, no formato remoto, sob a coordenação do Casulo, entre os dias 09 e 23 de março. Todas essas atividades se encontram disponíveis no <a className="font-bold text-rosa" href="https://www.youtube.com/@coletivocasulo8559/streams">Canal do YouTube do Coletivo Casulo</a></p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/36.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2022, Março</h2>
              <p className="timeline__content-desc">Dia 17 – Realização de debate online com a Deputada Estadual Dani Monteiro (PSOL-RJ) sobre o tema “Violações de Direitos Humanos no Rio de Janeiro”. A atividade compôs a série de debates Quintas Político-Culturais, coordenada pelo COLETIVO DE COLETIVOS e transmitida pela RÁDIO WEB CENSURA LIVRE. Disponível <a className="font-bold text-rosa" href="https://www.youtube.com/watch?v=ErZTOIFSrHM">aqui!</a> </p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2022, Abril</h2>
              <p className="timeline__content-desc">Dia 05 – Aprovação inicial, junto à comissão designada pela Direção do IFRJ – Campus São Gonçalo, da versão final do Projeto de Curso Pré-Técnico a ser oferecido nos espaços da Instituição a partir do segundo semestre letivo de 2022, a ser iniciado em 27 de agosto. Nesta reunião online, deliberou-se que o curso, enquanto atividade de extensão vinculada ao campus, será ofertado de forma híbrida, intercalando encontros presenciais com aulas remotas.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2022, Abril</h2>
              <p className="timeline__content-desc">Dia 16 – Encontro presencial de Avaliação e Planejamento da Coordenação do Coletivo Casulo, em São Pedro da Aldeia/RJ.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content">
              <h2 className="timeline__content-title">2022, Abril</h2>
              <p className="timeline__content-desc">Dia 26 – Reunião remota com representantes da Escola Nacional Paulo Freire, vinculada ao MST, para articulação e estabelecimento de parcerias em cursos de educação popular. Nos comprometemos a enviar representação do Casulo ao curso de formação que será oferecido presencialmente pela escola, em julho, com nove dias de duração, em São Paulo, capital.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/37.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2022, Junho</h2>
              <p className="timeline__content-desc">10 a 16 – Participação de integrantes do Coletivo/GEPECD no Módulo II do Curso Paulo Freire, organizado na modalidade de imersão pela ESCOLA NACIONAL PAULO FREIRE, em São Paulo.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/39.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2022, Agosto</h2>
              <p className="timeline__content-desc">20 – Realização do Encontro interno de formação PAULO FREIRE E A EDUCAÇÃO POPULAR, em São Pedro da Aldeia, em parceria com o GEPECD.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/40.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2022, Setembro</h2>
              <p className="timeline__content-desc">13 – Início da primeira turma do Curso Preparatório Pré-Técnico, voltado para estudantes do ensino fundamental das redes públicas municipais, articulado junto ao IFRJ – Campus São Gonçalo em parceria com a Faculdade de Formação de Professores da UERJ. Essa “experiência-piloto”, de curta duração, contou com estudantes da rede municipal de São Gonçalo.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/41.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2022, Novembro</h2>
              <p className="timeline__content-desc">17 – QUINTAS POLÍTICO-CULTURAIS com Debate remoto sobre o tema “Balanço do resultado eleitoral/2022”, tendo como convidados o historiador e ex-dirigente sindical Cyro Garcia (PSTU) e o professor e engenheiro Eduardo Serra (PCB). Ambos haviam se candidatado a governador do Estado do Rio de Janeiro. O evento, organizado pelo COLETIVO DE COLETIVOS e a WEB RÁDIO CENSURA LIVRE, foi coordenado pelo Centro Cultural Otávio Brandão e pelo Coletivo Casulo.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/42.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2022, Dezembro</h2>
              <p className="timeline__content-desc">14 a 16 – Realização, em conjunto com o GEPECD, do I SEMINÁRIO PAULO FREIRE, durante a XII SEMACAC – Semana Acadêmica do IFRJ – Campus Arraial do Cabo. O Seminário aconteceu de forma presencial e apresentou três momentos e debates distintos:</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/43.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">Momento I</h2>
              <p className="timeline__content-desc">Dia 14/12/22 – quarta-feira, das 15:40h às 17:40h. Tema: “Paulo Freire, uma introdução: Angicos, Chile e África”. Responsáveis: Sérgio Oliveira e Ricardo Costa</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/44.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">Momento II</h2>
              <p className="timeline__content-desc">Dia 15/12/22 - quinta-feira, das 15:40h às 17:40h. Tema: “A relação entre Paulo Freire e Amílcar Cabral na construção de um projeto de educação popular na Guiné-Bissau”. Palestrante convidado via Videoconferência: Huco Monteiro, docente da Universidade Colinas de Boé, Guiné-Bissau. <a className="font-bold text-rosa" href="https://www.youtube.com/watch?v=vIZ9PZvcsO8">Gravação</a></p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/45.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">Momento III</h2>
              <p className="timeline__content-desc">Dia 16/12/22 – sexta-feira, das 15h às 17h. Tema: “O pensamento e a práxis de Paulo Freire na construção de um projeto político-pedagógico para a escola” Debatedor convidado: Luiz Bugarelli, da Escola Nacional Paulo Freire, São Paulo.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/46.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2023, Janeiro</h2>
              <p className="timeline__content-desc">13 a 15 – Encontro das coordenações do Coletivo Casulo e do GEPECD, na cidade de São Pedro da Aldeia, aberto à participação dos membros destes dois fóruns de debate e ação, visando à construção de um Planejamento em conjunto para o ano de 2023, tendo como foco central o pensamento, a metodologia e a prática político-pedagógica de Paulo Freire. A partir deste encontro, delibera-se que as duas coordenações atuarão de forma unificada a partir desse momento, unindo suas iniciativas de reflexão teórica, formação política e projetos de educação popular.</p>
            </div>
          </div>
          <div className="timeline-item" >
            <div className="timeline__content"><Image className="timeline__Image" src="/cronologia/47.jpg" alt="imagem-cronograma-coletivo" width={width_image} height={0} />
              <h2 className="timeline__content-title">2023, Março</h2>
              <p className="timeline__content-desc">10 – Participação na Campanha 21 Dias de Ativismo contra o Racismo, contribuindo com uma Roda de Conversa com o Deputado Estadual Josemar Carvalho (PSOL), recém-eleito para a ALERJ. Temática: Luta Antirracista como Política no exercício da democracia. O parlamentar debaterá o subtema "Experiências, desafios e possibilidades de um Mandato Popular na Luta Antirracista".</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}