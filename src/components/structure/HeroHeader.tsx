import type { ReactNode } from "react"
import { Breadcrumbs } from "../../function/createBreadcrubs"


export function HeroHeader( {
    variant = "light",
    heroHeading = "Hero Heading",
    heroCopy,
    children
}: {
    variant?: string,
    children?: ReactNode,
    heroHeading?: string,
    heroCopy?: string
}) {

    const textColours: Record<string, string> = {
        "dark": "var(--colour-dark)",
        "light": "var(--colour-light)"
    }

    return(

        <>
            <div className="grid" style={{}}>

                {!children && (
                <>
                    <div className="hero-heading-wrap" style={{gridRow: "1/2"}}>
                        <Breadcrumbs variant={variant} includeHome={true}/>
                        <h1 className="hero-heading light" style={{maxWidth: "", color: textColours[variant]}}>{heroHeading}</h1>
                    </div>

                    <p className="hero-copy align-start" style={{gridColumn: "1/7", gridRow: "2/3", color: textColours[variant]}}>
                        {heroCopy}
                    </p>
                </>
            )}

            {children}
            </div>    
        </>
    
    )
}