"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import inIcon from '../../../public/images/social/in.png';
import instaIcon from '../../../public/images/social/insta.png';
import telegramIcon from '../../../public/images/social/telegram.png';
import whatsIcon from '../../../public/images/social/whats.png';
import Back1 from '../../../public/images/back/social.png';


const Section5 = () => {
    const [height, width] = useWindowResize();
    return (
        <div id='social' className="position-relative w-100 Section20 vh84">
            <Image className='position-absolute Back1 w-100 h-100 object-fit-cover d-none d-md-none d-lg-flex d-xl-flex' src={ width > 1550 ? Back1 : Back1} alt={``} />
            <div className="row h-100  justify-content-center">
                <div className="col-11 col-md-11 col-lg-10">
                    <section className="row pe-0 pe-md-0 pe-lg-5 pe-xl-5 h-100">
                        <div className="col-12 h-100 d-flex justify-content-center py-4 p-1 p-md-1 p-lg-1 p-xl-1 pe-1 pe-md-1 pe-lg-5 pe-xl-5 py-2 py-md-2 py-lg-4 py-xl-4 align-items-end">
                            <ul className='d-flex align-items-center justify-content-center me-0 me-md-0 me-lg-5 me-xl-5'>
                                <li><a href={`https://linkedin.com/company/behparvargroup`}><Image className='Back1 object-fit-cover ms-3 ms-md-3 ms-lg-4 ms-xl-4' width={75} height={75} src={ width > 1550 ? inIcon : inIcon} alt={``} /></a></li>
                                <li><a href={`https://www.instagram.com/behparvar.group`}><Image className='Back1 object-fit-cover ms-3 ms-md-3 ms-lg-4 ms-xl-4' width={75} height={75} src={ width > 1550 ? instaIcon : instaIcon} alt={``} /></a></li>
                                <li><a href={``}><Image className='Back1 object-fit-cover ms-3 ms-md-3 ms-lg-4 ms-xl-4' width={75} height={75} src={ width > 1550 ? telegramIcon : telegramIcon} alt={``} /></a></li>
                                <li><a href={``}><Image className='Back1 object-fit-cover ms-3 ms-md-3 ms-lg-4 ms-xl-4' width={75} height={75} src={ width > 1550 ? whatsIcon : whatsIcon} alt={``} /></a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Section5;