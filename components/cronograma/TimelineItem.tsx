import Image from "next/image";
import Link from "next/link";
import {format} from "date-fns"
import {ptBR} from "date-fns/locale"
type timelineprops ={
    desc: string
    imageUrl: string;
    date: Date,
    linkText?: string,
    linkUrl?: string,
}

export default  function TimelineItem({desc, date, imageUrl, linkText, linkUrl}:timelineprops){
    const formatDate = date.toLocaleDateString("pt-BR", { year: "numeric", month: "long" });
    const capitalizedDate = formatDate.charAt(0).toUpperCase() + formatDate.slice(1);
    return (
        <div className="flex flex-col md:flex-row gap-5">
            {imageUrl && (
                <Image
                className="rounded-lg object-cover"
                src={imageUrl}
                alt="imagem-cronograma-coletivo"
                width={500}
                height={500}
                />
            )}
            <div className="flex flex-col gap-3">
              <h2 className="text-branco text-4xl font-bold">{capitalizedDate}</h2>
              <p className="text-branco opacity-75">{desc}</p>
              {linkUrl && <Link href={linkUrl} className="text-rosa font-bold">{linkText?linkText:linkUrl}</Link> }
              
            </div>
          </div>
    );
}