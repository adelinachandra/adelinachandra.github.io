import { ProjectList } from './../Components/ProjectComponents/ProjectList';
import { Teaching } from './../Components/ProjectComponents/Teaching';
import ZeroDeforestration from '../assets/logo/zerodeforestation.png'
import Borderless from '../assets/logo/borderless.png'


const project_data = [
    {
        project_name:"Zero-deforestation impact",
        project_logo: ZeroDeforestration,
        description:"A research project assessing the effectiveness and equity of zero-deforestation commitment.",
        subsection:"Current implementation:",
        subsection_data:"> A-five year project focusing on smallholder hub in Sumatra, Indonesia",
        other_information: [
            {
                title: "Project website",
                url: "https://www.zerodeforestationimpacts.com/"
            },
        ]
    },
    {
        project_name:"Borderless Indonesia",
        project_logo: Borderless,
        description:"Borderless, a learning network, brings together people with shared goals of sustainability.",
        subsection:"Recent Project: Borderless Mentorship 1.0",
        subsection_data:"This one-year mentorship program is tailored for young Indonesians who are passionate about sustainability and planning to pursue further education.",
        other_information: [
            {
                title: "Outreach",
                url: "https://www.instagram.com/borderless.id/"
            },
            {
                title: "Podcast",
                url: "https://spoti.fi/2Lp6NBs"
            },
        ]
    },
]

const teaching_data = [
    {
        title:"Policy and Economics of Ecosystem Services (MSc.)",
        sub_title:"",
        year:"2023",
        location:"ETH Zürich",
        description:"Teaching assistant for course offered at the Department of Environmental System Sciences.",
    },
    {
        title:"Geographical Information System (BSc.)",
        sub_title:"",
        year:"2013",
        location:"University of Indonesia",
        description:"Tutorial instructor for course offered at the Department of Geography.",
    },
    {
        title:"Ad-hoc classes: ",
        sub_title:"Geographical Information System for spatial planning ",
        year:"2016",
        location:"Bali ",
        description:"A tutorial session for Regional Development Planning Agencies in Indonesia.",
    },
    {
        title:"Geographical Information System for policy analysis ",
        sub_title:"",
        year:"2017",
        location:"Jakarta",
        description:"A tutorial session organised by WRI Indonesia for local government officials from Eastern Indonesia.",
    },
]

export function Projects () {
    return (
        <section id="projects" className="mt-4">
            <div id="projects_container">
                <h2 className='flex flex-col text-left bg-gray-200 rounded-lg my-2 p-2'>Projects</h2>
                <ProjectList data={project_data}/>
            </div>
            <div id="teaching_container">
                <h2 className='flex flex-col text-left bg-gray-200 rounded-lg mt-4 mb-2 p-2'>Teaching</h2>
                <Teaching data={teaching_data}/>
            </div>
        </section>
    )
}

export default Projects