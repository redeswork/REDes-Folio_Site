type websiteClientsType = {
    name: string,
    link: string,
}


type websiteClientsId = "IE" | "HH" | "EMG" | "PBO" | "TT" | "BVG" | "WPE" | "RB";


export const websiteClients: Record<websiteClientsId, websiteClientsType> = {
    "IE": {
        name: "Immersive Everywhere",
        link: "https://www.immersiveeverywhere.com/",
    },
    "HH": {
        name: "Hartshorn Hook",
        link: "https://www.hartshornhook.com/"
    },
    "EMG": {
        name: "EMG Entertainment",
        link: "https://emg-ents.com/"
    },
    "PBO": {
        name: "Perthshire Theatre and Concert Hall",
        link: "https://www.perththeatreandconcerthall.com/"
    },
    "TT" : {
        name: "Troubadour Theatres",
        link: "https://www.troubadourtheatres.com/"
    },
    "BVG" : {
        name: "Annerin",
        link: "https://www.annerin.com/"
    },
    "WPE" : {
        name: "Wild Park Entertainment",
        link: "https://www.wildparkentertainment.com/"
    },
    "RB" : {
        name: "Ray Bradshaw",
        link: "https://www.raybradshaw.com/"
    }


}