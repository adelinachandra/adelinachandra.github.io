// formatDate
import { formatDate } from '../../helpers/formatDate';

export function Experiencelist ( props ) {
    const { data } = props;
    return (
        <section id="experience-list" className='relative border-s border-black dark:border-gray ms-4'>
             {data.map(item => (
                <ol>
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-4">
                        <img src={item.logo} alt="" className="w-10 h-10 rounded-full object-cover" />
                    </span>
                    <li className='ms-8'>
                        <h3 id="experience-position" className='mb-2'> {item.title} </h3>
                        <p id="experience-company">{item.company}</p>
                        <p id="experience-time" className='mb-1'> {formatDate(item.start_date)} - {formatDate(item.end_date)} </p>
                        <p id="experience-description" className='mb-2'> {item.description} </p>
                    </li>
                </ol>
            ))}
        </section>
    )
}

export default Experiencelist