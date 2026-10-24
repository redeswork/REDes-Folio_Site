export function IconArrow({colour = "#7531f7", rotate = 0 }: {colour?: string, rotate?: number}) {


    return (
        <svg
            viewBox="0 -960 960 960"
            width="100%"
            height="100%"
            fill={colour}
            style={{ transform: `rotate(${rotate}deg)`}}
            aria-hidden="true"
        >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>
    )
}