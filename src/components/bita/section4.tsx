"use client"

import { useWindowResize } from '../../../hooks/index';


const Section4 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 Section4">
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                    <section className="row justify-content-center w-100 my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-10 py-5 d-flex align-items-center flex-column">
                            <header className='mb-4'>
                                <h2 className='text-white'>مرغ بیتا؛ محصولی از دل فناوری برای سلامت خانواده شما</h2>
                            </header>
                            <p className=' font-size-22 text-center text-white line-height-2'>
                                شرکت بهپرور با بهره‌گیری از پیشرفته‌ترین تکنولوژی‌های روز دنیا، مرغ بیتا را با تمرکز بر سلامت، کیفیت و تازگی تولید می‌کند. فرآیند تولید ما از پرورش جوجه‌های یک‌روزه تا عرضه گوشت مرغ سالم و مطمئن، به‌طور کامل تحت نظارت دقیق سیستم‌های هوشمند و فناوری‌های نوین انجام می‌شود. مرغ بیتا، نماد ترکیب دانش و نوآوری در صنعت غذا، انتخابی ایده‌آل برای کسانی است که به کیفیت و سلامت اهمیت می‌دهند. با ما، طعمی به‌یادماندنی و خیالی آسوده را تجربه کنید!
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default Section4;