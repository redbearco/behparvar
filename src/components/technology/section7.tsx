"use client"
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Back1 from '../../../public/images/back/tec2.png';


const Section7 = () => {
    const [height, width] = useWindowResize();
    return (
        <div id="participation" className="position-relative w-100 bg-custom-lightblue Section5">
            <Image className='position-absolute Back1 w-100 h-100 object-fit-cover' src={ width > 1550 ? Back1 : Back1} alt={``} />
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10">
                    <section className="row justify-content-center my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-10 d-flex justify-content-center flex-column order-2 order-md-2 order-lg-1 order-xl-1 mb-3 mb-md-3 mb-lg-0 mb-xl-0">
                            <header className="position-relative w-100 d-flex align-items-center justify-content-center mb-4 title">
                                <h4 className="font-size-32 ps-3 zindex-1 text-white">هوش مصنوعی: آینده از آنِ هوش است</h4>
                            </header>
                            <p className='font-size-22 text-center text-white zindex-1'>هوش مصنوعی (AI) به‌عنوان یکی از مهم‌ترین فناوری‌های تحول‌آفرین در دنیای امروز، قادر است داده‌های عظیم و پیچیده را تجزیه و تحلیل کند و از آن‌ها به نتایج هوشمندانه برسد. در بهپرور، ما از قدرت AI برای پیش‌بینی روندها، شبیه‌سازی شرایط و ارائه راه‌حل‌های هوشمند استفاده می‌کنیم. این فناوری به کسب‌وکارها کمک می‌کند که با دقت بیشتری نیازهای مشتریان خود را شناسایی کرده و استراتژی‌های مؤثرتری را طراحی کنند. با AI، کسب‌وکار شما قادر خواهد بود: به سرعت به تغییرات بازار واکنش نشان دهد، تصمیمات مبتنی بر داده و تحلیل‌های پیشرفته بگیرد، روندهای بازار و رفتار مشتریان را پیش‌بینی کند.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Section7;