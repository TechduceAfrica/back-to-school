import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import WhatWeDoHeroSection from '../Components/WhatWeDoHeroSection'
import InitiativeMainText from '../Components/InitiativeMainText'
import InitiativeList from '../Components/InitiativeList';

const ProgramsInitiatives = {
        InitiativeMainTextTitle: 'How we make a difference',
        InitiativeMainTextText: `Back to School NGO have lunched several programs and Initiatives to help 
                                    disadvantaged children in different aspects to help them grow intellectually 
                                    which generally improve the quality of lives in the community in general. 
                                    Our supply drive is a heartfelt initiative aimed at ensuring that no child 
                                    is left behind due to a lack of essential school supplies.`,
    };

export default function ProgramsAndInitiatives() {

    

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
        document.title = 'BacktoSchool NGO Programs and Initiatives | Empowering Young Minds';
        window.scrollTo(0, 0);
    }, []);

    // page schema
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "BacktoSchool NGO Programs and Initiatives | Empowering Young Minds",
        "image": "https://backtoschoolngo.com/images/BacktoschoolNGO%20Sponsor%20a%20Child%20Campaign.webp",
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
        "articleBody": "Our Sponsor a Child Campaign is a powerful way to make a lasting impact on a child's education..."
    };


    return (
        <div className="fade-in initiative-page">
            {/* Open graph tag for social media */}
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
                <title>BacktoSchool NGO Programs and Initiatives | Empowering Young Minds</title>
                <meta property="og:title" content="BacktoSchool NGO Programs and Initiatives" />
                <meta property="og:description" content="Our Sponsor a Child Campaign is a powerful way to make a lasting impact on a child's education..." />
                <meta property="og:image" content="https://backtoschoolngo.com/images/BacktoschoolNGO%20Sponsor%20a%20Child%20Campaign.webp" />
                <meta property="og:url" content="https://www.backtoschoolngo.com/sponsor-a-child-campaign" />
            </Helmet>
            <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/Back%20to%20school%20NGO_Digital%20Library_book-library-with-open-textbook%201_BacktoschoolNGO.webp'})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: '#000000'}}>
                <div div className='boxed pad'>
                    <WhatWeDoHeroSection 
                        title= "Programs and Initiatives"
                        text= "We believe that every child regardless of their background or circumstances, deserves access to quality education."/>    
                </div>
            </div>
            <main className='boxed pad'>
                <InitiativeMainText
                    imttitle={ProgramsInitiatives.InitiativeMainTextTitle}
                    imttext={ProgramsInitiatives.InitiativeMainTextText}/>
                <InitiativeList/>
            </main>
        </div>
    )
}
