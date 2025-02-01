import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Main from '../../components/bita/Bita';

import Aboutusbanner from '../../../public/images/banner/bita.png'

const Bita = () => {
  return (
    <>
      <Header banner={Aboutusbanner} mobilebanner={Aboutusbanner} status={`true`} h100={`false`} />
      <Main />
      <Footer />
    </>
  )
}

export default Bita;
