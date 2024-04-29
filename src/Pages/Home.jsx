import React from "react";
import Biography from "../Components/Biography/Biography";
import Education from "../Components/Education/Education";
import Experience from "../Components/Experience/Experience";
import Publications from "../Components/Publications/Publications";

export function Home () {
    return (
        <div>
            <Biography/>
            <Education/>
            <Experience/>
            <Publications/>
        </div>
    )
}

export default Home;