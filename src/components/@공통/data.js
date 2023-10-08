import CONFIG from '@/portfolio.config';

const stacks = [
    {
        id:1,
        name: 'HTML',
        imgName: "html.svg"
    },
    {
        id:2,
        name: 'CSS',
        imgName: "css.svg"
    },
    {
        id:3,
        name: 'JavaScript',
        imgName: "javascript.svg"
    },
    {
        id:4,
        name: 'TailwindCSS',
        imgName: "tailwind.svg"
    },
    {
        id:5,
        name: 'React',
        imgName: "react.svg"
    },
    {
        id:6,
        name: 'NextJS',
        imgName: "nextjs.svg"
    },
    {
        id:7,
        name: 'NodeJS',
        imgName: "nodejs.svg"
    },
    {
        id:8,
        name: 'GIT',
        imgName: "git.svg"
    },
    {
        id:9,
        name: 'Firebase',
        imgName: "firebase.svg"
    },
    {
        id:10,
        name: 'Ethers',
        imgName: "ethers.svg"
    }
]

const mainProjects = [
    {
        id: 1,
        menu: 'Career',
        title: "TeamA Holdings Full-stack",
        imgName: "teama_holdings.png",
        path: "https://teamaholdings.com/"
    },
    {
        id: 2,
        menu: 'Career',
        title: "ENFT-LAND FE Part",
        imgName: "enft.png",
        path: "https://enftland.com/"
    },
    {
        id: 2,
        menu: 'Project',
        imgName: "시장.jpg",
        title: "시장275 프로젝트",
        path: "https://github.com/robin3565/market_frontend",
    }
]

const projectData = [
    {
        title: 'Career',
        subtitle: '개발 프로젝트에서 FE Part 또는 Full-Stack을 담당했습니다.',
        state: [
            {
                id: 0,
                menu: 'Career',
                title: "ENFT-LAND FE Part",
                imgName: "enft.png",
                path: "https://enftland.com/"
            },
            {
                id: 1,
                menu: 'Career',
                title: "TeamA Holdings Full-stack",
                imgName: "teama_holdings.png",
                path: "https://teamaholdings.com/"
            },
            {
                id: 2,
                menu: 'Career',
                title: "Stand Full-stack",
                imgName: "stand.png",
                path: "https://stand1.info/"
            },
            {
                id: 3,
                menu: 'Career',
                title: "Upsun-Global FE Part",
                imgName: "upsun.png",
                path: "https://upsunglobal.com/"
            }
        ]
    },
    {
        title: 'Project',
        subtitle: '직접 서비스를 기획하고 구현한 프로젝트입니다.',
        state: [
            {
                id: 0,
                menu: 'Project',
                imgName: "시장.jpg",
                title: "시장275 프로젝트",
                path: "https://github.com/robin3565/market_frontend",
            }, {
                id: 1,
                menu: 'Project',
                imgName: "netflixClone.jpg",
                title: "Netflix Clone",
                path: "https://github.com/robin3565/netflix-clone-React",
            },
            {
                id: 2,
                menu: 'Project',
                imgName: "instagramClone.jpg",
                title: "Instagram Clone",
                path: "https://github.com/robin3565/instagram-clone-React",
            },
            {
                id: 3,
                menu: 'Project',
                imgName: "donaTodoApp.jpg",
                title: "Dona Todo App Clone",
                path: "https://github.com/robin3565/dona-clone-React",
            }
        ],
    },
    {
        title: 'Study',
        subtitle: '개발에 필요한 지식을 쌓기 위해 진행한 스터디 프로젝트입니다.',
        state: [
            {
                id: 1,
                menu: 'study',
                title: "Data Structures in JS",
                path: "vanillaJS",
                imgName: "algorithms.png",
                path: "https://github.com/robin3565/DataStructures_JavaScript"
            }
        ]
    }
]

const blogmenu = ["ALL", "CS", "HTML/CSS", "JavaScript", "React"]
const projectsmenu = ["All", "Project", "Clone", "Study"]
const navmenu = ['About', 'Projects', 'Contact']
const contents = {
    kor: `안녕하세요. 웹 개발자 ${CONFIG.keyword.kr}입니다.`,
    eng: `Hello! I'm ${CONFIG.keyword.en}, the developer.`,
    chn: `你好！我叫${CONFIG.keyword.en}，是网站开发者。`
};

export { projectData, blogmenu, navmenu, projectsmenu, contents, mainProjects, stacks };