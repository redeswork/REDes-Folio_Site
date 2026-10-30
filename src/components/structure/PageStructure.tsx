import type { ReactNode } from "react"
import './pagestructure.scss'
import { Footer } from "./Footer";

export function PageStructure(
    { 
        children,
        bgClass
     }:
     {
        children?: ReactNode;
        bgClass?: string;
    }) {



    return (
        <>
            <div className="page-content">
                {children}
            </div>
            <div className={`page-bg ${bgClass}`}></div>
            <Footer />
        </>
    )
}