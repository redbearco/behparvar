import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Main from '../../components/contactus/Contactus';


import ContactusBanner from '../../../public/images/banner/contactus.jpg';

const Contactus = () => {
  return (
    <div >
      <Header banner={ContactusBanner} mobilebanner={ContactusBanner} status={`true`} h100={`false`} />
      <Main />
      <Footer />
    </div>
  )
}

export default Contactus;