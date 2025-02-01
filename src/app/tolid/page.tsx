import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Main from '../../components/tolid/Tolid';

import Aboutusbanner from '../../../public/images/banner/tolid.png'

const Tolid = () => {
  return (
    <>
      <Header banner={Aboutusbanner} mobilebanner={Aboutusbanner} status={`true`} h100={`false`} />
      <Main />
      <Footer />
    </>
  )
}

export default Tolid;
