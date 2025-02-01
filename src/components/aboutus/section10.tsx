"use client"

import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Chamomile from '../../../public/images/chamomile.png';
import about1 from '../../../public/images/about2.png';
import about2 from '../../../public/images/about4.png';
import about3 from '../../../public/images/about3.png';
import about4 from '../../../public/images/about1.png';

const Section10 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 d-flex flex-column justify-content-center py-4 Section10">
            <header className="position-relative w-100 d-flex align-items-center justify-content-center title">
                <h2 className="font-size-32 custom-light-blue ps-3 zindex-1">ارزش‌های ما</h2>
            </header>
            <div className="w-100 position-relative">
                <div className="row justify-content-center">
                    {/* <Image className='position-absolute Back1 w-100 h-100' src={width > 1550 ? Back1 : Back1} alt={``} /> */}
                    <div className="col-11 col-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                        <section className="row w-100 my-3 my-md-3 my-lg-3 my-xl-3">
                            <div className="col-12 col-md-12 col-lg-3 col-xl-3 mt-3 ">
                                <div className="w-100 itemimage">
                                    <Image src={about1} alt='' title='' />
                                    {/* <div className="w-100 d-flex flex-column align-items-center justify-content-start p-3 item">
                                        <Image className='mb-4' src={Chamomile} width={45} height={45} alt='' title='' />
                                        <header className='mb-4'>
                                            <h3 className='text-white font-size-18'>مشتری‌مداری</h3>
                                        </header>
                                        <p className='text-center text-white'>
                                            اصلی ما رضایت مشتریان است؛ ما به نیازها و خواسته‌های آنها گوش می‌دهیم و با توجه به آن، خدمات خود را بهبود می‌بخشیم.
                                        </p>
                                    </div> */}
                                </div>

                            </div>
                            <div className="col-12 col-md-12 col-lg-3 col-xl-3 mt-3 ">
                                <div className="w-100 itemimage">
                                    <Image src={about2} alt='' title='' />
                                </div>
                                {/* <div className="w-100 bg-custom-darkblue items">
                                    <div className="w-100 d-flex flex-column align-items-center justify-content-start p-3 item">
                                        <Image className='mb-4' src={Chamomile} width={45} height={45} alt='' title='' />
                                        <header className='mb-4'>
                                            <h3 className='text-white font-size-18'>تعهد به محیط زیست</h3>
                                        </header>
                                        <p className='text-center text-white'>
                                            ما با رعایت اصول محیط‌زیستی، در تلاش هستیم که تاثیر مثبتی بر محیط اطراف خود داشته باشیم
                                        </p>
                                    </div>
                                </div> */}

                            </div>
                            <div className="col-12 col-md-12 col-lg-3 col-xl-3 mt-3 ">
                                <div className="w-100 itemimage">
                                    <Image src={about3} alt='' title='' />
                                </div>
                                {/* <div className="w-100 bg-custom-darkblue items">
                                    <div className="w-100 d-flex flex-column align-items-center justify-content-start p-3 item">
                                        <Image className='mb-4' src={Chamomile} width={45} height={45} alt='' title='' />
                                        <header className='mb-4'>
                                            <h3 className='text-white font-size-18'>نوآوری و پیشرفت</h3>
                                        </header>
                                        <p className='text-center text-white'>
                                            با تکیه بر فناوری‌های جدید و روش‌های نوآورانه، به دنبال ارتقای بهره‌وری و کاهش هزینه‌ها هستیم.
                                        </p>
                                    </div>
                                </div> */}

                            </div>
                            <div className="col-12 col-md-12 col-lg-3 col-xl-3 mt-3 ">
                                <div className="w-100 itemimage">
                                    <Image src={about4} alt='' title='' />
                                </div>
                                {/* <div className="w-100 bg-custom-darkblue items">
                                    <div className="w-100 d-flex flex-column align-items-center justify-content-start p-3 item">
                                        <Image className='mb-4' src={Chamomile} width={45} height={45} alt='' title='' />
                                        <header className='mb-4'>
                                            <h3 className='text-white font-size-18'>کیفیت و ایمنی</h3>
                                        </header>
                                        <p className='text-center text-white'>
                                            اولویت ما همواره تولید محصولات با کیفیت بالا و رعایت استانداردهای ایمنی در هر مرحله از زنجیره تولید است.
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section10;