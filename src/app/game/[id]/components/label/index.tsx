
interface LabelProps {
    nome: string;
}
export const Label = ({ nome }: LabelProps) => {

    return(
        <div className="flex-grow sm:flex-grow-0 py-1 px-3 bg-slate-200 text-black text-center rounded-lg hover:font-bold duration-200">
            {nome}
        </div>
    )
}
//flex-grow - cresce - sm:flex-grow-0 está estabelecendo um comportamento em que, em telas pequenas, 
//o item não deve crescer, mas em outros tamanhos de tela, ele seguirá as 
//regras normais de crescimento flexível. Essa abordagem é comumente usada 
//para controlar o layout em diferentes dispositivos, garantindo uma experiência responsiva.