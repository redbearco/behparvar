"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Tolid1 from '../../../public/images/circle/tolid1.png';
import Tolid2 from '../../../public/images/circle/tolid2.png';



const Section3 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 Section3">
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                    <section className="row justify-content-center w-100 my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="position-relative col-12 col-md-12 col-lg-6 col-xl-6 py-5 d-flex justify-content-center align-items-center align-items-center flex-column">
                            <Image src={Tolid1} width={450} height={450} alt='' title='' />
                            <div className="position-absolute w-50 d-flex justify-content-center align-items-center flex-column">
                                <header className='mb-2 mb-md-3 mb-lg-4 mb-xl-4'>
                                    <h2 className='text-white font-size-24'>مرغداری مادر</h2>
                                </header>
                                <p className='text-center text-white font-size-18 line-height-2'>
                                    پــــرورش مرغ مادر و تولید تخم مرغ نطفـــه دار بـا رعایت استاندارد هــــای بهداشتی بـــالا و به کارگیری فرایند های  به روز عملیات تولید
                                </p>
                                <p className='text-center text-white font-size-18 line-height-2'>
                                    طول مدت پرورش از 1 روزگی تـــــا 24 هفته و بـــاروری و  تولیــــد از 25 هفته تا 64 هفتگــــی
                                </p>
                                <p className='text-center text-white font-size-18 line-height-2'>
                                    - رکورد سرانه تولید جوجه 170 قطعه
                                </p>
                            </div>
                        </div>
                        <div className="position-relative col-12 col-md-12 col-lg-6 col-xl-6 py-5 d-flex justify-content-center align-items-center align-items-center flex-column">
                            <Image src={Tolid2} width={450} height={450} alt='' title='' />
                            <div className="position-absolute w-50 d-flex justify-content-center align-items-center flex-column">
                                <header className='mb-2 mb-md-3 mb-lg-4 mb-xl-4'>
                                    <h2 className='text-white font-size-24'>کارخانه جوجه کشی</h2>
                                </header>
                                <p className='text-center text-white font-size-18 line-height-2'>
                                    - تولید جوجـــه یکروزه گـــــوشتی در مـــاشین های
                                    پیشرفتـــه جوجـه کشی همـــراه بـــــا فراینـــــد های
                                    مستمر اندازه گیری کیفیت محصول

                                </p>
                                <p className='text-center text-white font-size-18 line-height-2'>
                                    - طول زمان خواب تخم مرغ در ستر و هچر، 21 روز
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default Section3;