import { GameProps } from "@/utils/types/game";
import Link from "next/link";
import Image from "next/image";
import { BiRightArrowCircle } from "react-icons/bi"

interface GameCardProps {
    data: GameProps
}

export const GameCard = ({data}: GameCardProps) => {
    return(
        <Link href={`/game/${data.id}`}>
            <section className="w-full bg-slate-200 mt-8 mb-5 p-2 rounded-lg">
                <div className="w-full relative h-56 hover:scale-105 rounded-lg" >
                    <Image 
                    src={data.image_url}
                    alt={data.title}
                    quality={100}
                    priority={true}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                    className="max-h-56 object-cover rounded-lg hover:opacity-50 transition-all duration-300"
                    />
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p className="text-sm font-bold px-2 text-ellipsis truncate whitespace-nowrap overflow-hidden">{ data.title }</p>
                    <BiRightArrowCircle size={24} color="#000" />
                </div>
               
            </section>

        </Link>
    )
}
//object-cover - encaixa na div a imagem sem distorcer
//truncate 
//text-ellipsis - são os 3 pontinhos ...
//whitespace-nowrap - não quebra pra linha de baixo, mantém na mesma linha
//overflow-hidden - esconde