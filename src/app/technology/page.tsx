import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Main from '../../components/technology/Technology';

import Tecbanner from '../../../public/images/banner/tec.jpg'

const Technology = () => {
  return (
    <>
      <Header banner={Tecbanner} mobilebanner={Tecbanner} status={`true`} h100={`false`} />
      <Main />
      <Footer />
    </>
  )
}

export default Technology;
