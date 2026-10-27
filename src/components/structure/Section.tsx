import type { ReactNode } from "react";



export function Section(
    { children, classes = "", wrapper = true, wrapperClasses = "" }:
    { children?: ReactNode, classes?: string, wrapper?: boolean, wrapperClasses?: string }
) {


    return (

        <section className={`section ${classes}`}>

            {wrapper ? (

                <div className={`wrapper ${wrapperClasses}`}>
                    {children}
                </div>

            ) : (

                children
            
            )}


        </section>
    )
}