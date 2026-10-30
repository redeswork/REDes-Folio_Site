const brandmarks = {
    svgDarkKnockout: "https://raw.githubusercontent.com/redeswork/REDes-Assets/682d198304bf8d406ea167e768ced72190960e1d/REWork_Var02_knockout.svg",
    svgLightKnockout: "https://raw.githubusercontent.com/redeswork/REDes-Assets/682d198304bf8d406ea167e768ced72190960e1d/REWork_Var01_knockout.svg",
    svgDark: "https://raw.githubusercontent.com/redeswork/REDes-Assets/682d198304bf8d406ea167e768ced72190960e1d/REWork_Var02.svg",
    svgLight: "https://raw.githubusercontent.com/redeswork/REDes-Assets/682d198304bf8d406ea167e768ced72190960e1d/REWork_Var01.svg",
};

type BrandmarkType = keyof typeof brandmarks;

export function Brandmark({ type = "svgDarkKnockout" }: { type?: BrandmarkType }) {

    return (
        <div className="brand-wrap" style={{ height: "61.8%" }}>
            <img
                src={brandmarks[type]}
                alt="RE Design"
                style={{
                    display: "block",
                    height: "100%",
                    aspectRatio: 1,
                    objectFit: "cover"
                }}
            />
        </div>
    );
}