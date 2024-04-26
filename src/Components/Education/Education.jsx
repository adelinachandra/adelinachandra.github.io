import { Educationlist } from './Educationlist';
import LogoETH from '../../assets/logo/ETH.jpeg';
import LogoCambridge from '../../assets/logo/Cambridge.jpg';
import LogoLund from '../../assets/logo/Lund.svg';
import LogoUI from '../../assets/logo/ui.svg';

var exp_data = [
    {
        title       : "Doctoral Candidate",
        company     : "Environmental Policy, Department of Environmental System Science, ETH Zürich, Switzerland",
        start_date  : "01-07-2020",
        end_date    : "01-08-2024",
        // description : "Affiliated with Conservation and Development, Department of Geography, University of Cambridge, United Kingdom Topic: Forest-focused commodity supply chain in the deforestation-risk commodities, focusing on palm oil sector",
        logo        : LogoETH
    },
    {
        title       : "Research Fellow",
        company     : "Department of Geography, University of Cambridge, United Kingdom",
        start_date  : "01-05-2023",
        end_date    : "01-07-2023",
        logo        : LogoCambridge
    },
    {
        title       : "Master of Science student in Environmental Studies and Sustainability Science",
        company     : "Faculty of Social Science, Lund University, Sweden",
        start_date  : "01-07-2020",
        end_date    : "01-08-2020",
        logo        : LogoLund
    },
    {
        title       : "BSc in Geography (Hons)",
        company     : "Faculty of Mathematics and Natural Sciences, University of Indonesia, Indonesia",
        start_date  : "01-01-2011",
        end_date    : "01-09-2015",
        logo        : LogoUI
    },
]

export function Education () {
    return (
        <section id='education' className='flex flex-col text-left my-4'>
            <h1 className='mb-5'>Education</h1>
            <Educationlist data = {exp_data}/>
        </section>
    )
}

export default Education