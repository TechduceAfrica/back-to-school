import React from 'react';
import './WhatWeDoSub.css';
import WhatWeDoSub from './WhatWeDoSub';
import "@splidejs/react-splide/css";
import { SplideTrack, Splide, SplideSlide } from '@splidejs/react-splide';

const options = {
    perPage: 3,
    type: 'loop',
    perMove: 1,
    autoplay: true,
    pagination: false,
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

const WhatWeDoSubDetails = [
    {
        btsimg: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        btstitle: "Back-To-School Supplies Drive",
        btstext: `Our Back-to-School Supply Drive ensures that children have the 
                    tools they need to succeed in their academic journey. We 
                    collect and distribute essential school supplies, including 
                    textbooks, notebooks, pencils, and uniforms. By doing so, we 
                    reduce the financial burden on families and ignite a passion 
                    for learning.`,
    }, {
        btsimg: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        btstitle: "Sponsor a Child Campaign",
        btstext: `Through our Sponsor a Child Campaign, we provide financial 
                    support for a child's education for a school year or longer. 
                    This program ensures that children from economically 
                    disadvantaged backgrounds have access to quality education, 
                    breaking the cycle of poverty and opening doors to a 
                    brighter future.`,
    }, {
        btsimg: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        btstitle: "Teacher Training & Support",
        btstext: `Quality education begins with dedicated and skilled educators. 
                    Our Teacher Training and Support Campaign focuses on 
                    providing training, resources, and support to teachers in 
                    underserved communities. By enhancing the skills and 
                    knowledge of educators, we improve the overall quality of 
                    education in schools.`,
    }, {
        btsimg: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        btstitle: "Skill Acquisition Campaign",
        btstext: `Our Skill Acquisition Campaign equips out-of-school children 
                    and youth with practical skills for a brighter future. We 
                    offer training in various skills such as digital literacy, 
                    vocational skills, and entrepreneurship. By equipping 
                    young people with relevant skills, we increase their 
                    chances of finding employment or starting their own 
                    businesses, thereby contributing to poverty reduction and 
                    sustainable economic growth.`,
    }, {
        btsimg: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        btstitle: "Digital Library for Primary Education",
        btstext: `Our Digital Library for Primary Education is a revolutionary 
                    initiative aimed at providing free access to educational 
                    resources for primary school children. This online library 
                    offers a wide range of materials, from textbooks to 
                    interactive lessons, accessible to children from all walks 
                    of life. We believe that education should transcend 
                    geographical boundaries, and our digital library is a step 
                    in that direction.`,
    }
];

export default function WhatWeDoSubGroup() {
  return (
    <>
        <div className='WhatWeDoSubGroup-wrapper'>
            <Splide options={options} aria-labelledby='autoplay-example-heading' hasTrack={ false }>
                <SplideTrack>
                    {WhatWeDoSubDetails.map((WhatWeDoSubDetail, index) => 
                        (
                            <SplideSlide>
                                <div className='WhatWeDoSubGroup-inner'>
                                    <WhatWeDoSub 
                                        key={index}
                                        img={WhatWeDoSubDetail.btsimg}
                                        title={WhatWeDoSubDetail.btstitle}
                                        text={WhatWeDoSubDetail.btstext}
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

