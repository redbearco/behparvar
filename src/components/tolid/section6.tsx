"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Back1 from '../../../public/images/back/tolid5.jpg';



const Section6 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 Section5">
            <Image className='position-absolute Back1 w-100 h-100' src={width > 1550 ? Back1 : Back1} alt={``} />
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                    <section className="row justify-content-center w-100 my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-6 col-xl-6 py-5 d-flex justify-content-start flex-column">
                            <header className='d-flex flex-column align-items-center'>
                                <h2 className='custom-light-blue mb-3'>مرغ سالم تازه خوش طعم</h2>
                                <h3 className='custom-light-blue mb-4'>در سفره خانواده</h3>
                            </header>
                            <p className='text-center font-size-22 line-height-2'>
                                تیم بهپرور، متشکل از کارشناسانی است که هر کدام در کار خود درخشان هستند. ما با یکدیگر، نه تنها کار می‌کنیم، بلکه در پی آن هستیم که همواره یاد بگیریم و رشد کنیم.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default Section6;