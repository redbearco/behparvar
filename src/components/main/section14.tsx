"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Back1 from '../../../public/images/back/information.jpg';


const Section14 = () => {
    const [height, width] = useWindowResize();
    return (
        <div id='information' className="position-relative w-100 mt-5 Section5">
            <Image className='position-absolute Back1 w-100 h-100 object-fit-cover' src={ width > 1550 ? Back1 : Back1} alt={``} />
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10">
                    <section className="row my-3 my-md-3 my-lg-5 my-xl-5 py-3 py-md-3 py-lg-5 py-xl-5">
                        <div className="col-12 d-flex justify-content-center flex-column">
                            <header className="position-relative w-100 d-flex align-items-center justify-content-center mb-4 title">
                                <h4 className="font-size-32 text-white ps-3 zindex-1">فناوری اطلاعات</h4>
                            </header>
                            <p className='font-size-22 text-white text-justify'>با استفاده از سیستم‌های پیشرفته مدیریت داده و فناوری اطلاعات، شرکت بهپرور تمامی مراحل تولید، نظارت و توزیع محصولات را با دقت و شفافیت کنترل می‌کند. این زیرساخت هوشمند، اطمینان خاطر را برای مشتریان به ارمغان می‌آورد.</p>
                            <div className="w-100 mt-4 d-flex justify-content-center">
                                <Link className='d-flex align-items-center justify-content-center text-white bg-custom-blue br-32 seemore' href={`/technology`} title={``}>تکنولوژی</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Section14;