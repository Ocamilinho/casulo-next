import Divider from "@/components/Divider";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SocialLink from "@/components/contato/SocialLink";
export default function Contato() {
    return (
        <>
            <Header />
            <div className="bg-cinza2 flex items-center justify-center min-h-screen">
                <div className="p-5 w-4/5">
                    <div className="flex flex-col items-center justify-center gap-7">
                        <h1 className="text-4xl text-branco">Contate-nos</h1>
                        <Divider />
                        <p className="text-xl text-branco text-center">Procuramos articular e divulgar as nossas ações político-pedagógicas através das redes sociais. Caso queira entrar em contato para nos conhecer melhor, seja enquanto interesse pessoal, para somar aos nossos trabalhos, ou visando à construção de algum projeto de caráter coletivo e/ou comunitário, sinta-se à vontade!</p>
                        <div className="flex gap-3 flex-wrap justify-center">
                            <SocialLink href="https://www.facebook.com/groups/721949191548369/" platform="facebook" />
                            <SocialLink href="mailto:contato@coletivocasulo.com?subject=Nome - Assunto" platform="email" />
                            <SocialLink href="https://wa.me/5522999066017" platform="whatsapp" />
                            <SocialLink href="bluesky_links" platform="bluesky" />
                            <SocialLink href="bluesky_links" platform="instagram" />
                            <SocialLink href="bluesky_links" platform="youtube" />
                            <SocialLink href="bluesky_links" platform="threads" />
                            <SocialLink href="bluesky_links" platform="twitter" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
