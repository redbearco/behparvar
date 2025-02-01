"use client"
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Tec1 from '../../../public/images/banner/tec4.png';


const Section8 = () => {
    const [height, width] = useWindowResize();
    return (
        <div id="participation" className="position-relative w-100 mt-4 Section5">
            {/* <Image className='position-absolute Back1 w-100 h-100 object-fit-cover' src={ width > 1550 ? Back1 : Back1} alt={``} /> */}
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10">
                    <section className="row my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-7 col-xl-7 d-flex justify-content-center flex-column order-2 order-md-2 order-lg-1 order-xl-1 mb-3 mb-md-3 mb-lg-0 mb-xl-0">
                            <header className="position-relative w-100 d-flex align-items-center justify-content-start mb-4 title">
                                <h4 className="font-size-32 ps-3 zindex-1 custom-light-blue">Power BI: داده‌ها، تصویرسازی، تصمیم‌گیری</h4>
                            </header>
                            <p className='font-size-22 text-end custom-light-blue '>Power BI یکی از قدرتمندترین ابزارهای تجزیه و تحلیل داده است که توسط مایکروسافت توسعه داده شده است. این ابزار به شما این امکان را می‌دهد که داده‌های پیچیده را به گزارش‌ها و داشبوردهای بصری و تعاملی تبدیل کنید. در نتیجه، به‌راحتی می‌توانید اطلاعات حیاتی کسب‌وکار خود را مشاهده کنید، روندها را شبیه‌سازی کنید و تصمیمات آگاهانه‌تری بگیرید. با استفاده از Power BI، شما قادر خواهید بود که از داده‌های موجود، بینش‌های عمیق و ارزشمندی استخراج کنید که به بهبود عملکرد و رشد کسب‌وکار شما کمک خواهد کرد.</p>
                        </div>
                        <div className="col-12 col-md-12 col-lg-5 col-xl-5 d-flex justify-content-center justify-content-md-center justify-content-lg-end justify-content-xl-end order-1 order-md-1 order-lg-2 order-xl-2 mb-3 mb-md-3 mb-lg-0 mb-xl-0">
                            <Image height={width < 767 ? 285 : 500} width={width < 767 ? 285 : 500} className='circlesize' src={ width > 1550 ? Tec1 : Tec1} alt={``} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Section8;