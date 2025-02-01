"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Back1 from '../../../public/images/back/tolid2.jpg';



const Section2 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 Section5">
            <Image className='position-absolute Back1 w-100 h-100' src={width > 1550 ? Back1 : Back1} alt={``} />
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                    <section className="row justify-content-center w-100 my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-10 py-5 d-flex justify-content-center align-items-center flex-column">
                            <header className='mb-4'>
                                <h2 className='text-white'>کارخانه خوراک طیور</h2>
                            </header>
                            <p className='text-center text-white font-size-22 line-height-2 pb-3 pb-md-3 pb-lg-5 pb-xl-5 mb-2 mb-md-2 mb-lg-5 mb-xl-5'>
                                تولید دان آمــــــاده مصرف مرغ هــای زنجیره از مواد اولیه با کیفیت بالا و با به کارگیری بهترین متدهای مدیریت تولید  رکورد ضریب تبدیل 7/1
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default Section2;