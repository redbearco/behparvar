"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Back1 from '../../../public/images/banner/odi2.jpg';



const Section2 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 Section5">
            <Image className=' Back1 responsive-image' src={width > 1550 ? Back1 : Back1} alt={``} />
            {/* <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                    <section className="row justify-content-center w-100 my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-10 py-5 d-flex justify-content-start flex-column">
                            <p className='text-center font-size-22 line-height-2'>
                                محصول گوشت مرغ که در فروشگاه ها در اختیار مصرف کنندگان قرار می گیرد، حاصل فعالیتی برنامه ریزی شده در مراحل مختلف متصل به هم از ابتدای تولید تخم مرغ نطفه دار تا توزیع محصول نهایی می باشد که با اتکا به نیروی انسانی متخصص و بهره برداری از واحد های تولیدی در اختیار، با رعایت بالاترین معیار های کیفیت، امنیت بهداشتی و سلامت غذا انجام میگیرد.
                            </p>
                        </div>
                    </section>
                </div>
            </div> */}
        </div>

    );
}

export default Section2;