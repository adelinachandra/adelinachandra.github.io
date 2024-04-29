import React from "react";
import Biography from "../Components/HomeComponents/Biography/Biography";
import Education from "../Components/HomeComponents/Education/Education";
import Experience from "../Components/HomeComponents/Experience/Experience";
import FeatPublications from "../Components/HomeComponents/Publications/Publications";

export function Home () {
    return (
        <section id="home">
            <Biography/>
            <Education/>
            <Experience/>
            <FeatPublications/>
        </section>
    )
}

export default Home;