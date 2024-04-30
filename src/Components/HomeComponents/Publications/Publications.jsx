import { Publicationslist } from './PublicationsList';

var exp_data = [
    {
        author:"Adelina Chandra, Rachael D. Garrett, Kimberly M. Carlson, Robert Heilmayr, Matthieu Stigler, Jason J. Benedict, and Janina Grabs",
        year:"2024",
        title:"How well does the implementation of corporate zero-deforestation commitments in Indonesia align with aims to halt deforestation and include smallholders?",
        type:"Environmental Research Letters",
        url:"https://iopscience.iop.org/article/10.1088/1748-9326/ad33d1",
        abstract:"In response to growing scrutiny surrounding commodity-driven deforestation, companies have introduced zero-deforestation commitments (ZDCs) with ambitious environmental and social targets. However, such initiatives may not effectively reduce deforestation if they are not aligned with the spatial extent of remaining forests at risk. They may also fail to avert socio-economic risks if ZDCs do not consider smallholder farmers' needs. We assess the spatial and functional fit of ZDCs by mapping commodity-driven deforestation and socio-economic risks, and comparing them to the spatial coverage and implementation of ZDCs in the Indonesian palm oil sector. Our study finds that companies' ZDCs often underperform in four areas: traceability, compliance support for high-risk palm oil mills, transparency, and smallholder inclusion. In 2020, only one-third of companies sourcing from their own mills, and just 6% of those sourcing from external suppliers, achieved full traceability to plantations. Comparing the reach of ZDCs adopted by downstream buyers with those adopted by mill owners located further upstream, we find that high-quality ZDCs from buyers covered 62% of forests at risk, while mill owners' ZDCs only covered 23% of forests at risk within the mill supply base. In Kalimantan and Papua, the current and future deforestation frontiers, the forests most at risk of conversion were predominantly covered by weak ZDCs lacking in policy comprehensiveness and implementation. Additionally, we find that only 46% of independent smallholder oil palm plots are in mill supply sheds whose owners offer programs and support for independent smallholders, indicating that smallholder inclusion is a significant challenge for ZDC companies. These results highlight the lack of spatial and functional alignment between supply chain policies and their local context as a significant gap in ZDC implementation and a challenge that the EU Deforestation Regulation will face."
    },
    {
        author:"Janina Grabs, Sophia Carodenuto, Kristjan Jespersen, Marshall A. Adams, Manuel Antonio Camacho, Giacomo Celi, Adelina Chandra, Jeremy Dufour, Erasmus K. H. J. zu Ermgassen, Rachael D. Garrett, Joss Lyons-White, Moray McLeish, Ina Niehues, Sofia Silverman, and Emily Stone ",
        year:"2024",
        title:"The role of midstream actors in advancing the sustainability of agri-food supply chains",
        type:"Nature Sustainability",
        url:"https://www.nature.com/articles/s41893-024-01296-9",
        abstract:"Global food supply chains remain critical drivers of ecosystem degradation and social injustices. In this Perspective we invite policymakers, civil society actors, businesses and researchers to direct attention to the middle of global supply chains, where various actors—referred to as ‘midstream actors’—operate between agricultural commodity producers and manufacturers of food products. We highlight the power of this less visible segment (spanning multinational trading houses to small-scale aggregators of commodities) and the potential leverage that can be harnessed to improve supply chain and food system sustainability. Not engaging these actors poses a risk to the impact of supply chain policy."
    },
    {
        author:"Adelina Chandra, Dimas Fauzi, Fadhilla Husnul Khatimah, and Satrio Adi Wicaksono",
        year:"2022",
        title:"Assessing drivers of forest conservation in Simancuang village forest, West Sumatra",
        type:"Springer Nature",
        url:"https://link.springer.com/article/10.1007/s11842-021-09489-2",
        abstract:"This study empirically assessed Social Forestry program implementation in Simancuang Village Forest or locally known as Hutan Nagari (HN) Simancuang in West Sumatra, Indonesia. We performed two analyses using primary and secondary data, namely propensity score matching to estimate the effects of the enactment of HN Simancuang in 2012 on forest cover loss and ordinal logistic regression (OLR) to predict the determinants of conservation awareness. The results of the forest cover analysis showed that forest cover loss in HN Simancuang between 2012 and 2019 was 0.038 percentage point lower than the adjacent protection forest. The relatively small impact was meaningful because although HN Simancuang is located much closer to settlements which increases the pressure on the forest, it could still maintain lower tree cover losses than the adjacent protection forest. This result indicated a certain degree of conservation awareness among HN Simancuang members, which prompted us to conduct a survey to 111 individuals from different households. To do this, we used the Ecosystem Services framework to conceptualise conservation awareness in HN Simancuang. Our OLR results showed that regulating and provisioning services of forests are the strong determinants of conservation awareness among the individuals in our sample. Our study indicates the need to implement social forestry program monitoring and evaluation, improve access to facilitation, and enhance agroforestry practice as the means to increase conservation awareness among forest-dwelling communities."
    },
]

export function Publications () {
    return (
        <section id='publications' className='flex flex-col text-left my-2'>
            <h1 className=''>Featured publications</h1>
            <Publicationslist  data={exp_data} />
        </section>
    )
}

export default Publications