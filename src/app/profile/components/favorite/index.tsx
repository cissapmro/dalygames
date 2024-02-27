
"use client"
import { FiEdit, FiX } from "react-icons/fi"
import { useState } from "react"


export const FavoriteCard = () => {

    const [input, setInput] = useState("");
    const [showInput, setShowInput] = useState(false);
    const [gameName, setGameName] = useState("");

    const handleButton = () => {
        setShowInput(!showInput);

        //Se input for diferente de vazio setGameNmae vai receber o valor do input
        if(input !== ""){
            setGameName(input);
        }
        setInput("");
    }

    return(
            <div className="w-full bg-slate-900 text-white p-4 h-44 rounded-lg flex flex-col justify-between">
              {showInput ? (
                <div className="flex flex-col md:flex-row gap-4">
                <input 
                className="w-full h-8 px-2 rounded-lg text-black"
                type="text" 
                value={input}
                onChange={(event) => setInput(event.target.value)}
                />
                <button onClick={handleButton}>
                    <FiX />
                </button>
                </div>
              ) : (
                <button 
                onClick={handleButton}
                className="self-start hover:scale-110 transition-all duraction-200">
                    <FiEdit size={24} />
                </button>
              )}
              {gameName && (
                <div>
                    <span className="text-white">Jogo favorito:</span>
                    <p>{gameName}</p>
                </div>
              )}
              {!gameName && (
                <p className="font-bold text-white">Mostrar jogo</p>
              )}
            </div>
    )
}
//w-full - largura 100%
//flex-col - conteúdo em baixo do outro
//justify-between - em cima e em baixo
//self-start - mantém no início - não sai da posiçao do inicio