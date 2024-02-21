import { ReactNode } from "react"

export const Container = ({children}: {children: ReactNode}) => {

    return(
        <div className="max-w-screen-xl mx-auto px-3">
            {children}
        </div>
    )

}

//max-w-screen-xl - max-width: 100%
//mx-auto - centralizar