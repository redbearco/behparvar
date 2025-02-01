"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Back1 from '../../../public/images/back/tolid3.jpg';



const Section4 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 Section4">
            <Image className='position-absolute Back1 w-100 h-100' src={width > 1550 ? Back1 : Back1} alt={``} />
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                    <section className="row justify-content-start w-100 my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-6 col-xl-6 py-5 d-flex flex-column">
                            <header className='mb-4'>
                                <h2 className='custom-light-blue'>مرغداری گوشتی</h2>
                            </header>
                            <p className=' font-size-22 line-height-2'>
                                پــــــــــرورش مـــرغ گــــــــــوشتــــی در مرغـــــداری هــــــای  مــالکیتــــــی و قراردادی تحت مدیریت متمرکز
                            </p>
                            <p className='font-size-22 line-height-2 '>
                                طول مدت پرورش از 1 روزگی تــا 30 روزگی بـــرای مرغ های سایز ریــز  (1/1 تا 6/1 کیلو زنده)
                            </p>
                            <p className=' font-size-22 line-height-2 '>
                                طول مدت پرورش از 1 روزگی تا 40 روزگی برای مرغ های سایز درشت (2،4 تا 2،6 کیلو زنده)
                            </p>
                            <p className='font-size-22 line-height-2'>
                                رکــــــورد شــــاخص عملکــــــرد اروپــــایی 400
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default Section4;