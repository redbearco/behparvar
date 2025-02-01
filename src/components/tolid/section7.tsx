"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Back1 from '../../../public/images/back/tolid6.jpg';



const Section4 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 Section5 vh75">
            <Image className='position-absolute Back1 w-100 h-100' src={width > 1550 ? Back1 : Back1} alt={``} />
            <div className="row justify-content-center h-100">
                <div className="col-11 col-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                    <section className="row justify-content-start align-items-end w-100">
                        <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column">
                            <header className='mb-4'>
                                <h2 className='custom-light-blue'>تــــوزیع و فـــروش</h2>
                            </header>
                            <p className=' font-size-22 line-height-2'>
                                توزیع مــــویرگی محصول نهـــایی درب فروشگــاه عرضه مرغ
                            </p>
                            <p className='font-size-22 line-height-2 '>
                                سنجـــش مستمــر میزان رضایتمنــدی مصرف کنندگان
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default Section4;