"use client"
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Tec1 from '../../../public/images/circle/tec2.png';


const Section6 = () => {
    const [height, width] = useWindowResize();
    return (
        <div id="participation" className="position-relative w-100 bg-custom-lightblue Section5">
            {/* <Image className='position-absolute Back1 w-100 h-100 object-fit-cover' src={ width > 1550 ? Back1 : Back1} alt={``} /> */}
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10">
                    <section className="row my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center flex-column order-2 order-md-2 order-lg-1 order-xl-1 mb-3 mb-md-3 mb-lg-0 mb-xl-0">
                            <header className="position-relative w-100 d-flex align-items-center justify-content-center mb-4 title">
                                <h4 className="font-size-32 ps-3 zindex-1 text-white">مزایای SAP برای کسب‌وکار شما:</h4>
                            </header>
                            <p className='font-size-22 text-center text-white'>•	یکپارچگی داده‌ها و سیستم‌ها </p>
                            <p className='font-size-22 text-center text-white'>•	افزایش سرعت تصمیم‌گیری </p>
                            <p className='font-size-22 text-center text-white'>•	بهبود کارایی فرآیندها و کاهش هزینه‌ها </p>
                            <p className='font-size-22 text-center text-white'>•	پاسخگویی سریع به تغییرات بازار و نیازهای مشتری</p>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center justify-content-md-center justify-content-lg-end justify-content-xl-end order-1 order-md-1 order-lg-2 order-xl-2 mb-3 mb-md-3 mb-lg-0 mb-xl-0">
                            <Image height={width < 767 ? 285 : 500} width={width < 767 ? 285 : 500} className='circlesize' src={ width > 1550 ? Tec1 : Tec1} alt={``} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Section6;