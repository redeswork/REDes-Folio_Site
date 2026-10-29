import type { ReactNode } from "react"
import { Breadcrumbs } from "../../../function/createBreadcrubs"

import './header.scss'
import './heroHeader.scss'


export function HeroHeader( {
    variant = "light",
    heroHeading = "Hero Heading",
    heroSubHeading = "Hero subheading",
    heroCopy,
    children,
    childrenOverride = false,
    breadcrumb = true
}: {
    variant?: string,
    heroHeading?: string,
    heroSubHeading?: string,
    heroCopy?: string,
    children?: ReactNode,
    childrenOverride?: boolean,
    breadcrumb?: boolean

}) {

    const textColours: Record<string, string> = {
        "dark": "var(--colour-dark)",
        "light": "var(--colour-light)"
    }

    return(

        <>
            <header className="grid" style={{rowGap: "0.5rem"}}>

                {!childrenOverride && (
                <>
                    <div className="hero-heading-wrap" style={{gridRow: "1/2"}}>
                        {breadcrumb && ( <Breadcrumbs variant={variant} includeHome={true}/> )}
                        <h1 className="hero-heading light" style={{maxWidth: "", color: textColours[variant]}}>{heroHeading}</h1>
                    </div>

                    <div className="hero-content" style={{gridColumn: "1/13", gridRow: "2/3"}}>
                        <h2>
                            {heroSubHeading}
                        </h2>
                        <p className="hero-copy align-start" style={{color: textColours[variant]}}>
                            {heroCopy}
                        </p>
                        <div className="hero-sub-content">
                            {children}
                        </div>
                </div>
                </>
                )}
                {children && childrenOverride && (
                    children
                )}

            
            </header>    
        </>
    
    )
}