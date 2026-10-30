const brandmarks = {
    darkKnockout: "https://raw.githubusercontent.com/redeswork/REDes-Assets/682d198304bf8d406ea167e768ced72190960e1d/REWork_Var02_knockout.svg",
    lightKnockout: "https://raw.githubusercontent.com/redeswork/REDes-Assets/682d198304bf8d406ea167e768ced72190960e1d/REWork_Var01_knockout.svg",
    dark: "https://raw.githubusercontent.com/redeswork/REDes-Assets/682d198304bf8d406ea167e768ced72190960e1d/REWork_Var02.svg",
    light: "https://raw.githubusercontent.com/redeswork/REDes-Assets/682d198304bf8d406ea167e768ced72190960e1d/REWork_Var01.svg",
};

type BrandmarkType = keyof typeof brandmarks;

export function Brandmark({ type = "darkKnockout" }: { type?: BrandmarkType }) {

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