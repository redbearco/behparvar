"use client"
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Back1 from '../../../public/images/back/tec4.png';


const Section9 = () => {
    const [height, width] = useWindowResize();
    return (
        <div id="participation" className="position-relative w-100 bg-custom-lightblue Section5">
            <Image className='position-absolute Back1 w-100 h-100 object-fit-cover' src={ width > 1550 ? Back1 : Back1} alt={``} />
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10">
                    <section className="row justify-content-center my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-10 d-flex justify-content-center flex-column order-2 order-md-2 order-lg-1 order-xl-1 mb-3 mb-md-3 mb-lg-0 mb-xl-0">
                            <header className="position-relative w-100 d-flex align-items-center justify-content-center mb-4 title">
                                <h4 className="font-size-32 ps-3 zindex-1 custom-light-blue">BPM: بهینه‌سازی فرایندها، افزایش بهره‌وری</h4>
                            </header>
                            <p className='font-size-22 text-center custom-light-blue zindex-1'>مدیریت فرایندهای کسب‌وکار (BPM) رویکردی استراتژیک است که به کسب‌وکارها کمک می‌کند فرآیندهای درون‌سازمانی خود را بهبود دهند و به‌طور مستمر آن‌ها را بهینه‌سازی کنند. BPM شامل شناسایی، طراحی، اجرای، نظارت و بهبود فرایندهاست. با کمک این سیستم، شما قادر خواهید بود که از منابع خود به بهترین شکل استفاده کنید و فرآیندهایی را ایجاد کنید که هماهنگ، مؤثر و کارآمد باشند. این امر باعث افزایش رضایت مشتریان و بهبود عملکرد کلی سازمان خواهد شد.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Section9;