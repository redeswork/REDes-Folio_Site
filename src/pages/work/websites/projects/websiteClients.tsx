type websiteClientsType = {
    name: string
}


type websiteClientsId = "IE" | "HH";


export const websiteClients: Record<websiteClientsId, websiteClientsType> = {
    "IE": {
        name: "Immersive Everywhere"
    },
    "HH": {
        name: "Hartshorn Hook"
    }
}