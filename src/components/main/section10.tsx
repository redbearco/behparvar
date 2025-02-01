"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Tolid1 from '../../../public/images/circle/tolid.png';


const Section10 = () => {
    const [height, width] = useWindowResize();
    return (
        <div id='tolid' className="position-relative w-100 Section5">
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10">
                    <section className="row my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center flex-column order-2 order-md-2 order-lg-1 order-xl-1 mb-3 mb-md-3 mb-lg-0 mb-xl-0">
                            <header className="position-relative w-100 d-flex align-items-center justify-content-center mb-4 title">
                                <h4 className="font-size-32 custom-light-blue ps-3 bg-white zindex-1">زنجیره تولید مرغ</h4>
                            </header>
                            <p className='font-size-18 color-grey text-justify'>زنجیره تولید و توزیع بهپرور مانند یک سمفونی است که از مراحل مختلفی تشکیل شده است. هر مرحله، از تأمین مواد اولیه تا توزیع نهایی، با دقت و مراقبت انجام می‌شود تا بهترین محصول به دستان شما برسد. ما همچون کشاورزی که عاشقانه به زمین خودش می رسد به هر بخش اهمیت می‌دهیم.</p>
                            <div className="w-100 mt-4 d-flex justify-content-center">
                                <Link className='d-flex align-items-center justify-content-center text-white bg-custom-blue br-32 seemore' href={`/tolid`} title={``}>زنجیره تولید </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center justify-content-md-center justify-content-lg-end justify-content-xl-end order-1 order-md-1 order-lg-2 order-xl-2 mb-3 mb-md-3 mb-lg-0 mb-xl-0">
                            <Image height={width < 767 ? 285 : 400} width={width < 767 ? 295 : 430} className='' src={ width > 1550 ? Tolid1 : Tolid1} alt={``} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Section10;