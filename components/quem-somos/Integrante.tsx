import Image from "next/image";
import Link from "next/link";

type Integrante = {
    name: string;       
    description: string;  
    imageSrc: string;   
};

export default function Integrante({ name, description, imageSrc }: Integrante) {
    return (
        <div className="flex md:flex-row flex-col gap-7 bg-cinza p-5 rounded-2xl">
            <div>
                <Image 
                    src={imageSrc}
                    width={128} 
                    height={128} 
                    alt={`Imagem de ${name}`} 
                    className="rounded-2xl" 
                />
            </div>
            <div className="text-branco mt-2 flex flex-col w-4/5">
                <h1 className="text-2xl font-semibold">{name}</h1>
                <p className="text-gray-700 mt-2 text-xl">{description}</p>
            </div>
        </div>
    );
}