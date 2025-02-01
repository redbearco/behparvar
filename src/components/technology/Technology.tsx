import Section1 from "./section1"
import Section2 from "./section2"
import Section4 from "./section4"
import Section6 from "./section6"
import Section7 from "./section7"
import Section8 from "./section8"
import Section9 from "./section9"
import Section10 from "./section10"
import Section11 from "./section11"
import Section20 from "../main/section20"

import "./Technology.styles.scss";

const Technology = () => {
    return (
        <div className="Technology overflow-x-hidden">
            <Section1 />
            <Section2 />
            <Section4 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
            {/* <Section3 /> */}
            <Section20 />
        </div>
    )
}

export default Technology;
