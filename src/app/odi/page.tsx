import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Main from '../../components/odi/Odi';

import Aboutusbanner from '../../../public/images/banner/odi.jpg'

const Odi = () => {
  return (
    <>
      <Header banner={Aboutusbanner} mobilebanner={Aboutusbanner} status={`true`} h100={`false`} />
      <Main />
      <Footer />
    </>
  )
}

export default Odi;
