"use client"

import { useState } from 'react';

import { useWindowResize } from '../../../hooks/index';


const Section9 = () => {
    const [height, width] = useWindowResize();
    const [state, setState] = useState('tab1');

    const handleClick = (value: string) => {
        setState(value);
    }

    return (
        <div className="position-relative w-100 d-flex flex-column justify-content-center py-4 Section9">
            <header className="position-relative w-100 d-flex align-items-center justify-content-center title mb-3 mb-md-3 mb-lg-5 mb-xl-5">
                <h2 className="font-size-32 custom-light-blue ps-3 zindex-1">تاریخچه بهپرور به روایت دهه ها</h2>
            </header>
            <div className="w-100 position-relative bg-custom-darkblue">
                <div className="w-100 d-flex flex-column">
                    <div onClick={() => handleClick(`tab1`)} className={`d-flex algin-items-center justify-content-center flex-column cursor-pointer history ${state === 'tab1' ? 'active' : 'deactive'}`}>
                        <header className='d-flex align-items-center px-5 historyheader'>
                            <h3 className='text-white'>دهه شصت</h3>
                        </header>
                        <div className='d-flex justify-content-center px-5 flex-column historycontent'>
                            <p className='text-white'>سال 1366</p>
                            <p className='text-white text-justify'>
                                تأسیس شرکت بهپرور ارومیه: آقای غلامعلی فارغی، بنیان‌گذار و مالک شرکت، با هدف ایجاد تغییر در صنعت مرغداری کشور، شرکت بهپرور ارومیه را پایه‌گذاری کرد.
                            </p>
                            <p className='text-white text-justify'>
                                شروع فعالیت پرورش مرغ مادر: این فعالیت با راه‌اندازی یک واحد مرغداری به نام "واحدیک" با ظرفیت 10,000 قطعه آغاز شد
                            </p>
                            <p className='text-white text-justify'>
                                تولید جوجه یک‌روزه: با اشتغال 20 نفر در همان ابتدای راه، بهپرور مسیر تولید و تأمین جوجه یک‌روزه را هموار کرد.
                            </p>

                        </div>
                    </div>
                    <div onClick={() => handleClick(`tab2`)} className={`d-flex algin-items-center justify-content-center flex-column cursor-pointer history ${state === 'tab2' ? 'active' : 'deactive'}`}>
                        <header className='d-flex align-items-center px-5 historyheader'>
                            <h3 className='text-white'>دهه هفتاد</h3>
                        </header>
                        <div className='d-flex justify-content-center px-5 flex-column historycontent'>
                            <p className='text-white'>سال 1374</p>
                            <p className='text-white text-justify'>
                                تأسیس شرکت تولیدی بهپرور گروه: فعالیت‌ها از حالت فردی به گروهی و یکپارچه تغییر یافت تا مسیر رشد و گسترش صنعت هموارتر شود.
                            </p>
                            <p className='text-white'>
                                1379سال
                            </p>
                            <p className='text-white text-justify'>
                                ورود به فعالیت‌های بازرگانی: شرکت بهپرور گام‌های اولیه برای حضور در بازارهای تجاری را برداشت و دامنه فعالیت‌های خود را فراتر از تولید گسترش داد
                            </p>
                        </div>
                    </div>
                    <div onClick={() => handleClick(`tab3`)} className={`d-flex algin-items-center justify-content-center flex-column cursor-pointer history ${state === 'tab3' ? 'active' : 'deactive'}`}>
                        <header className='d-flex align-items-center px-5 historyheader'>
                            <h3 className='text-white'>دهه هشتاد</h3>
                        </header>
                        <div className='d-flex justify-content-center px-5 flex-column historycontent'>
                            <p className='text-white'>1383 سال </p>
                            <p className='text-white text-justify'>
                                ورود به بازار سرمایه: با اخذ مجوز کارگزاری با نام "پیشگامان بهپرور"، شرکت به دنیای بازارهای سرمایه وارد شد.
                                افتتاح کارخانه جوجه‌کشی زرین‌پر ارومیه: این کارخانه با ظرفیت تولید 12 میلیون قطعه، یکی از نقاط عطف رشد بهپرور بود

                            </p>
                            <p className='text-white'>
                                1385سال
                            </p>
                            <p className='text-white text-justify'>
                                افتتاح کارخانه جوجه‌کشی بهپرور گیلان: این کارخانه با ظرفیت 36 میلیون قطعه تخم‌مرغ در سال، به‌عنوان یکی از بزرگ‌ترین مراکز جوجه‌کشی کشور شناخته شد.
                                توسعه پرورش مرغ مادر در استان‌های کشور: گسترش فعالیت‌ها به استان‌های مختلف، قدمی دیگر در مسیر رشد پایدار بود

                            </p>
                            <p className='text-white'>
                                1386سال
                            </p>
                            <p className='text-white text-justify'>
                                تأسیس شرکت والا تجارت بهپرور: این شرکت با تمرکز بر واردات مواد اولیه خوراک دام و طیور، به ایجاد زنجیره‌ای قوی‌تر در تولید کمک کرد.
                                شروع فعالیت در بازرگانی خارجی: بهپرور با توسعه روابط تجاری خارجی، به تقویت جایگاه خود در بازار پرداخت

                            </p>
                            <p className='text-white'>
                                1387سال
                            </p>
                            <p className='text-white text-justify'>
                                تغییر استراتژی و مدیریت یکپارچه تولید: بازنگری در فرآیندها و ایجاد هماهنگی در تمامی بخش‌ها، پایه‌ای برای موفقیت‌های بعدی شد.
                                توسعه مشارکت در مرغداری مادر: ظرفیت تولید به 90 میلیون قطعه در سال رسید و نشان‌دهنده پیشرفت‌های چشمگیر در این حوزه بود

                            </p>
                            <p className='text-white'>
                                1388سال
                            </p>
                            <p className='text-white text-justify'>
                                ورود به تولید گوشت مرغ: بهپرور با هدف تأمین غذای سالم، تولید گوشت مرغ را به‌عنوان یکی از اهداف بلندمدت خود آغاز کرد.
                                احداث مرغداری گوشتی شباهنگ در گیلان: این مرغداری با ظرفیت 25,000 مرغ راه‌اندازی شد.
                                جذب مشارکت در پرورش گوشت مرغ: با ظرفیت جوجه‌ریزی 100,000 قطعه در هر دوره، بهپرور در مسیر رشد مداوم گام برداشت

                            </p>
                            <p className='text-white'>
                                1389سال
                            </p>
                            <p className='text-white text-justify'>
                                تأسیس شرکت والا اندیشان داروی ناب: این شرکت برای واردات و توزیع دارو، واکسن و مواد بیولوژیک فعالیت خود را آغاز کرد.
                                تأسیس شرکت بازرگانی در ترکیه: اولین گام در ایجاد پایگاه‌های بین‌المللی برداشته شد.
                                بازسازی کارخانه قطعه‌بندی نفیس بسته: این کارخانه با ظرفیت دو تن در روز، وارد فاز جدیدی از فعالیت شد.
                                عرضه مرغ با برند "نفیس بسته" در گیلان: گامی در جهت توسعه بازار و ایجاد برندهای ماندگار.
                                تأسیس شرکت سبز دانه سحر: آغاز فعالیت در تولید خوراک طیور با چشم‌اندازی روشن.
                                سرمایه‌گذاری مشترک در آذربایجان غربی: با هدف ایجاد زنجیره‌های یکپارچه تولید، وارد این بازار شد

                            </p>

                        </div>
                    </div>
                    <div onClick={() => handleClick(`tab4`)} className={`d-flex algin-items-center justify-content-center flex-column cursor-pointer history ${state === 'tab4' ? 'active' : 'deactive'}`}>
                        <header className='d-flex align-items-center px-5 historyheader'>
                            <h3 className='text-white'>دهه نود</h3>
                        </header>
                        <div className='d-flex justify-content-center px-5 flex-column historycontent'>
                            <p className='text-white'>1390سال </p>
                            <p className='text-white text-justify'>
                                تأسیس شرکت پخش سراسری نیکان پخش بهپرور: پخش مویرگی برای تأمین محصولات در سراسر کشور.
                            </p>
                            <p className='text-white'>
                                1391سال
                            </p>
                            <p className='text-white text-justify'>
                                تأسیس شرکت صنایع غذایی بهپرور آریا: اجرای طرح تولید یکپارچه در گیلان و تولید 2,000 تن گوشت مرغ در سال.
                                عرضه مرغ با برند "بی‌تا" در تهران: ورود به بازار مصرف تهران با برندی نوین.

                            </p>
                            <p className='text-white'>
                                1392سال
                            </p>
                            <p className='text-white text-justify'>
                                تأسیس شرکت والا صنعت طیور: واردات ماشین‌آلات جوجه‌کشی و تجهیزات مرغداری برای تقویت زیرساخت‌ها.


                            </p>
                            <p className='text-white'>
                                1393سال
                            </p>
                            <p className='text-white text-justify'>
                                توسعه مشارکت در مرغداری گوشتی در گیلان: افزایش ظرفیت تولید گوشت مرغ در این منطقه.
                                افتتاح کارخانه تولید خوراک طیور سبز دانه سحر در گیلان: نقطه‌ای دیگر در گسترش زنجیره تولید.

                            </p>
                            <p className='text-white'>
                                1394سال
                            </p>
                            <p className='text-white text-justify'>
                                تغییر نام به "گسترش و توسعه صنایع بهپرور": تغییر مأموریت و تمرکز بر خدمات نوین.
                                ورود به استان مازندران: گسترش جغرافیای فعالیت‌های شرکت.
                                استقرار سیستم‌های MIS و BPMS: بهینه‌سازی فرآیندها با تکنولوژی‌های پیشرفته.
                                تأسیس شرکت بازرگانی در عراق: ورود به بازارهای منطقه‌ای با هدف توزیع گسترده‌تر.


                            </p>
                            <p className='text-white'>
                                1395سال
                            </p>
                            <p className='text-white text-justify'>
                                بازسازی کارخانه "نفیس بسته" در املش: توسعه ظرفیت تولید محصولات قطعه‌بندی.
                                آغاز تولید مرغ بدون آنتی‌بیوتیک: گامی بزرگ در جهت تولید محصولات سالم و ارگانیک.
                                توسعه ناوگان حمل و نقل و سازمان فروش: تقویت زیرساخت‌های لجستیکی و بازاریابی.

                            </p>
                            <p className='text-white'>
                                1396سال
                            </p>
                            <p className='text-white text-justify'>
                                افتتاح کارخانه فارغ‌دان در ارومیه: گامی دیگر در توسعه زیرساخت‌های تولید.
                                آغاز فعالیت در حوزه استارتاپ‌ها: ورود به عرصه نوآوری و تکنولوژی.

                            </p>
                            <p className='text-white'>
                                1397سال
                            </p>
                            <p className='text-white text-justify'>
                                ایجاد کشتارگاه مرغ در قزوین و تبریز: افزایش ظرفیت تولید گوشت مرغ با رویکرد منطقه‌ای.
                                افتتاح کارخانه خوراک دام و طیور در تبریز: تقویت زنجیره تولید خوراک دام

                            </p>
                            <p className='text-white'>
                                1398سال
                            </p>
                            <p className='text-white text-justify'>
                                ورود به حوزه تجهیزات پزشکی: تنوع‌بخشی به فعالیت‌های بازرگانی.
                                انتقال دفتر مرکزی: تمرکز بر توسعه و هماهنگی بیشتر
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section9;