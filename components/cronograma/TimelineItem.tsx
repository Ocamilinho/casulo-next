import Image from "next/image";
import {format} from "date-fns"
import {ptBR} from "date-fns/locale"
type timelineprops ={
    desc: string
    imageUrl: string;
    date: Date,
}

export default  function TimelineItem({desc, date, imageUrl}:timelineprops){
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
              <p className="text-branco opacity-75">
                {desc}
            </p>
            </div>
          </div>
    );
}