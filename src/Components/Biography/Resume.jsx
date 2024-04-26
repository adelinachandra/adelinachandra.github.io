import Pdf from '../../assets/resume/resume.pdf'

export function Resume () {
    return (
        <button className='self-center bg-navy w-fit px-3 py-2 rounded-lg m-1 mb-10'>
            <a className='text-white text-center' href = {Pdf} target = "_blank">
                <i className='bi bi-download pr-2'></i>
                Resume
            </a>
        </button>
    )
}

export default Resume;