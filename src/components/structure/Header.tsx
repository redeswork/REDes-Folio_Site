import './header.scss'


export function HeaderBlock(
    {
        headerText = "Header Text",
        headerTextSize = "h2",
        headerCopy = "This is some header copy text for preview.",
        headerCopySize = "h6",
        direction = "vertical",
    
    } :
    {
        headerText?: string,
        headerTextSize?: string,
        headerCopy?: string,
        headerCopySize?: string,
        direction?: string
    }
) {


    return (
        <>
    

            <div className={`${direction === "horizontal" ? "grid align-bottom" : "header-block"}`}>

                <h2 className={`header-heading ${direction === "horizontal" ? "horizontal" : ""}`}
                style={{
                    fontSize: `var(--text-${headerTextSize})`,
                }}>
                
                    {headerText}
                </h2>


                <p className={`header-copy ${direction === "horizontal" ? "horizontal" : ""}`}
                style={{
                    fontSize: `var(--text-${headerCopySize})`,
                }}>
                    {headerCopy}
                </p>
        
            </div>
            
        </>
    )
}