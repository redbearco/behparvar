import { useEffect, useRef } from 'react';

const Iframe = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = iframeRef.current;

        if (!iframe) {
            console.error('Iframe element not found');
            return;
        }

        const handleIframeLoad = () => {
            try {
                // Access the iframe's document
                const iframeDocument =
                    iframe.contentDocument || iframe.contentWindow?.document;

                if (!iframeDocument) {
                    console.error('Unable to access iframe document');
                    return;
                }

                // Select all elements with the specified class
                const elementsToHide = iframeDocument.querySelectorAll('.yourClassName'); // Replace with your class name

                // Loop through the NodeList and hide each element
                elementsToHide.forEach((element) => {
                    if (element instanceof HTMLElement) {
                        element.style.display = 'none';
                    }
                });
            } catch (error) {
                console.error('Error accessing iframe content:', error);
            }
        };

        // Attach the load event listener to the iframe
        iframe.addEventListener('load', handleIframeLoad);

        // Cleanup the event listener on component unmount
        return () => {
            iframe.removeEventListener('load', handleIframeLoad);
        };
    }, []);
    return (
        <div>
            <iframe
                ref={iframeRef}
                src="https://www.aparat.com/video/video/embed/videohash/qre3998/vt/frame"
                allowFullScreen={true}
            />
        </div>
    )
}

export default Iframe
