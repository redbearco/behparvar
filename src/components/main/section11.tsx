"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Anime1 from '../../../public/images/banner/anime.gif';
import Anime2 from '../../../public/images/banner/animemobile.gif';


const Section11 = () => {
    const [height, width] = useWindowResize();
    return (
        <div id='anime' className="position-relative w-100 mb-3 Section5">
            <header className='w-100 d-flex align-content-center justify-content-center mb-4'>
                <h3 className='font-size-24 custom-light-blue'>زنجیره تولید کامل، از مزرعه تا سفره</h3>
            </header>
            <Image className='w-100 h-75' src={ width < 768 ? Anime2 : Anime1} alt={``} />
        </div>
    )
}

export default Section11;