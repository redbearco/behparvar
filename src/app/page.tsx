import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Main from '@/components/main/main';

import Banner1 from '../../public/images/banner/main.jpg';
import Banner2 from '../../public/images/banner/mainmobile.jpg';

const page = () => {
  return (
    <>
      <Header banner={Banner1} mobilebanner={Banner2} status= {`true`} h100={`false`} />
      <Main />
      <Footer />
    </>
  )
}

export default page