import GSCLogo from '../../../assets/logo/google-scholar.svg'
import OrcidLogo from '../../../assets/logo/orcid.svg'

export function Socials () {
    return (
        <section id="biography-socials" className="flex flex-row justify-center mt-3 md-2">
            <a href="mailto:adelinachandra@gmail.com"                               target="_blank" className="mx-1"><i className="text-2xl fa fa-at"></i></a>
            <a href="https://scholar.google.com/citations?user=j2clfBQAAAAJ&hl=en"  target="_blank" className="mx-1"><img src={GSCLogo}     alt="GSC"   className='m-0 w-6'/></a>
            <a href="https://orcid.org/0000-0001-8577-0140"                         target="_blank" className="mx-1"><img src={OrcidLogo}   alt="Orcid" className='m-0 w-6 mt-1'/></a>
            <a href="https://twitter.com/adelinachandra"                            target="_blank" className="mx-1"><i className="text-2xl bi bi-twitter-x"></i></a>
            <a href="https://github.com/adelinachandra"                             target="_blank" className="mx-1"><i className="text-2xl bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/adelinachandra/"                   target="_blank" className="mx-1"><i className="text-2xl bi bi-linkedin"></i></a>
        </section>
    )
}

export default Socials