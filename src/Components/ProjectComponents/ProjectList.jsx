export function ProjectList ( props ) {
    const { data } = props;
    return (
        <section className="flex flex-col">
            {data.map((item, i) => (
                <ol key = {i} className="flex flex-row">
                    <img src= {item.project_logo} alt="" className="w-32 h-28 justify-center"/>
                    <li className='flex flex-col ms-4 py-2 text-left'>
                        <h3 id="projects-title" className='text-lg'> {item.project_name} </h3>
                        <p id="projects-description" className='text-sm mb-2 text-gray-500'><span className='italic'>{item.description}</span></p>
                        <p id="projects-author" className='text-sm'> {item.subsection} </p>
                        {item.subsection_data.startsWith("> ") ? <ul><li className="list-disc ml-4"><p id="projects-author" className='mb-1 text-sm'> {item.subsection_data.substring(2)} </p></li></ul> : <p id="projects-author" className='mb-1 text-sm'> {item.subsection_data} </p>}
                        
                        {item.other_information.map((info, j) => (
                            <div key={j}>
                                {(( info.title === "Podcast") 
                                    ? <div className="flex items-center"> <i className="bi bi-spotify    text-xl mr-2"></i> <a href={info.url} className="underline text-sm"> {info.title} </a> </div>
                                    : <div className="flex items-center"> <i className="bi bi-link-45deg text-xl mr-2"></i> <a href={info.url} className="underline text-sm"> {info.title} </a> </div>
                                )}
                            </div>
                        ))}
                    </li>
                </ol>
            ))}
        </section>
    )
}

export default ProjectList