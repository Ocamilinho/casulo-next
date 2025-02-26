import Link from "next/link";
import Divider from "@/components/Divider";
type Card = {
    title: string,
    subTitle: string,
    number: string,
    urlRef: string
}
export default function Card({title, subTitle, number, urlRef}: Card){
    return(
        <div className="">
            <Link href={urlRef} className="ancora-card">
                <li className="flex p-6 flex-col gap-4 bg-rosa rounded-3xl shadow-lg hover:shadow-2xl hover:opacity-90 transition-all duration-300">

                <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 text-4xl rounded-full text-preto bg-branco border-2 border-branco">
                        {number}
                    </span>
                    <h1 className="text-2xl font-bold text-branco tracking-wide">{title}</h1>
                </div>

                <Divider />
                <p className="text-xl m-2 text-branco ">{subTitle}</p>
              </li>
            </Link>
        </div>
    );
}