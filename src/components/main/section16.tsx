"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Blog1 from '../../../public/images/blogs/blog.png';
import Blog2 from '../../../public/images/blogs/blog2.png';
import Blog3 from '../../../public/images/blogs/blog3.png';
import Blog4 from '../../../public/images/blogs/blog4.png';



const Section16 = () => {
    const [height, width] = useWindowResize();
    return (
        <div id='news' className="position-relative w-100 Section5 Blogs my-5">
            <header className='w-100 d-flex align-content-center justify-content-center mb-4'>
                <h3 className='font-size-24 custom-light-blue'>دانش و خبر</h3>
            </header>
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3 col-xl-3 mb-3 mb-md-3 mb-lg-0 mb-xl-0">
                            <div className="w-100 position-relative d-flex flex-column align-items-start item">
                                <figure className='w-100 position-relative d-flex justify-content-center align-items-center'>
                                    <Image height={width < 767 ? 285 : 400} width={width < 767 ? 215 : 300} src={width > 1550 ? Blog1 : Blog1} alt={``} />
                                    <figcaption className='position-absolute custom-light-blue text-overflow-ellipsis font-weight-800'>
                                        سفر دانه؛ از زمین به سفره
                                    </figcaption>
                                </figure>
                                <Link href={`#`} className='position-absolute w-100 d-flex align-items-center justify-content-center text-white font-weight-800'>بیشتر بخوانید</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 col-xl-3 mb-3 mb-md-3 mb-lg-0 mb-xl-0">
                            <div className="w-100 position-relative d-flex flex-column align-items-start item">
                                <figure className='w-100 position-relative d-flex justify-content-center align-items-center'>
                                    <Image height={width < 767 ? 285 : 400} width={width < 767 ? 215 : 300} src={width > 1550 ? Blog2 : Blog2} alt={``} />
                                    <figcaption className='position-absolute custom-light-blue text-overflow-ellipsis font-weight-800'>
                                        سفر دانه؛ از زمین به سفره
                                    </figcaption>
                                </figure>
                                <Link href={`#`} className='position-absolute w-100 d-flex align-items-center justify-content-center text-white font-weight-800'>بیشتر بخوانید</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 col-xl-3 mb-3 mb-md-3 mb-lg-0 mb-xl-0">
                            <div className="w-100 position-relative d-flex flex-column align-items-start item">
                                <figure className='w-100 position-relative d-flex justify-content-center align-items-center'>
                                    <Image height={width < 767 ? 285 : 400} width={width < 767 ? 215 : 300} src={width > 1550 ? Blog3 : Blog3} alt={``} />
                                    <figcaption className='position-absolute custom-light-blue text-overflow-ellipsis font-weight-800'>
                                        تولید برای آینده بهتر
                                    </figcaption>
                                </figure>
                                <Link href={`#`} className='position-absolute w-100 d-flex align-items-center justify-content-center text-white font-weight-800'>بیشتر بخوانید</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 col-xl-3 mb-3 mb-md-3 mb-lg-0 mb-xl-0">
                            <div className="w-100 position-relative d-flex flex-column align-items-start item">
                                <figure className='w-100 position-relative d-flex justify-content-center align-items-center'>
                                    <Image height={width < 767 ? 285 : 400} width={width < 767 ? 215 : 300} src={width > 1550 ? Blog4 : Blog4} alt={``} />
                                    <figcaption className='position-absolute custom-light-blue text-overflow-ellipsis font-weight-800'>
                                        اهمیت کیفیت در لبنیات
                                    </figcaption>
                                </figure>
                                <Link href={`#`} className='position-absolute w-100 d-flex align-items-center justify-content-center text-white font-weight-800'>بیشتر بخوانید</Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="w-100 mt-4 d-flex justify-content-center">
                                <Link className='d-flex align-items-center justify-content-center text-white bg-custom-blue br-32 seemore' href={`#`} title={``}>
                                    دانش و خبر
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section16;
