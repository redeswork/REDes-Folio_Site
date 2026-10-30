
import { Link, useLocation } from "react-router";
import { pages } from "../pages/pageIndex";

export function Breadcrumbs({
    variant = "dark",
    includeHome = true,
    transitionKey = "vertical-mask-under"
}: {
    variant?: string;
    includeHome?: boolean;
    transitionKey?: string;
}) {
    const location = useLocation();
    const currentPath = location.pathname;


    const textColours: Record<string, string> = {
        dark: "var(--colour-cta-dark)",
        light: "var(--colour-light)"
    };

    const breadcrumbs = Object.entries(pages)
        .filter(([path]) =>
            currentPath === path || currentPath.startsWith(`${path}/`)
        )
        .filter(([path]) => path !== "/")
        .sort(([a], [b]) => a.length - b.length);

    return (
        <p className="eyebrow-copy" style={{ color: textColours[variant] }}>
            {includeHome && currentPath !== "/" && (
                <>
                    <Link
                        to="/"
                        className="intext-link"
                        data-transition={transitionKey}
                    >
                        Home
                    </Link>
                    {breadcrumbs.length > 0 && " / "}
                </>
            )}

            {breadcrumbs.map(([path, page], index) => (
                <span key={path}>
                    {index > 0 && " / "}

                    {path === currentPath ? (
                        page.label
                    ) : (
                        <Link
                            to={path}
                            className="intext-link"
                            data-transition={transitionKey}
                        >
                            {page.label}
                        </Link>
                    )}
                </span>
            ))}
        </p>
    );
}
