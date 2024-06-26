import { Experiencelist } from './Experiencelist';
import LogoIGIA from '../../../assets/logo/IndonesiaGeospatialInformationAgencylogo.png';
import LogoUI from '../../../assets/logo/ui.svg';

var exp_data = [
    {
        title       : "Political Economy Researcher",
        company     : "Social Impact & USAID",
        start_date  : "01-07-2020",
        end_date    : "01-09-2020",
        description : "Developed political economy assessment for a five-year strategic development plan for South Sulawesi, Indonesia.",
        logo        : "https://logowik.com/content/uploads/images/usaid3327.jpg"
    },
    {
        title       : "Graduate Student Researcher",
        company     : "World Resources Institute",
        start_date  : "01-01-2020",
        end_date    : "01-03-2020",
        description : "Acquired funding from Swedish International Centre for Local Democracy and hosted by WRI to do fieldwork and data collection in Indonesia for Master's thesis project.",
        logo        : "https://scontent.fcgk18-1.fna.fbcdn.net/v/t39.30808-6/310440007_481565077352658_4596890229001170268_n.png?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGLxAIGhr8GiodWc3bc-6clCDJ6L1Kw15kIMnovUrDXmetBzfUUFzEWqmUQJwWqDEr2w_vhERDHCERAI87l8R_N&_nc_ohc=kgAqr6b65rAAb68Ghcb&_nc_ht=scontent.fcgk18-1.fna&oh=00_AfCeVe7xWCJ1TbfjDLiBtiJGcs3_IHcYkY2ugbhLxBiTnQ&oe=663146F8"
    },
    {
        title       : "Researcher",
        company     : "World Resources Institute",
        start_date  : "01-08-2017",
        end_date    : "01-09-2018",
        description : "Part of Wahana Riset Indonesia, a WRI's research incubator. Conducted three interdisciplinary research focused on social forestry and forest and landscape restoration.",
        logo        : "https://scontent.fcgk18-1.fna.fbcdn.net/v/t39.30808-6/310440007_481565077352658_4596890229001170268_n.png?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGLxAIGhr8GiodWc3bc-6clCDJ6L1Kw15kIMnovUrDXmetBzfUUFzEWqmUQJwWqDEr2w_vhERDHCERAI87l8R_N&_nc_ohc=kgAqr6b65rAAb68Ghcb&_nc_ht=scontent.fcgk18-1.fna&oh=00_AfCeVe7xWCJ1TbfjDLiBtiJGcs3_IHcYkY2ugbhLxBiTnQ&oe=663146F8"
    },
    {
        title       : "GIS Specialist",
        company     : "Indonesia's Geospatial Information Agency",
        start_date  : "01-04-2015",
        end_date    : "01-08-2017",
        description : "Contributed to research and development of Indonesia's medium-term National and Regional-level spatial and development plans. These plans focused on the development of three of Indonesia’s strategic initiatives: the Sea Toll maritime development route, the regional development plan for national borders, and the national spatial development plan.",
        logo        : LogoIGIA
    },
    {
        title       : "Research Assistant",
        company     : "Department of Geography, University of Indonesia",
        start_date  : "01-08-2014",
        end_date    : "01-02-2015",
        description : "Conducted hydrological modeling to assess the impacts of land use changes on watershed dynamics, focusing on water quantity and groundwater levels, using remote sensing data and primary data collection at the upstream level of the watershed.",
        logo        : LogoUI
    },
    {
        title       : "GIS Instructor",
        company     : "Department of Geography, University of Indonesia",
        start_date  : "01-01-2013",
        end_date    : "01-07-2013",
        description : "Assisted in tutorial classes and provided hands-on guidance to enhance student understanding and proficiency in GIS applications.",
        logo        : LogoUI
    },
]

export function Experience () {
    return (
        <section id='experience' className='flex flex-col text-left my-4'>
            <h1 className='mb-3'>Experience</h1>
            <Experiencelist data = {exp_data}/>
        </section>
    )
}

export default Experience