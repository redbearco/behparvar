"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Awards1 from '../../../public/images/banner/awards.jpg';
import Awards2 from '../../../public/images/banner/awardsmobile.png';


const Section12 = () => {
    const [height, width] = useWindowResize();
    return (
        <div id='awards' className="position-relative w-100 Section5">
            <header className='w-100 d-flex align-content-center justify-content-center'>
                <h3 className='font-size-24 custom-light-blue'>افتخارات بهپرور</h3>
            </header>
            <Image className='w-100 h-auto' src={ width < 768 ? Awards2 : Awards1} alt={``} />
        </div>
    )
}

export default Section12;