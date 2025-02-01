"use client"
import Iframe from '../Iframe/Iframe';
import { useWindowResize } from '../../../hooks/index';

const Section5 = () => {
    const [height, width] = useWindowResize();
    return (
        <div className="position-relative w-100 pt-3 pt-md-3 pt-lg-5 pt-xl-5 Section5">
            <div className="row justify-content-center">
                <div className="col-11 col-md-11 col-lg-10 col-xl-10 d-flex justify-content-center position-relative">
                    {/* <VideoPlayer src={`/videos/Final2.mp4`} type="video/mp4"/> */}
                    

                    <div className="h_iframe-aparat_embed_frame position-relative">
                        <style jsx global>
                            {`
                                .h_iframe-aparat_embed_frame{position:relative;}
                                .h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}
                                .h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}
                                .h_iframe-aparat_embed_frame .span{display: block;padding-top: 57%}
                            `}
                        </style>
                        <span className='span vw-50'></span>
                        <Iframe />
                        {/* <iframe src="https://www.aparat.com/video/video/embed/videohash/qre3998/vt/frame" allowFullScreen={true} ></iframe> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Section5;