import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Container } from "@/components/container";
import { Label } from "./components/label";
import { Metadata } from "next";

interface PropsParams {
    params: {
      id: string;
    }
  }
  //FUNÇÃO PARA METADATA DINAMICO
    export const generateMetadata = async({ params }: PropsParams): Promise<Metadata> => {
    try {
      const response: GameProps = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`, { next: { revalidate: 60 } })
        .then((res) => res.json())
        .catch(() => {
          return {
            title: "DalyGames - Descubra jogos incríveis para se divertir."
          }
        })
      return {
        title: response.title,
        description: `${response.description.slice(0, 100)}...`,
        openGraph: {
          title: response.title,
          images: [response.image_url]
        },
        robots: {
          index: true,
          follow: true,
          nocache: true,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
          }
        }
      }
      
    } catch (err) {
      return {
        title: "DalyGames - Descubra jogos incríveis para se divertir."
      }
    }
  }

//Função para pegar os dados, conforme id da url
const getData = async(id: string) => {
    try{
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`)
        return res.json();
    }catch(err){
       throw new Error("falha ao acessar dados!")
    }
}

export const Game = async({params: {id}}: {params: {id: string}}) => {

    const data: GameProps = await getData(id);

    if(!data) {
        redirect("/");
    }
   // console.log(data);

    return(
        <main className="w-full text-black">
             <section>
                <div className="bg-black h-80 sm:h-96 w-full relative">
                <Image 
                className="object-cover w-full h-80 sm:h-96 opacity-75"
                src={data.image_url}
                alt={data.title}
                fill={true}
                quality={100}
                priority={true}
                sizes="(max-width: 728px) 100vw, (max-width: 1200px) 44vw" 
                />
                </div>
                <Container>
                    <h1 className="font-bold text-xl my-4">{data.title}</h1>
                    <p>{data.description}</p>

                    <div>
                        <h2 className="font-bold mt-7 mb-2 text-lg">Plataformas</h2>
                        <div className="flex gap-2 flex-wrap">
                            {data.platforms.map((item) => (
                                 <Label nome={item} key={item} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold mt-7 mb-2 text-lg">Categorias</h2>
                        <div className="flex gap-2 flex-wrap">
                            {data.categories.map((item) => (
                                 <Label nome={item} key={item} />
                            ))}
                        </div>
                    </div>

                    <p className="mt-7 mb-2"><strong>Data de Lançamento: </strong>{data.release}</p>

                </Container>
             </section>
        </main>
    )
}
export default Game;

//gap-2 - espaço entre eles
//flex-wrap:  o conteúdo desce