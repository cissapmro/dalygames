
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";
import { GameCard } from "@/components/gameCard";

const getDalyGame = async() => {
  try{
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { next: { revalidate: 320 } })
    return res.json();
  }catch(err) {
    throw new Error("Falha na busca dos dados")
  }
}

const getGamesData = async() => {

  try{
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, { next: {revalidate: 320 } })
    return res.json();
  } catch(err) {
    throw new Error("Falha na busca dos dados")
  }
}

export default async function Home() {

 const dalyGame: GameProps = await getDalyGame();
 //console.log(dalyGame);
 const data: GameProps[] = await getGamesData(); //é do tipo array;
//console.log(data);

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">Separamos um jogo exclusivo pra você!</h1>
        <Link href={`/game/${dalyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg">
              <div className="text-white absolute z-20 flex justify-center items-center bottom-0 p-3 gap-2">
                <p>Título: {dalyGame.title}</p>
                <p>Id: {dalyGame.id}</p>
                  <BsArrowRightSquare size={24} color="#FFF" />
              </div>
            <Image 
          src={dalyGame.image_url}
          alt={dalyGame.title}
         // width={100}
         // height={100}
          quality={100}
          priority={true}
          fill={true}
          sizes="(max-width: 728px) 100vw, (max-width: 1200px) 44vw" //
          className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
          />
            </div>
          </section>
        </Link>

        <Input />
        <h2 className="text-lg font-bold mt-8 mb-5">
          Jogos para conhecer
        </h2>
        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {data.map( (item) => (
            <GameCard key={item.id} data={item} /> //vai fornecer todo o objeto para o componente
          ))}
        </section>
      </Container> 
    </main>
  )
}
//w-full - 100%
//fill = a imagem vai ocupar toda a tela
//100vw - o máximo que puder
//object-cover - não distorce a imagem
//Quando usa sizes a imagem fica absolute da tela, pra resolver, passar o pai (criar uma div com posição relative)
//p - padding
//gap - espaço entre eles