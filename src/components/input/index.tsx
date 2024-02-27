"use client"
import { FormEvent, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export const Input = () => {

    const [input, setInput] = useState("");
    const router = useRouter();

    const handleSearch = (event: FormEvent) => {
        event.preventDefault();
       // alert(input);
        if(input === "") return;

       router.push(`/game/search/${input}`) //Passa para a url o que o usuário digitou, chamdo de [title] - parâmetro
    }
    return(
        <form onSubmit={handleSearch}
        className="w-full bg-slate-200 flex items-center justify-between p-2 gap-2 my-5 rounded-lg"
        >
            <input 
            className="bg-slate-200 outline-none w-11/12"
            type="text" 
            placeholder="Procurando algum jogo?..."
            value={input}
            onChange={ (event) => setInput(event.target.value) }
            />
            <button type="submit">
                <FiSearch size={24} color="#ea580c" />
            </button>
        </form>
    )
}
//w-11/12 - largura de quase 100% do input