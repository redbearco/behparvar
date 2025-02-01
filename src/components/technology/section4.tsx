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
                                <h2 className='text-white'>SAP: مدیریت یکپارچه، کارایی بی‌نظیر </h2>
                            </header>
                            <p className=' font-size-22 text-center text-white line-height-2'>
                                SAP یکی از پیشرفته‌ترین و معتبرترین نرم‌افزارهای مدیریت منابع سازمانی (ERP) است که به‌ویژه برای سازمان‌هایی با اندازه بزرگ و فرایندهای پیچیده طراحی شده است. این سیستم امکان یکپارچه‌سازی تمامی بخش‌های سازمان را فراهم می‌کند، از مالی و منابع انسانی گرفته تا تولید و زنجیره تأمین. با SAP، نه تنها داده‌ها در یک مکان مرکزی نگهداری می‌شوند، بلکه به شما این امکان را می‌دهد که در زمان واقعی به تحلیل و مدیریت فرآیندها پرداخته و با سرعت و دقت بالا تصمیمات استراتژیک اتخاذ کنید. این امر منجر به افزایش بهره‌وری، کاهش هزینه‌ها و بهبود عملکرد کلی سازمان خواهد شد.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default Section4;