"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import About1 from '../../../public/images/circle/about2.png';
import About2 from '../../../public/images/circle/about3.png';
import About3 from '../../../public/images/circle/about4.png';
import About4 from '../../../public/images/circle/about1.png';


const Section5 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 py-4 Section5">
            <header className="position-relative w-100 d-flex align-items-center justify-content-center mb-3 title">
                <h2 className="font-size-32 custom-light-blue ps-3 bg-white zindex-1">داستان ما</h2>
            </header>
            <div className="w-100 position-relative">
                <div className="row justify-content-center">
                    {/* <Image className='position-absolute Back1 w-100 h-100' src={width > 1550 ? Back1 : Back1} alt={``} /> */}
                    <div className="col-11 col
                    00-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                        <section className="row w-100 my-3 my-md-3 my-lg-4 my-xl-4">
                            <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-flex justify-content-start flex-column">
                                <Image src={About1} alt='' title='' width={250} height={250} />
                            </div>
                            <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-flex justify-content-start flex-column">
                                <Image src={About2} alt='' title='' width={250} height={250} />
                            </div>
                            <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-flex justify-content-start flex-column">
                                <Image src={About3} alt='' title='' width={250} height={250} />
                            </div>
                            <div className="col-12 col-md-12 col-lg-3 col-xl-3 d-flex justify-content-start flex-column">
                                <Image src={About4} alt='' title='' width={250} height={250} />
                            </div>
                            <div className="col-12 mt-4">
                                <p className='text-center'>شرکت توسعه و گسترش صنایع بهپرور در سال ۱۳۶۹ با هدف تامین نیازهای کشور در زمینه تولید گوشت مرغ و ارتقای سطح استانداردهای این صنعت، تاسیس شد. ما با بهره‌گیری از فناوری‌های پیشرفته و همکاری با متخصصین زبده، از همان ابتدا توانستیم به استانداردهای بالایی در تولید و توزیع طیور دست یابیم و نقش موثری در صنعت پرورش طیور ایران ایفا کنیم.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section5;