"use client"

import { useWindowResize } from '../../../hooks/index';

const Section7 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 py-4 Section5 bg-custom-darkblue">
            <header className="position-relative w-100 d-flex align-items-center justify-content-center title">
                <h2 className="font-size-32 text-white ps-3 zindex-1">خدمات و دستاوردها</h2>
            </header>
            <div className="w-100 position-relative">
                <div className="row justify-content-center">
                    {/* <Image className='position-absolute Back1 w-100 h-100' src={width > 1550 ? Back1 : Back1} alt={``} /> */}
                    <div className="col-11 col
                    00-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                        <section className="row w-100 my-3 my-md-3 my-lg-3 my-xl-3">
                            <div className="col-12 mt-4">
                                <p className='text-justify text-white'>بهپرور با ارائه خدمات گسترده‌ای چون تامین جوجه‌های گوشتی باکیفیت، نظارت و مشاوره تخصصی در فرآیند پرورش، و تامین نیازهای اساسی در زنجیره تولید گوشت مرغ، توانسته به دستاوردهای چشمگیری در صنعت پرورش طیور دست یابد. ما به پشتوانه تجربه و تیم متخصص خود، در تلاشیم که راهکارهای نوین و کارآمدی را به مشتریان و شرکای تجاری خود ارائه دهیم.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section7;