import Pdf from '../../../assets/resume/Resume_2024_Adelina Chandra.pdf'

export function Resume () {
    return (
        <button className='self-center bg-gray-200 w-fit px-3 py-2 rounded-lg m-1 mt-3 hover:resumeAnimations '>
            <a className='text-black text-center text-sm' href = {Pdf} target = "_blank">
                <i className='bi bi-download pr-2'></i>
                Curriculum Vitae
            </a>
        </button>
    )
}

export default Resume;