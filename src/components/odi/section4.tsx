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
                                <h2 className='text-white'>مرغ ODI؛ مرغ کامل، بسته‌بندی بهداشتی برای راحتی شما</h2>
                            </header>
                            <p className=' font-size-22 text-center text-white line-height-2'>
                                مرغ ODI، محصولی از شرکت بهپرور، به‌صورت کامل و در بسته‌بندی کاملاً بهداشتی عرضه می‌شود تا تجربه‌ای آسان، سالم و مطمئن را برای شما فراهم کند. با نظارت دقیق بر تمام مراحل تولید، از پرورش تا بسته‌بندی، مرغ ODI با حفظ تازگی و کیفیت، آماده است تا مستقیماً به آشپزخانه شما برسد.
                                این محصول با بسته‌بندی حرفه‌ای، حمل‌ونقل آسان و ماندگاری بهینه، انتخابی ایده‌آل برای خانواده‌هایی است که به سلامت و راحتی در آشپزی اهمیت می‌دهند. مرغ ODI؛ ترکیب تازگی، کیفیت و اطمینان در یک بسته کامل!
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default Section4;