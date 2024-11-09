import Divider from "@/components/Divider";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image";
import { FaTwitter, FaFacebook, FaYoutube,FaInstagram, FaWhatsapp  } from 'react-icons/fa';
import { FaThreads, FaBluesky } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export default function Contato() {
    return (
        <>
            <Header />
            <div className="bg-cinza2 flex items-center justify-center min-h-screen">
                <div className="p-5 w-4/5">
                    <div className="flex flex-col items-center gap-7">
                        <h1 className="text-4xl text-branco">Contate-nos</h1>
                        
                        <Divider />
                        <p className="text-xl text-branco text-center">Procuramos articular e divulgar as nossas ações político-pedagógicas através das redes sociais. Caso queira entrar em contato para nos conhecer melhor, seja enquanto interesse pessoal, para somar aos nossos trabalhos, ou visando à construção de algum projeto de caráter coletivo e/ou comunitário, sinta-se à vontade!</p>
                        <div className="flex flex-wrap p-5 bg-cinza2 rounded-lg gap-5 justify-evenly">
                            <a href="https://www.facebook.com/groups/721949191548369/" target="_blank" rel="noreferrer noopener">
                                <div className="w-32 h-32 flex p-5 items-center flex-col justify-between bg-cinza shadow-md rounded-lg hover:translate-y-1 transition-all">
                                    <FaFacebook color="white" size={64}/><br />
                                    <h4 className="font-light text-branco">Facebook</h4>
                                </div>
                            </a>

                            <a href="mailto:contato@coletivocasulo.com?subject=Nome - Assunto">
                                <div className="w-32 h-32 flex p-5 items-center flex-col justify-between bg-cinza shadow-md rounded-lg hover:translate-y-1 transition-all">
                                    <MdEmail color="white" size={64}/><br />
                                    <h4 className="font-light text-branco">Email</h4>
                                </div>
                            </a>

                            <a href="https://wa.me/5522999066017" target="_blank" rel="noreferrer noopener">
                                <div className="w-32 h-32 flex p-5 items-center flex-col justify-between bg-cinza shadow-md rounded-lg hover:translate-y-1 transition-all">
                                    <FaWhatsapp color="white" size={64}/><br />
                                    <h4 className="font-light text-branco">Whatsapp</h4>
                                </div>
                            </a>

                            <a href="bluesky_links" target="_blank" rel="noreferrer noopener">
                                <div className="w-32 h-32 flex p-5 items-center flex-col justify-between bg-cinza shadow-md rounded-lg hover:translate-y-1 transition-all">
                                    <FaBluesky color="white" size={64}/><br />
                                    <h4 className="font-light text-branco">Bluesky</h4>
                                </div>
                            </a>

                            <a href="bluesky_links" target="_blank" rel="noreferrer noopener">
                                <div className="w-32 h-32 flex p-5 items-center flex-col justify-between bg-cinza shadow-md rounded-lg hover:translate-y-1 transition-all">
                                    <FaInstagram color="white" size={64}/><br />
                                    <h4 className="font-light text-branco">Instagram</h4>
                                </div>
                            </a>
                            <a href="bluesky_links" target="_blank" rel="noreferrer noopener">
                                <div className="w-32 h-32 flex p-5 items-center flex-col justify-between bg-cinza shadow-md rounded-lg hover:translate-y-1 transition-all">
                                    <FaYoutube color="white" size={64}/><br />
                                    <h4 className="font-light text-branco">Youtube</h4>
                                </div>
                            </a>

                            <a href="bluesky_links" target="_blank" rel="noreferrer noopener">
                                <div className="w-32 h-32 flex p-5 items-center flex-col justify-between bg-cinza shadow-md rounded-lg hover:translate-y-1 transition-all">
                                    <FaThreads color="white" size={64}/><br />
                                    <h4 className="font-light text-branco">Threads</h4>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
