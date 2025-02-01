"use client"
import React, { useState} from 'react';
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { useWindowResize } from '../../../hooks/index';

import Headerlogo from '../../../public/images/logo.png';
import CloseIcon from '../../../public/images/close.svg';

import "./header.styles.scss";

interface ChildProps {
  banner: StaticImageData;
  mobilebanner: StaticImageData;
  status: string;
  h100?: string;
}

const Header : React.FC<ChildProps> = ({banner, mobilebanner, status, h100 = "true"}) => {
  const [height, width] = useWindowResize();
  const [openmenu, setMenu] = useState(false);
  const openmenubox = () => {
    setMenu(true);
  }
  const closemenubox = () => {
    setMenu(false);
  }

  console.log('banner', banner);
  console.log('mobilebanner', mobilebanner);
  

  return (
    <header className={`${width < 768 ? 'h-auto' : h100 === "true" ? 'vh100' : 'h-auto'} position-relative overflow-hidden d-flex flex-wrap Header`}>
      <div className="container-fluid">
        <div className="row justify-content-center g-0">
          <div className="col-12 bg-white Menu">
            <div className="row bg-white PrimeryMenu">
              <div className="col-7 col-md-3 col-lg-3 col-xl-3">
                <div className="h-100 d-flex align-items-center justify-content-center">
                  <Image
                    width="202"
                    height="55"
                    src={Headerlogo}
                    alt="بهپرور"
                  />
                </div>
              </div>
              <div className="col-9 colmenu">
                <nav className="w-100">
                  <ul className="w-100 d-flex align-items-center justify-content-start HeaderMenu">
                    <li><Link className={`position-relative d-flex justify-content-start black-color py-2 ms-3 navItem active`} href={`/`} title={'خانه'}>خانه</Link></li>
                    <li><Link className={`position-relative d-flex justify-content-start black-color py-2 ms-3 navItem`} href={`/tolid`} title={'چرخه تولید'}>چرخه تولید</Link></li>
                    <li><Link className={`position-relative d-flex justify-content-start black-color py-2 ms-3 navItem`} href={`/#brands`} title={'برندها'}>برندها</Link></li>
                    <li><Link className={`position-relative d-flex justify-content-start black-color py-2 ms-3 navItem`} href={`/#participation`} title={'مشارکت در تولید'}>مشارکت در تولید</Link></li>
                    <li><Link className={`position-relative d-flex justify-content-start black-color py-2 ms-3 navItem`} href={`/technology`} title={'تکنولوژی'}>تکنولوژی</Link></li>
                    <li><Link className={`position-relative d-flex justify-content-start black-color py-2 ms-3 navItem`} href={`/#team`} title={'تیم ما'}>تیم ما</Link></li>
                    <li><Link className={`position-relative d-flex justify-content-start black-color py-2 ms-3 navItem`} href={`/#news`} title={'دانش و اخبار'}>دانش و اخبار</Link></li>
                    <li><Link className={`position-relative d-flex justify-content-start black-color py-2 ms-3 navItem`} href={`/aboutus`} title={'درباره ما'}>درباره ما</Link></li>
                    <li><Link className={`position-relative d-flex justify-content-start black-color py-2 ms-3 navItem`} href={`/contactus`} title={'تماس با ما'}>تماس با ما</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="col-2">
                <div onClick={openmenubox} className="hamburger cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="48px" height="48px"><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 align-items-center justify-content-between menumobile">
            <div className="p-1"></div>
            <div className={`position-fixed h-100 w-100 d-flex zindex-6 menubox ${openmenu ? 'active' : ''}`}>
              <div onClick={closemenubox} className={`position-absolute cursor-pointer w-100 h-100 closebox`}></div>
              <ul className={`d-flex flex-column bg-white w-75 h-100 overflow-y-auto zindex-6`}>
                <li key={10253 * 943} className={`w-100 d-flex align-items-center justify-content-between base-border-bottom px-3 py-4 mb-2`}>
                  <Image width="202"
                    height="55" src={Headerlogo} alt="" />
                  <Image className={`cursor-pointer`} onClick={closemenubox} height={16} width={16} src={CloseIcon} alt=""/>
                </li>
                <li className="w-100 position-relative px-3 mb-3 mt-3"><Link className="d-flex justify-content-start font-size-16 text-black link" href={`/`}>خانه</Link></li>
                <li className="w-100 position-relative px-3 mb-3"><Link className="d-flex justify-content-start font-size-16 text-black link" href={`/tolid`}>چرخه تولید</Link></li>
                <li className="w-100 position-relative px-3 mb-3"><Link className="d-flex justify-content-start font-size-16 text-black link" href={`/#brands`}>برندها</Link></li>
                <li className="w-100 position-relative px-3 mb-3"><Link className="d-flex justify-content-start font-size-16 text-black link" href={`/#participation`}>مشارکت در تولید</Link></li>
                <li className="w-100 position-relative px-3 mb-3"><Link className="d-flex justify-content-start font-size-16 text-black link" href={`/technology`}>تکنولوژی</Link></li>
                <li className="w-100 position-relative px-3 mb-3"><Link className="d-flex justify-content-start font-size-16 text-black link" href={`/#team`}>تیم ما</Link></li>
                <li className="w-100 position-relative px-3 mb-3"><Link className="d-flex justify-content-start font-size-16 text-black link" href={`/#news`}>دانش و اخبار</Link></li>
                <li className="w-100 position-relative px-3 mb-3"><Link className="d-flex justify-content-start font-size-16 text-black link" href={`/aboutus`}>درباره ما</Link></li>
                <li className="w-100 position-relative px-3 mb-3"><Link className="d-flex justify-content-start font-size-16 text-black link" href={`/contactus`}>تماس با ما</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-100 position-relative ${width < 768 ? 'h-auto' : 'vh85'} ${status === "true" ? "d-flex" : "d-none"} justify-content-center flex-column HeaderContent`}>
        <Image
          className="h-100 w-100"
          src={width < 768 ? mobilebanner : banner}
          alt="بهپرور"
        />
      </div>
    </header>
  )
}

export default Header