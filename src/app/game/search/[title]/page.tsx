import { Input } from "@/components/input";
import { GameProps } from "@/utils/types/game";
import { Container } from "@/components/container";
import { GameCard } from "@/components/gameCard";

const getData = async(title: string) => {
   // console.log("Parâmetro:" +title)

    try{
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`)
        return res.json();
    }catch(err){
        return null;
    }
}

export const Search = async({
    params: {title}
    }: {
    params: { title: string }
    }) => {
    const games: GameProps[] = await getData(title);
    
    return(
        <main className="w-full text-black">
            <Container>
            <Input />
            <h1 className="text-xl font-bold mt-8 mb-5">Veja o que encontramos na nossa base:</h1>
            {!games && (
                <p >Este jogo não foi encontrado...</p>
            )}
            <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                {games && games.map( (item) => (
            <GameCard key={item.id} data={item} /> //vai fornecer todo o objeto para o componente
            ))}
           </section>
            </Container>
        </main>
    )
    }

export default Search;
