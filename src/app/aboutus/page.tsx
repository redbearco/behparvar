import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Main from '../../components/aboutus/Aboutus';

import Aboutusbanner from '../../../public/images/banner/aboutus.jpg'

const Aboutus = () => {
  return (
    <>
      <Header banner={Aboutusbanner} mobilebanner={Aboutusbanner} status={`true`} h100={`false`} />
      <Main />
      <Footer />
    </>
  )
}

export default Aboutus;
