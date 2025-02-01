"use client"

import { useCallback } from 'react';
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

import Image from 'next/image';

import { useWindowResize, useGetParamsUrl } from '../../../hooks/index';

import Team1 from '../../../public/images/circle/bita.webp';
import Team2 from '../../../public/images/circle/odi.webp';
import Team3 from '../../../public/images/circle/oneday.webp';
import Team4 from '../../../public/images/circle/sahar.webp';
import Back2 from '../../../public/images/back/back2.jpg';


const Section9 = () => {
    const [height, width] = useWindowResize();
    const router = useRouter();
    const pathname = usePathname();
    const paramtab = useGetParamsUrl('tab');

    const searchParams2 = useSearchParams();
    var arr2: any[] = [];
    var obj = null;

    const handleClick = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams2)
            obj = Object.fromEntries(arr2);
            console.log(name, value)
            if (obj?.[name]) {
                obj[name] = value
            } else {
                console.log(paramtab);
            }
            params.set(name, value)
            return params.toString()
        },
        [searchParams2]
    )

    return (
        <div id='brands' className="position-relative w-100 Section9">
            <Image className='position-absolute Back1 h-100 w-100' src={width > 1550 ? Back2 : Back2} alt={``} />
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10">
                    <div id="Section4" className="d-flex align-items-center justify-content-center pt-4">
                        <div className={`d-flex align-items-center justify-content-center overflowx-auto tabs`}>
                            <div className={`d-flex align-items-center justify-content-center ms-4 tabitem ${paramtab[0] === 'desc' && 'active'}`} onClick={() => router.push(pathname + '?' + handleClick('tab', 'desc') + '#Section4')}>
                                <span className='d-flex align-items-center cursor-pointer px-3 text-white font-size-16 white-space-nowrap'>جوجه یک روزه</span>
                            </div>
                            <div className={`d-flex align-items-center justify-content-center ms-4 tabitem ${paramtab[0] === 'info' && 'active'}`} onClick={() => router.push(pathname + '?' + handleClick('tab', 'info') + '#Section4')}>
                                <span className='d-flex align-items-center cursor-pointer px-3 text-white font-size-16 white-space-nowrap'>مرغ بی تا</span>
                            </div>
                            <div className={`d-flex align-items-center justify-content-center ms-4 tabitem ${paramtab[0] === 'comments' && 'active'}`} onClick={() => router.push(pathname + '?' + handleClick('tab', 'comments') + '#Section4')}>
                                <span className='d-flex align-items-center cursor-pointer px-3 text-white font-size-16 white-space-nowrap'>مرغ ادی</span>
                            </div>
                            <div className={`d-flex align-items-center justify-content-center tabitem ${paramtab[0] === 'qa' && 'active'}`} onClick={() => router.push(pathname + '?' + handleClick('tab', 'qa') + '#Section4')}>
                                <span className='d-flex align-items-center cursor-pointer px-3 text-white font-size-16 white-space-nowrap'>مرغ سحر</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 tabscontent py-4">
                        <div className={`align-items-center mt-3 content ${paramtab[0] === 'desc' || !paramtab[0] ? 'd-flex' : 'd-none'}`}>
                            <Image className='ms-0 ms-md-2 ms-lg-4 ms-xl-4 mb-3 mb-md-2 mb-lg-0 mb-xl-0' src={Team3} width={165} height={165} title='' alt={``} />
                            <div className="d-flex flex-wrap justify-content-start align-items-center">
                                <header className='mb-3'>
                                    <h2 className='font-size-32'>جوجه یک ‌روزه؛ شروعی سالم و طبیعی با بهپرور</h2>
                                </header>
                                <p className='font-size-22 text-justify'>جوجه یک ‌روزه بهپرور، گامی نوین در جهت ارائه محصولی سالم و طبیعی برای پرورش‌دهندگان عزیز است. این جوجه‌ها در محیطی بهداشتی و استاندارد، پرورش یافته‌اند تا سلامت و کیفیت را از ابتدا به ارمغان آورند.</p>
                            </div>
                        </div>
                        <div className={`align-items-center mt-3 content ${paramtab[0] === 'info' ? 'd-flex' : 'd-none'}`}>
                            <Image className='ms-0 ms-md-2 ms-lg-4 ms-xl-4 mb-3 mb-md-2 mb-lg-0 mb-xl-0' src={Team1} width={165} height={165} title='' alt={``} />
                            <div className="d-flex flex-wrap justify-content-start align-items-center">
                                <header className='mb-3'>
                                    <h2 className='font-size-32'>مرغ بی تا</h2>
                                </header>
                                <p className='font-size-22 text-justify'>مرغ بی تا یکی از محصولات زنجیره تولید مرغ گروه صنعتی بهپرور است.  از جوجه  یک روزه تا مرغ کامل و سلامت و خوش طعم، در یک زنجیره ی کامل و  با استانداردهای جهانی ، با نام مرغ بی تا، پیشکشی است به سال ها اعتماد شما به گروه صنعتی بهپرور.</p>
                            </div>
                        </div>
                        <div className={`align-items-center mt-3 content ${paramtab[0] === 'comments' ? 'd-flex' : 'd-none'}`}>
                            <Image className='ms-0 ms-md-2 ms-lg-4 ms-xl-4 mb-3 mb-md-2 mb-lg-0 mb-xl-0' src={Team2} width={165} height={165} title='' alt={``} />
                            <div className="d-flex flex-wrap justify-content-start align-items-center">
                                <header className='mb-3'>
                                    <h2 className='font-size-32'>مرغ ODI؛ مرغ کامل، بسته‌بندی بهداشتی برای راحتی شما</h2>
                                </header>
                                <p className='font-size-22 text-justify'>مرغ ODI، محصولی از شرکت بهپرور، به‌صورت کامل و در بسته‌بندی کاملاً بهداشتی عرضه می‌شود تا تجربه‌ای آسان، سالم و مطمئن را برای شما فراهم کند. </p>
                            </div>
                        </div>
                        <div className={`align-items-center mt-3 content ${paramtab[0] === 'qa' ? 'd-flex' : 'd-none'}`}>
                            <Image className='ms-0 ms-md-2 ms-lg-4 ms-xl-4 mb-3 mb-md-2 mb-lg-0 mb-xl-0' src={Team4} width={165} height={165} title='' alt={``} />
                            <div className="d-flex flex-wrap justify-content-start align-items-center">
                                <header className='mb-3'>
                                    <h2 className='font-size-32'>مرغ سحر؛ طعمی سالم بدون آنتی‌بیوتیک</h2>
                                </header>
                                <p className='font-size-22 text-justify'>مرغ سحر، یکی از محصولات ویژه شرکت بهپرور، با هدف حفظ سلامت شما و خانواده‌تان تولید می‌شود. در این محصول، از هیچ‌گونه آنتی‌بیوتیکی در مراحل پرورش استفاده نشده است. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section9;