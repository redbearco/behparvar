"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Back1 from '../../../public/images/back/tec1.jpg';



const Section2 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 Section2">
            <Image className=' position-absolute Back1 w-100 h-100 object-fit-cover' src={width > 1550 ? Back1 : Back1} alt={``} />
            <div className="row justify-content-end">
                <div className="col-11 col-md-11 col-lg-7 col-xl-7 d-flex justify-content-center position-relative">
                    <section className="row justify-content-center w-100 my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-10 py-5 d-flex justify-content-start flex-column">
                            <header className='mb-4'>
                                <h2 className='custom-light-blue'>امکانات تولید فراورده های گوشتی و پروتئینی</h2>
                            </header>
                            <p className=' font-size-22 line-height-2'>
                                امروزه، دنیای کسب‌وکار تحت تأثیر تغییرات سریع تکنولوژیکی است و آنچه که قبلاً غیرممکن به نظر می‌رسید، اکنون امکان‌پذیر شده است. در بهپرور، ما به‌عنوان یک شریک استراتژیک برای شما، از برترین ابزارها و فناوری‌های روز دنیا بهره می‌بریم تا به کسب‌وکار شما کمک کنیم در این فضای پویا و چالش‌برانگیز رقابتی پیشرو باشید. هدف ما ارائه راه‌حل‌های هوشمند، خلاقانه و مطابق با نیازهای خاص شماست تا از طریق آن‌ها بهره‌وری را افزایش داده و نتایج ملموسی در دنیای واقعی ایجاد کنیم.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default Section2;