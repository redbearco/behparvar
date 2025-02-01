import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Form from "./Form";
import Social from "./Social";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className={`w-100 d-flex flex-column Footer`}>
      <Section5 />
      <div className="box2 position-relative bg-custom-blue py-4">
        <div className="row justify-content-center">
          <div className="col-11">
            <div className="row">
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
            </div>
          </div>
          <div className="col-11 d-flex align-align-items-center justify-content-center justify-content-md-center justify-content-lg-between justify-content-xl-between flex-wrap">
            <Form />
            <Social />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer