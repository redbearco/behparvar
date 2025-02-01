"use client"
import { useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

import Image from 'next/image';

import { useWindowResize, useGetParamsUrl } from '../../../hooks/index';

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
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10">
                    <div id="Section4" className="d-flex align-items-center justify-content-center pt-4">
                        <div className={`d-flex align-items-center justify-content-center overflowx-auto tabs`}>
                            <div className={`d-flex align-items-center justify-content-center ms-4 tabitem ${paramtab[0] === 'comments' || !paramtab[0] ? 'active' : ''}`} onClick={() => router.push(pathname + '?' + handleClick('tab', 'comments') + '#Section4')}>
                                <span className='d-flex align-items-center cursor-pointer px-3 text-white font-size-16 white-space-nowrap'>امکانات</span>
                            </div>
                            <div className={`d-flex align-items-center justify-content-center ms-4 tabitem ${paramtab[0] === 'desc' && 'active'}`} onClick={() => router.push(pathname + '?' + handleClick('tab', 'desc') + '#Section4')}>
                                <span className='d-flex align-items-center cursor-pointer px-3 text-white font-size-16 white-space-nowrap'>محصولات</span>
                            </div>
                            <div className={`d-flex align-items-center justify-content-center tabitem ${paramtab[0] === 'info' && 'active'}`} onClick={() => router.push(pathname + '?' + handleClick('tab', 'info') + '#Section4')}>
                                <span className='d-flex align-items-center cursor-pointer px-3 text-white font-size-16 white-space-nowrap'>منطقه فعالیت</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 tabscontent py-4">
                        <div className={`position-relative align-items-center mt-3 content ${paramtab[0] === 'desc' || !paramtab[0] ? 'd-flex' : 'd-none'}`}>
                            <div className={`align-items-center mt-3 content ${paramtab[0] === 'desc' ? 'd-flex' : 'd-none'}`}>
                                <div className="d-flex flex-column justify-content-start align-items-start">
                                    <header className='mb-3'>
                                        <h2 className='font-size-32'>محصولات</h2>
                                    </header>
                                    <p className='font-size-18'>⦁	مرغ کامل و قطعه بندی شده ، ساده و طعم دار</p>
                                </div>
                            </div>
                        </div>
                        <div className={`align-items-center mt-3 content ${paramtab[0] === 'info' ? 'd-flex' : 'd-none'}`}>
                            <div className="d-flex flex-column justify-content-start align-items-start">
                                <header className='mb-3'>
                                    <h2 className='font-size-32'>منطقه فعالیت</h2>
                                </header>
                                <p className='font-size-18'>تهران، گیلان، مازندران، البرز، قزوین، آذربایجان غربی و آذربایجان شرقی</p>
                            </div>
                        </div>
                        <div className={`align-items-center mt-3 content ${paramtab[0] === 'comments' || !paramtab[0] ? 'd-flex' : 'd-none'}`}>
                            <div className="d-flex flex-column justify-content-start align-items-start">
                                <header className='mb-3'>
                                    <h2 className='font-size-32'>امکانات تولید فراورده های گوشتی و پروتئینی</h2>
                                </header>
                                <p className='font-size-18'>_ مرغداری مادر و کارخانه جوجه کشی</p>
                                <p className='font-size-18'>_ مرغـداری گــــوشتــــی</p>
                                <p className='font-size-18'>_ کارخانه تولید خوراک</p>
                                <p className='font-size-18'>_ کشتارگاه و کارخانه قطعه بندی و بسته بندی</p>
                                <p className='font-size-18'>_ زنجیره حمل و توزیع مویرگی، </p>
                                <p className='font-size-18'>متناسب با نوع محصول تولید شده در زنجیره،</p>
                                <p className='font-size-18'>شامل: تخم مرغ، جوجـــــه، مـرغ، دان و گــــوشت تــازه و منجمـــد</p>
                                <p className='font-size-18'>_ ســازمان توزیع و فروش مــویرگی </p>
                                <p className='font-size-18'>مبتنی بر سیستم ها اتــوماسیون در مراکـز نــــزدیک به بــازار مصــرف</p>
                                <p className='font-size-18'>_ واحد ارتباط با مشتری (CRM)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section9;