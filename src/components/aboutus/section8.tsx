"use client"

import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Aboutus2 from '../../../public/images/banner/aboutus3.png';

const Section8 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 d-flex flex-column justify-content-center py-4 Section5">
            <header className="position-relative w-100 d-flex align-items-center justify-content-center title">
                <h2 className="font-size-32 custom-light-blue ps-3 zindex-1">چشم انداز بهپرور</h2>
            </header>
            <div className="w-100 position-relative">
                <div className="row justify-content-center">
                    {/* <Image className='position-absolute Back1 w-100 h-100' src={width > 1550 ? Back1 : Back1} alt={``} /> */}
                    <div className="col-11 col-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                        <section className="row w-100 my-3 my-md-3 my-lg-3 my-xl-3">
                            <div className="col-12 mt-3">
                                <p className='text-justify'>
                                    ما در بهپرور، با رویکردی آینده‌نگرانه، به دنبال گسترش و بهبود صنعت پرورش طیور در ایران و منطقه هستیم. هدف ما، ارتقای استانداردهای صنعت و مشارکت در تامین امنیت غذایی کشور است. ما بر این باوریم که با تکیه بر دانش و تجربه خود، می‌توانیم به عنوان یکی از پیشگامان صنعت طیور ایران، نقش برجسته‌ای در توسعه این صنعت داشته باشیم
                                </p>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
            <div className="w-100 d-flex justify-content-center mt-4">
                <Image src={Aboutus2} className='responsive-image' alt='' title='' />
            </div>
        </div>
    );
}

export default Section8;