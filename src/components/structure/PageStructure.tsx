import type { ReactNode, HTMLAttributes } from "react";
import "./pagestructure.scss";
import { Footer } from "./Footer";

type PageStructureProps = {
    children?: ReactNode;
    bgClass?: string;
    includeFooter?: boolean;
    pageWrapAttributes?: HTMLAttributes<HTMLDivElement> & {
        [key: `data-${string}`]: string;
    };
} & HTMLAttributes<HTMLDivElement>;

export function PageStructure({
    children,
    bgClass,
    includeFooter = true,
    className,
    pageWrapAttributes,
    ...pageContentAttributes
}: PageStructureProps) {

    return (
        <div className="page-wrap" data-page-wrap {...pageWrapAttributes}>
            <div
                className={`page-content ${className ?? ""}`}
                {...pageContentAttributes}
            >
                {children}
            </div>

            <div className={`page-bg ${bgClass ?? ""}`}></div>

            {includeFooter && <Footer />}
        </div>
    );
}

