
import { HomePage } from "./home/Home";
import { HomeNew } from "./homeNew/HomeNew";
import { Websites } from "./work/websites/websites";
import { TestPage } from "./testPage/TestPage";
import { Work } from "./work/portfolio";
import { websiteProjects } from "./work/websites/projects/websiteData";
import { WebsiteProject } from "./work/websites/websiteTemplate";


export const pages = {
    "/": {
        component: HomePage,
        label: "Home"
    },
    "/test-page": {
        component: TestPage,
        label: "Test Page"
    },
    "/home-dev": {
        component: HomeNew,
        label: "Home"
    },
    "/work": {
        component: Work,
        label: "Work"
    },
    "/work/websites": {
        component: Websites,
        label: "Websites"
    },


    ...Object.fromEntries(
        websiteProjects.map((project) => [
            `/work/websites/${project.slug}`,
            {
                component: WebsiteProject,
                label: project.title
            }
        ])
    )

};
