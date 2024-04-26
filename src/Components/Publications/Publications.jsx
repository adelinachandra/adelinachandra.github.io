import { Publicationslist } from './PublicationsList';
import LogoIGIA from '../../assets/logo/IndonesiaGeospatialInformationAgencylogo.png';
import LogoUI from '../../assets/logo/ui.svg';

var exp_data = [
    {
        author:"Adelina Chandra, Rachael D. Garrett, Kimberly M. Carlson, Robert Heilmayr, Matthieu Stigler, Jason J. Benedict, and Janina Grabs",
        year:"2024",
        title:"Do corporate zero-deforestation commitments in Indonesia target forest at risk while ensuring smallholder inclusion?",
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
]

export function Publications () {
    return (
        <section id='publications' className='flex flex-col text-left my-4'>
            <h1 className=''>Featured publications</h1>
            <Publicationslist  data={exp_data} />
        </section>
    )
}

export default Publications