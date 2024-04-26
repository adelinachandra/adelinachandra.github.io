import { Experiencelist } from './Experiencelist';
import LogoIGIA from '../../assets/logo/IndonesiaGeospatialInformationAgencylogo.png';
import LogoUI from '../../assets/logo/ui.svg';

var exp_data = [
    {
        title       : "Political Economy Researcher",
        company     : "Social Impact & USAID",
        start_date  : "01-07-2020",
        end_date    : "01-09-2020",
        description : "Researcher in Political Economy Analysis for strategic development assessment of South Sulawesi Province in Indonesia. Responsible in conducting interviews with various stakeholders, analyzing the findings qualitatively and report writing",
        logo        : "https://logowik.com/content/uploads/images/usaid3327.jpg"
    },
    {
        title       : "Graduate Student Researcher",
        company     : "World Resources Institute",
        start_date  : "01-01-2020",
        end_date    : "01-03-2020",
        description : "The research was accepted and hosted by the WRI in Indonesia under the project of oil palm smallholder transformation. Arranging fieldwork, semi-structured interviews and focus group discussions with independent smallholders on the field. This research covered both analyses on the newly published RSPO standard for independent smallholders and ISPO. The research is inclusive to many stakeholders within the field.",
        logo        : "https://scontent.fcgk18-1.fna.fbcdn.net/v/t39.30808-6/310440007_481565077352658_4596890229001170268_n.png?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGLxAIGhr8GiodWc3bc-6clCDJ6L1Kw15kIMnovUrDXmetBzfUUFzEWqmUQJwWqDEr2w_vhERDHCERAI87l8R_N&_nc_ohc=kgAqr6b65rAAb68Ghcb&_nc_ht=scontent.fcgk18-1.fna&oh=00_AfCeVe7xWCJ1TbfjDLiBtiJGcs3_IHcYkY2ugbhLxBiTnQ&oe=663146F8"
    },
    {
        title       : "Researcher",
        company     : "World Resources Institute",
        start_date  : "01-08-2017",
        end_date    : "01-09-2018",
        description : "Part of Wahana Riset Indonesia, a WRI’s research incubator. Conducted three interdisciplinary research focused on social forestry and forest and landscape restoration. Produced several research outcomes and publications",
        logo        : "https://scontent.fcgk18-1.fna.fbcdn.net/v/t39.30808-6/310440007_481565077352658_4596890229001170268_n.png?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGLxAIGhr8GiodWc3bc-6clCDJ6L1Kw15kIMnovUrDXmetBzfUUFzEWqmUQJwWqDEr2w_vhERDHCERAI87l8R_N&_nc_ohc=kgAqr6b65rAAb68Ghcb&_nc_ht=scontent.fcgk18-1.fna&oh=00_AfCeVe7xWCJ1TbfjDLiBtiJGcs3_IHcYkY2ugbhLxBiTnQ&oe=663146F8"
    },
    {
        title       : "GIS Specialist",
        company     : "Indonesia's Geospatial Information Agency",
        start_date  : "01-04-2015",
        end_date    : "01-08-2017",
        description : "Worked with Geo-Spatial Information Agency in cooperation with The Ministry of National Development Planning in conducting research and preparing for Indonesia's medium term National and Regional-level spatial and development plan.",
        logo        : LogoIGIA
    },
    {
        title       : "Research Assistant",
        company     : "Department of Geography, Universitas Indonesia",
        start_date  : "01-08-2014",
        end_date    : "01-02-2015",
        description : "Responsible in hydrodynamics modelling using MW SWAT, analysed the impact of climate change on watershed dynamics using remote sensing data.",
        logo        : LogoUI
    },
    {
        title       : "GIS Instructor",
        company     : "Department of Geography, Universitas Indonesia",
        start_date  : "01-01-2013",
        end_date    : "01-07-2013",
        description : "",
        logo        : LogoUI
    },
]

export function Experience () {
    return (
        <section id='experience' className='flex flex-col text-left my-4'>
            <h1 className='mb-5'>Experience</h1>
            <Experiencelist data = {exp_data}/>
        </section>
    )
}

export default Experience