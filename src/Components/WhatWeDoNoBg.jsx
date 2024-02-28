import React from 'react';
import WhatWeDoSub from './WhatWeDoSub';
import './WhatWeDoNoBg.css';
import "@splidejs/react-splide/css";
import { SplideTrack, Splide, SplideSlide } from '@splidejs/react-splide';

const options = {
    perPage: 3,
    type: 'loop',
    perMove: 1,
    autoplay: true,
    pagination: true,
    rewind: true,
    gap: '1rem',
    breakpoints: {
        990: {
          perPage: 2,
          gap    : '.7rem',
        },
        480: {
          perPage: 1,
        },
      },
};

const WWDSDs = [
    {
        btsimg: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        btstitle: "Back-to-School Supply Drive",
        btslink: `/back-to-school-supply-drive`,
        btstext: "We provide essential school supplies to underprivileged children, reducing the financial burden on families and sparking enthusiasm for learning.",
    }, {
        btsimg: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        btstitle: "Sponsor a Child Campaign",
        btslink: `/sponsor-a-child-campaign`,
        btstext: `Through sponsorship, we ensure that children from disadvantaged backgrounds have access to quality education, breaking the cycle of poverty`,
    }, {
        btsimg: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        btstitle: "Teacher Training and Support",
        btslink: `/teacher-training-and-Support`,
        btstext: "We empower educators with training and resources to enhance the quality of education in underserved communities.",
    }, {
        btsimg: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        btstitle: "Skill Acquisition Campaign",
        btslink: `/skill-acquisition-campaign`,
        btstext: `Our campaign equips out-of-school youth with practical skills, increasing employability and fostering entrepreneurship.`,
    }, {
        btsimg: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        btstitle: "Digital Library for Primary Education",
        btslink: `/digital-library`,
        btstext: "Our online library offers free access to educational resources, promoting lifelong learning.",
    }
];

export default function WhatWeDoNoBg() {
  return (
    <>
        <div className='what-we-do-nbg-wrapper__main'>
            <Splide options={options} aria-labelledby='autoplay-example-heading' hasTrack={ false }>
                <SplideTrack>
                    {WWDSDs.map((WWDSD, index) => 
                        (
                            <SplideSlide>
                                <div className='what-we-do-nbg-inner' key={index}>
                                    <WhatWeDoSub 
                                        
                                        img={WWDSD.btsimg}
                                        title={WWDSD.btstitle}
                                        text={WWDSD.btstext}
                                        link={WWDSD.btslink}
                                    />
                                </div>
                            </SplideSlide>
                        )
                    )}
                </SplideTrack>
            </Splide>
        </div>
    </>
  )
}
