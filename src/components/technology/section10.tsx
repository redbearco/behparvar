"use client"
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Tec1 from '../../../public/images/banner/tec5.png';


const Section10 = () => {
    const [height, width] = useWindowResize();
    return (
        <div id="participation" className="position-relative w-100 bg-custom-lightblue Section5">
            {/* <Image className='position-absolute Back1 w-100 h-100 object-fit-cover' src={ width > 1550 ? Back1 : Back1} alt={``} /> */}
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10">
                    <section className="row my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center justify-content-md-center justify-content-lg-end justify-content-xl-end  mb-3 mb-md-3 mb-lg-0 mb-xl-0">
                            <Image height={width < 767 ? 285 : 500} width={width < 767 ? 285 : 500} className='circlesize' src={width > 1550 ? Tec1 : Tec1} alt={``} />
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center flex-column mb-3 mb-md-3 mb-lg-0 mb-xl-0">
                            <header className="position-relative w-100 d-flex align-items-center justify-content-center mb-4 title">
                                <h4 className="font-size-32 ps-3 zindex-1 text-white">مزایای BPM در سازمان شما</h4>
                            </header>
                            <p className='font-size-22 text-center text-white'>بهبود هماهنگی و کارایی فرآیندها </p>
                            <p className='font-size-22 text-center text-white'>افزایش سرعت و دقت در انجام وظایف </p>
                            <p className='font-size-22 text-center text-white'>بهینه‌سازی منابع و کاهش هزینه‌ها </p>
                            <p className='font-size-22 text-center text-white'>ارتقاء تجربه مشتری و افزایش رضایت مشتریان</p>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}

export default Section10;