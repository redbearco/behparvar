import Image from "next/image";
import Link from "next/link";

import linkedinIcon from '../../../public/images/linkedin.svg';
import telegramIcon from '../../../public/images/telegram.svg';
import whatsappIcon from '../../../public/images/whatsapp.svg';
import instagramIcon from '../../../public/images/instagram.svg';


const Social = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-wrap Social">
            <a href="#" className="ms-2 d-flex align-items-center justify-content-center back-red socialitem" title="" >
                <Image src={whatsappIcon} alt="" title="" />
            </a>
            <a href="#" className="ms-2 d-flex align-items-center justify-content-center back-red socialitem" title="" >
                <Image src={telegramIcon} alt="" title="" />
            </a>
            <a href="https://linkedin.com/company/behparvargroup" className="ms-2 d-flex align-items-center justify-content-center back-red socialitem" title="" >
                <Image src={linkedinIcon} alt="" title="" />
            </a>
            <a href="https://www.instagram.com/behparvar.group" className="d-flex align-items-center justify-content-center back-red socialitem" title="" >
                <Image src={instagramIcon} alt="" title="" />
            </a>
        </div>
    )
}

export default Social;