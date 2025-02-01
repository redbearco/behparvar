"use client"

import Link from 'next/link';
import Image from 'next/image';

import { useWindowResize } from '../../../hooks/index';

import Back1 from '../../../public/images/banner/contactus2.jpg';
import Form from './Form';


const Section5 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 Section5">
            <Image className='position-absolute Back1 w-100 h-100' src={width > 1550 ? Back1 : Back1} alt={``} />
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                    <section className="row justify-content-end w-100 my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-4 col-xl-4 py-5 d-flex justify-content-start flex-column">
                           <Form />
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default Section5;