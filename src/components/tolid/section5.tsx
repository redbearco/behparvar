"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Back1 from '../../../public/images/back/tolid4.jpg';




const Section5 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 Section5">
            <Image className='position-absolute Back1 w-100 h-100' src={width > 1550 ? Back1 : Back1} alt={``} />
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                    <section className="row justify-content-center w-100 my-3 my-md-3 my-lg-5 my-xl-5 py-3 py-md-3 py-lg-5 py-xl-5">
                        <div className="position-relative col-12 col-md-12 col-lg-6 col-xl-6 py-5 d-flex justify-content-center align-items-center align-items-center flex-column">
                            <header className='mb-4'>
                                <h2 className='text-white font-size-24'>کشتارگاه  و بسته بندی</h2>
                            </header>
                            <p className='text-center text-white font-size-18 line-height-2'>
                                کشتارگاه مــرغ در سن و وزن منـــــاسب و تولیدگوشت مرغ  کامل تازه و منجمد با بسته بندی کیسه ای تحت پروتکل و  نظارت کارشناسان زنجیره و سازمان دامپزشکی
                            </p>
                        </div>
                        <div className="position-relative col-12 col-md-12 col-lg-6 col-xl-6 py-5 d-flex justify-content-center align-items-center align-items-center flex-column">
                            <header className='mb-4'>
                                <h2 className='text-white font-size-24'>بازار عرضه مرغ</h2>
                            </header>
                            <p className='text-center text-white font-size-18 line-height-2'>
                                سوپــــر مــــارکت هـــا، فـروشگــاه هـــــــــای پـــروتئینـــی، فروشگـــاه های زنجیـره ای، میـــادین میــــوه و تـــره بار  شهرداری، مراکز تامین غذا و کارخانجات صنایع تبدیلی پرسنل سازمان ها و فروش اینترنتی .
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default Section5;