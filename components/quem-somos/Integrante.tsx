import Image from "next/image";
import Link from "next/link";

type Integrante = {
    name: string;       
    description: string;  
    imageSrc: string;   
};

export default function Integrante({ name, description, imageSrc }: Integrante) {
    return (
        <div className="flex items-center gap-5">
            <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image 
                    src={imageSrc}
                    width={128} 
                    height={128} 
                    alt={`Imagem de ${name}`} 
                    className="object-cover w-full h-full" 
                />
            </div>
            <div className="text-branco mt-2 flex flex-col">
                <h1 className="text-2xl font-semibold">{name}</h1>
                <p className="text-gray-700 mt-2 text-xl">{description}</p>
            </div>
        </div>
    );
}