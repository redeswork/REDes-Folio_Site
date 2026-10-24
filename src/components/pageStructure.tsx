import type { ReactNode } from "react"


export function PageStructure({children}: {children: ReactNode}) {


    return (

        <div className="smooth-wrapper">
            <div className="smooth-content">
                <div className="barba-wrapper" data-barba="wrapper">
                    <div className="barba-container" data-barba="container">
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}