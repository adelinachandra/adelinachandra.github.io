import { BoldText } from '../../../helpers/boldText';

export function WorkingPaper ( props ) {
    const { data } = props;
    return (
        <section className="flex flex-col bg-gray-200 p-4 mt-4 rounded-xl">
            {data.map((item, i) => (
                <ol key={i} className=''>
                    <li className='ms-4 py-2'>
                        { 
                            (item.title   !== "" && item.url  !== "") ? (<a href={item.url} target='_blank'><h3 id="working-paper-title"> <i className='fa fa-file-text-o text-lg'/> <span className='hover:underline hover:drop-shadow-md'>{item.title}</span></h3></a>) : 
                            (item.title   !== "") ? (<h3 id="working-paper-title"> <i className='fa fa-file-text-o text-lg'/> {item.title} </h3>) : ("")
                        }
                        {item.year    !== "" ? (<p id="working-paper-informations">{item.year} <span>&#183;</span> in <span className='italic'>{item.type}</span></p>): ("")} 
                        {item.author  !== "" ? (<p id="working-paper-author"> {BoldText(item.author, 'Adelina Chandra')} </p>): ("")} 
                    </li>
                </ol>
            ))}
        </section>
    )
}

export default WorkingPaper