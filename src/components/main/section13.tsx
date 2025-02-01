"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Tec1 from '../../../public/images/circle/tec.png';
import Back1 from '../../../public/images/back/tec.png';


const Section13 = () => {
    const [height, width] = useWindowResize();
    return (
        <div id='tec' className="position-relative w-100 Section5">
            <Image className='position-absolute Back1 w-100 h-100 object-fit-cover' src={ width > 1550 ? Back1 : Back1} alt={``} />
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10">
                    <section className="row my-5 ">
                        <div className="col-12 col-md-12 col-lg-6 col-xl-6 pt-3 d-flex justify-content-center justify-content-md-center justify-content-lg-start justify-content-xl-start">
                            <Image height={width < 767 ? 285 : 400} width={width < 767 ? 325 : 500} className='circlesize' src={ width > 1550 ? Tec1 : Tec1} alt={``} />
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center flex-column">
                            <header className="position-relative w-100 d-flex align-items-center justify-content-center mb-4 title">
                                <h4 className="font-size-32 custom-light-blue ps-3 zindex-1">بخش تکنولوژی</h4>
                            </header>
                            <p className='font-size-18 color-grey text-justify'>شرکت بهپرور با بهره‌گیری از پیشرفته‌ترین فناوری‌های روز دنیا در حوزه تولید و بسته‌بندی، کیفیت و سلامت محصولات خود را تضمین می‌کند. نوآوری در تجهیزات و فرآیندها، نقطه تمایز ما در صنعت است.</p>
                            {/* <div className="w-100 mt-4 d-flex justify-content-center">
                                <Link className='d-flex align-items-center justify-content-center text-white bg-custom-blue br-32 seemore' href={`#`} title={``}>تیم بهپرور</Link>
                            </div> */}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Section13;