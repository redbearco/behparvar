"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Team1 from '../../../public/images/circle/team.png';
import Back1 from '../../../public/images/back/back1.jpg';


const Section5 = () => {
    const [height, width] = useWindowResize();
    return (
        <div id='team' className="position-relative w-100 Section5">
            <Image className='position-absolute Back1 w-100 h-100' src={width > 1550 ? Back1 : Back1} alt={``} />
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10">
                    <section className="row my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center justify-content-md-center justify-content-lg-start justify-content-xl-start">
                            <Image height={width < 767 ? 285 : 400} width={width < 767 ? 285 : 400} className='' src={width > 1550 ? Team1 : Team1} alt={``} />
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center flex-column">
                            <header className="position-relative w-100 d-flex align-items-center justify-content-center mb-4 title">
                                <h4 className="font-size-32 custom-light-blue ps-3 bg-white zindex-1">تیم بهپرور</h4>
                            </header>
                            <p className='font-size-18 color-grey text-justify'>تیم بهپرور، متشکل از کارشناسانی است که هر کدام در کار خود درخشان هستند. ما با یکدیگر، نه تنها کار می‌کنیم، بلکه در پی آن هستیم که همواره یاد بگیریم و رشد کنیم.</p>
                            <div className="w-100 mt-4 d-flex justify-content-center">
                                <Link className='d-flex align-items-center justify-content-center text-white bg-custom-blue br-32 seemore' href={`/contactus`} title={``}>تیم بهپرور</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Section5;