"use client"
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import footerImage from '../../../public/images/back/footer.png'
import chicken1 from '../../../public/images/circle/chicken.png'

const Section5 = () => {
  const [height, width] = useWindowResize();
  return (
    <div className="w-100 position-relative d-flex align-items-end flex-wrap flex-md-wrap flex-lg-nowrap flex-xl-nowrap box1">
      <Image className='position-absolute Back1 w-100 h-100' src={width > 1550 ? footerImage : footerImage} alt={``} />
      <Image className='position-absolute chicken1 d-none d-md-none d-lg-flex d-xl-flex' height={137} width={104} src={width > 1550 ? chicken1 : chicken1} alt={``} />

      <div className="w-100 d-flex justify-content-center align-items-center back-red banner">
        <span className={`${width < 768 ? 'font-size-18' : 'font-size-24' } text-white font-weight-800`}>بهپرور، نامی درخشان در صنعت دام و طیور کشور</span>
      </div>
    </div>
  )
}

export default Section5;