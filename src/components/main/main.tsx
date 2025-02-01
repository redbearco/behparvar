import Section5 from "./section5";
import Section9 from "./section9";
import Section10 from "./section10";
import Section11 from "./section11";
import Section12 from "./section12";
import Section13 from "./section13";
import Section14 from "./section14";
import Section15 from "./section15";
import Iframe from '../aboutus/section6';
import Section16 from "./section16";
import Section20 from "./section20";

import './main.styles.scss';
const Main = () => {
  return (
    <main className="Main overflow-x-hidden">
      <Section5 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
      <Section15 />
      <Iframe />
      <Section16 />
      <Section20 />
    </main>
  )
}

export default Main