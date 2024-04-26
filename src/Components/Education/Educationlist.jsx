// formatDate
import { formatDate } from '../../helpers/formatDate';

export function Educationlist ( props ) {
    const { data } = props;
    return (
        <section id="education-list" className='relative border-s border-black dark:border-gray ms-4'>
             {data.map(item => (
                <ol>
                    <span class="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-4">
                        <img src={item.logo} alt="" className="min-w-10 min-h-10 rounded-full object-cover" />
                    </span>
                    <li className='ms-8'>
                        <h3 id="education-position" className='mb-2'> {item.title} </h3>
                        <p id="education-company">{item.company}</p>
                        <p id="education-time" className='mb-1'> {formatDate(item.start_date)} - {formatDate(item.end_date)} </p>
                    </li>
                </ol>
            ))}
        </section>
    )
}

export default Educationlist