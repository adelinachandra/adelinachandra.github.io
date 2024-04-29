import { BoldText } from '../../../helpers/boldText';

export function Publicationslist ( props ) {
    const { data } = props;
    return (
        <section id="publications-list" className=''>
                
             {data.map((item, i) => (
                <ol key={i} className='hover:publicationAnimations border-2 dark:border-gray ms-2 my-6 bg-gray-200 text-black rounded-3xl py-2 px-3 pr-3'>
                    <li className='ms-4 py-2'>
                        <h3 id="publications-title" className='mb-2 text-xl'> {item.title} </h3>
                        <p id="publications-informations" className='text-sm text-gray-400 mb-2'>{item.year} <span>&#183;</span> in <span className='italic'>{item.type}</span></p>
                        <p id="publications-author" className='mb-1'> {BoldText(item.author, 'Adelina Chandra')} </p>
                        <a id="publications-url" href={item.url} target='_blank' className='hover:shadow-xl mb-2 border-2 bg-gray-100 text-blue-950 rounded-md px-2 py-1 my-2 text-xs self-end'> DOI </a>
                    </li>
                </ol>
            ))}
        </section>
    )
}

export default Publicationslist;