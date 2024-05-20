import Divider from "@/components/Divider";
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image";
export default function Contato() {
    return (
        <>
            <Header />
            <div className="bg-cinza2 flex items-center justify-center h-screen">
                <div className="p-4 w-4/5">
                    <div className="flex flex-col items-center gap-7">
                        <h1 className="text-4xl text-branco">Contate-nos</h1>
                        <Divider />
                        <p className="text-xl text-branco text-center">Também queremos aproveitar para lembrar que valorizamos muito o feedback dos nossos usuários, então não hesite em nos contar sua opinião sobre nosso site e nossos serviços. Seu feedback é muito importante para nós e nos ajuda a melhorar cada vez mais.</p>
                    </div>
                    <div className="flex flex-wrap p-5 bg-cinza2 rounded-lg gap-18 justify-evenly">
                        <a href="https://www.facebook.com/groups/721949191548369/" target="_blank" rel="noreferrer noopener">
                            <div className="w-32 h-32 flex p-5 items-center flex-col justify-between bg-cinza shadow-md rounded-lg hover:translate-y-1 transition-all">
                                <   Image src="/icons/face.svg" alt="email-icon" width={64} height={64} />
                                <h4 className="font-light text-branco">Facebook</h4>
                            </div>
                        </a>

                        <a href="mailto:contato@coletivocasulo.com?subject=Nome - Assunto">
                            <div className="w-32 h-32 flex p-5 items-center flex-col justify-between bg-cinza shadow-md rounded-lg hover:translate-y-1 transition-all">
                                <Image src="/icons/email.svg" alt="email-icon" width={64} height={64} />
                                <h4 className="font-light text-branco">Email</h4>
                            </div>
                        </a>

                        <a href="https://wa.me/5522999066017" target="_blank" rel="noreferrer noopener">
                            <div className="w-32 h-32 flex p-5 items-center flex-col justify-between bg-cinza shadow-md rounded-lg hover:translate-y-1 transition-all">
                                <Image src="/icons/whats.svg" alt="email-icon" width={64} height={64} />
                                <h4 className="font-light text-branco">Whatsapp</h4>
                            </div>
                        </a>

                        <a href="tel:+5522999066017">
                            <div className="w-32 h-32 flex p-5 items-center flex-col justify-between bg-cinza shadow-md rounded-lg hover:translate-y-1 transition-all">
                                <Image src="/icons/phone.svg" alt="email-icon" width={64} height={64} />
                                <h4 className="font-light text-branco">Telefone</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
