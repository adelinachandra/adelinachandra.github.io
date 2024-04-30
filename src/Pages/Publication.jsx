import { WorkingPaper } from './../Components/PublicationComponents/WorkingPaper/WorkingPaper';
import { Research } from './../Components/PublicationComponents/Research/Research';
import { BookEditing } from './../Components/PublicationComponents/BookEditing/BookEditing';
import { Blogpost } from './../Components/PublicationComponents/Blogpost/Blogpost';

var research_data = [
    {
        author:"Adelina Chandra, Rachael D. Garrett, Kimberly M. Carlson, Robert Heilmayr, Matthieu Stigler, Jason J. Benedict, and Janina Grabs",
        year:"2024",
        title:"How well does the implementation of corporate zero-deforestation commitments in Indonesia align with aims to halt deforestation and include smallholders?",
        type:"Environmental Research Letters",
        url:"https://iopscience.iop.org/article/10.1088/1748-9326/ad33d1"
    },
    {
        author:"Janina Grabs, Sophia Carodenuto, Kristjan Jespersen, Marshall A. Adams, Manuel Antonio Camacho, Giacomo Celi, Adelina Chandra, Jeremy Dufour, Erasmus K. H. J. zu Ermgassen, Rachael D. Garrett, Joss Lyons-White, Moray McLeish, Ina Niehues, Sofia Silverman, and Emily Stone ",
        year:"2024",
        title:"The role of midstream actors in advancing the sustainability of agri-food supply chains",
        type:"Nature Sustainability",
        url:"https://www.nature.com/articles/s41893-024-01296-9"
    },
    {
        author:"Adelina Chandra, Dimas Fauzi, Fadhilla Husnul Khatimah, and Satrio Adi Wicaksono",
        year:"2022",
        title:"Assessing drivers of forest conservation in Simancuang village forest, West Sumatra",
        type:"Springer Nature",
        url:"https://link.springer.com/article/10.1007/s11842-021-09489-2"
    },
    {
        author:"Adelina Chandra",
        year:"2020",
        title:"To grip or to slip: smallholder inclusion in sustainable palm oil certifications in Riau, Indonesia",
        type:"Master Thesis Series in Environmental Studies and Sustainability Science",
        url:"https://www.lu.se/lup/publication/9012152"
    },
    {
        author:"Fadhilla Khatimah, Dimas Fauzi, Adelina Chandra, and Satrio Adi Wicaksono",
        year:"2019",
        title:"Benefits over threats: understanding community's motivation to participate in restoration initiatives in Gunung Leuser National Park, Sumatra",
        type:"IOP Publishing",
        url:"https://iopscience.iop.org/article/10.1088/1755-1315/298/1/012027/meta"
    },
]

var journal_data = [
    {
        author:"Adelina Chandra, Aditya Alta, Basab Das Gupta, Valentine Gandhi, Christine E. Thomas, Ignatius Indriartoto, Mispan Indarjo, Ketty Kadarwati, Anastasia Susanto, Mohamad Ridlo",
        year:"2020",
        title:"Applied political economy analysis of USAID priority provinces in Indonesia",
        type:"USAID",
        url:"https://pdf.usaid.gov/pdf_docs/PA00X9TV.pdf"
    },
    {
        author:"Dimas Fauzi, Adelina Chandra, Fadhilla Khatimah, and Satrio Adi Wicaksono",
        year:"2019",
        title:"Development of an evaluation framework for Social Forestry programs in protected forest areas",
        type:"World Resources Institute",
        url:"https://wri-indonesia.org/en/publications/working-paper-development-evaluation-framework-social-forestry-programs-protected"
    },
]

var book_data = [
    {
        author:"(Ed.) Wahju Rudianto, Rini Rismayani, Rumchani Agus Sulistiyo, Satrio Adi Wicaksono, Adelina Chandra, Dimas Fauzi, Fadhilla Khatimah",
        year:"2017",
        title:"Successful participative ecosystem restoration stories book in nature reserves and natural conservation areas, ministry of environment and forestry",
        type:"FORDA PRESS for the Indonesian Ministry of Environment and Forestry",
        url:"http://ksdae.menlhk.go.id/assets/publikasi/BELAJAR-DARI-LAPANGAN.compressed.pdf"
    },
]

var blogpost_data = [
    {
        title:"Local communities restore two of Indonesia's most threatened national parks",
        year:"2018",
        type:"World Resources Institute",
        url:"https://wri-indonesia.org/en/insights/local-communities-restore-two-indonesias-most-threatened-national-parks"
    },
    {
        title:"Securing water, protecting forest: lessons learned from the management of a West Sumatran village forest",
        year:"2018",
        type:"World Resources Institute",
        url:"https://wri-indonesia.org/en/data/securing-water-protecting-forest-lessons-learned-management-west-sumatran-village-forest"
    },
    {
        title:"How to tackle domestic wastewater pollution? Start from the upstream",
        year:"2018",
        type:"World Resources Institute",
        url:"http://wri-indonesia.org/en/blog/how-tackle-domestic-wastewater-pollution-start-upstream"
    },
    {
        title:"Good data could save two million hectares of degraded conservation areas",
        year:"2018",
        type:"World Resources Institute",
        url:"https://wri-indonesia.org/en/insights/good-data-could-save-two-million-hectares-degraded-conservation-areas"
    },
    {
        title:"Stronger partnerships for more effective and sustainable ecosystem restoration in conservation areas in Indonesia",
        year:"2018",
        type:"World Resources Institute",
        url:"https://wri-indonesia.org/en/data/stronger-partnerships-more-effective-and-sustainable-ecosystem-restoration-conservation-areas"
    },
    {
        title:"Evaluation map of shallow groundwater vulnerability in Ci Leungsi Hulu Watershed",
        year:"2015",
        type:"Indonesia, funded and published as a national e-journal by Indonesian Ministry of Higher Education",
        url:""
    },
    {
        title:"Impact of land use changes on hydrological changes of Ci Leungsi Watershed",
        year:"2015",
        type:"University of Indonesia",
        url:""
    },
]


export function Publication () {
    return (
        <section id='publication' className='flex flex-col text-left my-2'>
            <h1 className='mt-4'> <i className='fa fa-file-text-o text-2xl'/> Research articles </h1>
            <Research data={research_data} />

            <h1 className='mt-4'> <i className='fa fa-file-text-o text-2xl'/> Working papers</h1>
            <WorkingPaper data={journal_data} />

            <h1 className='mt-4'> <i className='bi bi-book text-2xl'/> Book editing</h1>
            <BookEditing data={book_data} />

            <h1 className='mt-4'> <i className='bi bi-chat-left-text text-2xl'></i> Blogposts and other publications</h1>
            <Blogpost data={blogpost_data} />
        </section>
    )
}

export default Publication