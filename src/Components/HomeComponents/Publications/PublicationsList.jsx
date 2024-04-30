import { useState } from 'react';
import { BoldText } from '../../../helpers/boldText';

export function Publicationslist(props) {
  const { data } = props;

  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpanded = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  return (
    <section id="publications-list" className=''>
      {data.map((item, i) => (
        <ol key={i} className='hover:publicationAnimations border-2 dark:border-gray ms-2 mt-4 mb-1 bg-gray-200 text-black rounded-3xl py-2 px-3 pr-3'>
          <li className='mx-4 py-2 '>
            {(item.title !== "" && item.url !== "") ? (
              <a href={item.url} target='_blank'><h3 id="research-title"> <span className='hover:underline hover:drop-shadow-md'>{item.title}</span> </h3></a>
            ) : (
              (item.title !== "") ? (
                <h3 id="research-title"> {item.title} </h3>
              ) : ("")
            )}
            <p id="publications-informations" className='text-sm text-gray-400 mb-1'>{item.year} <span>&#183;</span> in <span className='italic'>{item.type}</span></p>
            <p id="publications-author" className='mb-3 text-sm'> {BoldText(item.author, 'Adelina Chandra')} </p>
            <p id="publications-abstract" className='text-sm text-justify'>
                <span className='font-bold italic text-sm'>Abstract: <br /></span>
              {expandedIndexes.includes(i) || item.abstract.length <= 100 ? item.abstract : `${item.abstract.substring(0, 100)}...`}
            </p>
            {item.abstract.length > 100 && (
              <button className="read-more-button underline text-sm " onClick={() => toggleExpanded(i)}>
                {expandedIndexes.includes(i) ? "Read less" : "Read more"}
              </button>
            )}
            {/* {item.url && (
              <a id="publications-url" href={item.url} target='_blank' className='hover:shadow-xl mb-2 border-2 bg-gray-100 text-blue-950 rounded-md px-2 py-1 my-2 text-xs self-end'> DOI </a>
            )} */}
          </li>
        </ol>
      ))}
    </section>
  )
}

export default Publicationslist;
