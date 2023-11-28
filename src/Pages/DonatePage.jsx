import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import WhatWeDoHeroSection from '../Components/WhatWeDoHeroSection';
import InitiativeMainText from '../Components/InitiativeMainText';

export default function DonatePage() {

    // fade in effect on load of page
    useEffect(() => {
        const timeoutId = setTimeout(() => {
        const element = document.querySelector('.fade-in');
        if (element) {
            element.style.opacity = 1;
        }
        }, 100); // change this delay as needed
        return () => clearTimeout(timeoutId);
    }, []);

    // Page title and make sure page scroll back to up on appearance
    useEffect(() => {
        document.title = 'Back to School Supply Drive | Empowering Young Minds';
        window.scrollTo(0, 0);
    }, []);

    // page schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Back to School NGO Supply Drive | Empowering Young Minds",
        "image": "https://backtoschoolngo.com/images/Back%20to%20School%20NGO%20Supply%20Drive.webp",
        "author": {
        "@type": "Person",
        "name": "Techduce Africa"
        },
        "publisher": {
        "@type": "Organization",
        "name": "Back To School NGO",
        "logo": {
            "@type": "ImageObject",
            "url": "https://backtoschoolngo.netlify.app/static/media/Logo.949cc01fdb53ab9e7879a5171446c22b.svg"
        }
        },
        "datePublished": "2022-04-10T12:00:00Z",
        "dateModified": "2023-10-19T12:00:00Z",
        "articleBody": "Our Back-to-School Supply Drive is a heartfelt initiative aimed at ensuring that no child is left behind due to a lack of essential school supplies..."
    };

  return (
    <div className="fade-in">

        {/* Open graph tag for social media */}
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
            <title>Donate Now | Be a Lifeline</title>
            <meta property="og:title" content="Donate Now" />
            <meta property="og:description" content="Our Back-to-School Supply Drive is a heartfelt initiative aimed at ensuring that no child is left behind due to a lack of essential school supplies..." />
            <meta property="og:image" content="https://backtoschoolngo.com/images/Back%20to%20School%20NGO%20Supply%20Drive.webp" />
            <meta property="og:url" content="https://www.backtoschoolngo.com/donate" />
        </Helmet>

        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/Back%20to%20school%20NGO_Digital%20Library_book-library-with-open-textbook%201_BacktoschoolNGO.webp'})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                          backgroundRepeat: 'no-repeat',
                          backgroundColor: '#000000'}}>
            <div div className='boxed pad'>
                <WhatWeDoHeroSection 
                    title= "Back to School Supply Drive"
                    text= "Empowering young minds with the tools to succeed."/>    
            </div>
        </div>

        <InitiativeMainText
                imttitle='Title'
                imttext='Body'/>
        
    </div>
  )
}
