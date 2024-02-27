
import Image from 'next/image'
import Link from 'next/link'
import logoImg from '@/assets/logo.svg'
import {LiaGamepadSolid} from "react-icons/lia"

export function Header(){
  return(
    <header className="w-full h-28 bg-slate-100 text-black px-2">
        <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between px-2">
            <nav className="flex gap-4 justify-center items-center">
                <Link href="/">
                    <Image 
                    className="w-full"
                    src={logoImg}
                    alt="Logo do Sistema"
                    priority={true}
                    quality={100}
                    />
                </Link>

                <Link href="/">
                   Games
                </Link>
              
                <Link href="/profile">
                   Perfil
                </Link>
            </nav>
            <div className="hidden sm:flex justify-center items-center">
                <Link href="/">
                    <LiaGamepadSolid size={34} color="#00c1c4" />
                </Link>
            </div>

        </div>
    </header>
  )
}
//max-w-screen-xl - 1280px
//w-full - 100%
//mx-auto - centro
//gap-4 - espaço dos links
