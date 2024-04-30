export function Teaching ( props ) {
    const { data } = props;
    return (
        <section className="flex flex-col">
            {data.map((item, i) => (
                <ol key = {i} className="flex flex-row">
                    <li className='flex flex-col ms-4 py-2 text-left'>
                        {item.sub_title !== "" 
                            ? <div className="flex flex-col mb-1">
                                <p id="teaching-title" className="font-bold"> {item.title}</p>
                                <h3 id="teaching-title" className='text-lg leading-none'> {item.sub_title} </h3>
                            </div>
                            : <h3 id="teaching-title" className='text-lg'> {item.title} </h3>}
                        {item.year    !== "" ? 
                            (item.location !== "ETH Zürich" && item.location !== "University of Indonesia") 
                                ? (<p id="teaching-details" className="text-sm text-gray-500">{item.year} <span>&#183;</span> in <span className='italic'>{item.location}</span></p>)
                                : (<p id="teaching-details" className="text-sm text-gray-500">{item.year} <span>&#183;</span> at <span className='italic'>{item.location}</span></p>)
                            : ""} 
                        <p id="teaching-description" className="text-sm">{item.description}</p>
                    </li>
                </ol>
            ))}
        </section>
    )
}

// title
// sub_title
// year
// location
// description

export default Teaching