import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo_white.jpeg";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div id="header" className="sticky flex items-center justify-between border-b py-2 m-0 text-sm" style={{ borderColor:'#545454' }}>
      <Link to="/" className="border-2 rounded-full bo">
        <img src={Logo} alt="logo" className="w-10 rounded-full p-2"/>
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/">Home</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/publications">Publications</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/projects">Projects</Link>
              </li>
              {/* <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/photography">Photography</Link>
              </li> */}
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/publications">Publications</Link> </li>
          <li> <Link to="/projects">Projects</Link> </li>
          {/* <li> <Link to="/photography">Photography</Link> </li> */}
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
