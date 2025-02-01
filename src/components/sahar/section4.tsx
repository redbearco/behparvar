"use client"

import { useWindowResize } from '../../../hooks/index';


const Section4 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 Section4">
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                    <section className="row justify-content-center w-100 my-3 my-md-3 my-lg-5 my-xl-5">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-10 py-5 d-flex align-items-center flex-column">
                            <header className='mb-4'>
                                <h2 className='text-white'>مرغ سحر؛ طعمی سالم بدون آنتی‌بیوتیک</h2>
                            </header>
                            <p className=' font-size-22 text-center text-white line-height-2'>
                                مرغ سحر، یکی از محصولات ویژه شرکت بهپرور، با هدف حفظ سلامت شما و خانواده‌تان تولید می‌شود. در این محصول، از هیچ‌گونه آنتی‌بیوتیکی در مراحل پرورش استفاده نشده است. ما با بهره‌گیری از روش‌های مدرن و مدیریت علمی در پرورش طیور، توانسته‌ایم محصولی سالم، طبیعی و باکیفیت را به شما ارائه دهیم.
                                مرغ سحر انتخابی مناسب برای افرادی است که به تغذیه سالم و پاک اهمیت می‌دهند. این محصول، با حفظ طعم طبیعی و ارزش غذایی بالا، تضمین‌کننده یک وعده غذایی خوشمزه و سالم برای شماست. با مرغ سحر، سبک زندگی سالم را به سفره‌هایتان بیاورید!

                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default Section4;