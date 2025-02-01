import Section1 from "./section1"
import Section9 from "./section9"
import Section2 from "./section2"
import Section4 from "./section4"
import Section5 from "./section5"
import Section20 from "../main/section20"

import "./Odi.styles.scss";

const Odi = () => {
    return (
        <div className="Odi overflow-x-hidden">
            <Section1 />
            <Section9 />
            <Section2 />
            <Section4 />
            <Section5 />
            {/* <Section3 /> */}
            <Section20 />
        </div>
    )
}

export default Odi;
