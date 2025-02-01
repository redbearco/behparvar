import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Main from '../../components/sahar/Sahar';

import Aboutusbanner from '../../../public/images/banner/sahar.jpg'

const Sahar = () => {
  return (
    <>
      <Header banner={Aboutusbanner} mobilebanner={Aboutusbanner} status={`true`} h100={`false`} />
      <Main />
      <Footer />
    </>
  )
}

export default Sahar;
