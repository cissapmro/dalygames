import Image from "next/image"
import userImage from "@/assets/user.png"
import { Container } from "@/components/container"
import { FaShareAlt } from "react-icons/fa"
import { FavoriteCard } from "./components/favorite"

export const Profile = () => {

    return(
        <main className="w-full">
           <Container>
            <section className="mt-8 mb-6 flex flex-col justify-between items-center sm:flex-row relative">

                <div className="flex flex-col justify-center items-center text-lg gap-3 sm:flex-row">
                <Image 
                src={userImage}
                alt="Imagem da Logo"
                priority={true}
                quality={100}
                className="rounded-full h-56 w-56 object-cover"
                />
                <h1 className="text-2xl text-bold"> Site do Programador</h1>
                </div>

                <div className="flex flex-col justify-center items-center sm:flex-row gap-3 top-0 right-0 sm:absolute mt-2">
                 <button className="bg-orange-500 text-white rounded-lg px-4 py-3">
                    <FaShareAlt />
                 </button>
                 <button className="bg-orange-500 text-white rounded-lg px-4 py-3">
                    Configurações
                    </button>
                </div>
            </section>
            <section className="flex flex-col flex-wrap gap-5 md:flex-row">
                <div className="flex-grow flex-wrap">
                    <FavoriteCard />
                </div>
                <div className="flex-grow flex-wrap">
                    <FavoriteCard />
                </div>
                <div className="flex-grow flex-wrap">
                    <FavoriteCard />
                </div>
            </section>
           </Container> 
        </main>
    )
}
export default Profile;

//absolute - posição exata nesta div quando for desktop
//flex 
//flex-col - colunas uma embaixo da outra
//flex-wrap - vai quebrar a linha
//gap-5 - espaço entre as colunas
//md:flex-row - tela grande coluna na mesma linha
//flex-grow - expande o máximo que puder
