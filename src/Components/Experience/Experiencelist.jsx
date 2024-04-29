// formatDate
import { formatDate } from '../../helpers/formatDate';

export function Experiencelist ( props ) {
    const { data } = props;
    return (
        <section id="experience-list" className='relative border-s border-gray-300 dark:border-gray-300 ms-4'>
             {data.map((item, i) => (
                <ol key={i}>
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-4">
                        <img src={item.logo} alt="" className="w-10 h-10 rounded-full object-cover" />
                    </span>
                    <li className='ms-8'>
                        <h3 id="experience-position" className=''> {item.title} </h3>
                        <p id="experience-company" className='font-bold'>{item.company}</p>
                        <p id="experience-time" className='text-gray-500 text-sm italic mb-2'> {formatDate(item.start_date)} - {formatDate(item.end_date)} </p>
                        <p id="experience-description" className='mb-3'> {item.description} </p>
                    </li>
                </ol>
            ))}
        </section>
    )
}

export default Experiencelist