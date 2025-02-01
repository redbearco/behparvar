"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Team1 from '../../../public/images/circle/team.png';
import Back1 from '../../../public/images/back/contactus.jpg';


const Section5 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 Section5 mt-3 mt-md-3 mt-lg-5 mt-xl-5">
            <header className="position-relative w-100 d-flex align-items-center justify-content-center mb-4 title">
                <h2 className="font-size-32 custom-light-blue ps-3 bg-white zindex-1"> دفاتر ما در سراسر ایران</h2>
            </header>
            <div className="w-100 position-relative">
                <div className="row justify-content-center">
                    <Image className='position-absolute Back1 w-100 h-100' src={width > 1550 ? Back1 : Back1} alt={``} />
                    <div className="col-11 col-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                        <section className="row w-100 my-3 my-md-3 my-lg-5 my-xl-5">
                            <div className="col-12 col-md-12 col-lg-4 col-xl-4 py-5 d-flex justify-content-start flex-column">
                                <p className='text-white font-size-14 mb-3'>دفتر تهران:</p>
                                <p className='text-white font-size-14 mb-3'>آدرس: میدان توحید، خیابان توحید، خیابان فرصت شیرازی، پلاک ۱۲۵</p>
                                <p className='text-white font-size-14 mb-3'>کد پستی: ۱۴۱۹۷۱۵۵۸۵</p>
                                <p className='text-white font-size-14 mb-3'>تلفن: ۵۴۱۹۶۰۰۰(۰۲۱)</p>
                                <p className='text-white font-size-14 mb-3'>فکس: ۵۴۱۹۶۴۰۱(۰۲۱)</p>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4 col-xl-4 py-5 d-flex justify-content-start flex-column">
                                <p className='text-white font-size-14 mb-3'>دفتر رشت:</p>
                                <p className='text-white font-size-14 mb-3'>آدرس: بزرگراه شهید بهشتی، نبش سه راه الکتریک، ملت ۴۴، ساختمان میلاد</p>
                                <p className='text-white font-size-14 mb-3'>تلفن: ۲۵۷۱۲۱۴-۲۵۷۱۵۳۵(۰۱۳۳)</p>
                                <p className='text-white font-size-14 mb-3'>فکس: ۲۵۷۱۲۱۴-۲۵۷۱۲۱۹(۰۱۳۳)</p>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4 col-xl-4 py-5 d-flex justify-content-start flex-column">
                                <p className='text-white font-size-14 mb-3'>دفتر ارومیه:</p>
                                <p className='text-white font-size-14 mb-3'>آدرس: بلوار رسالت، پلاک ۴۸</p>
                                <p className='text-white font-size-14 mb-3'>کد پستی: ۶۴۶۳۱-۵۷۱۴۷</p>
                                <p className='text-white font-size-14 mb-3'>تلفن: ۲۲۲۶۰۳۸-۲۲۲۹۹۵۵(۰۴۴۱)</p>
                                <p className='text-white font-size-14 mb-3'>فکس: ۲۲۴۳۰۵۹(۰۴۴۱)</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section5;