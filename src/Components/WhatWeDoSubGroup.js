import React from 'react';
import './WhatWeDoSub.css';
import WhatWeDoSub from './WhatWeDoSub';

const WhatWeDoSubDetails = [
    {
        btsimg: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        btstitle: "Back-To-School Supplies Drive",
        btstext: "We collect and buy books, notes, pencils, and uniforms for low-income kids. Giving school supplies can help low-income families and children thrive in school.",
    }, {
        btsimg: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        btstitle: "Primary Education Digital Library",
        btstext: `Our Digital Library for Primary Education is a revolutionary initiative aimed at providing free access to educational resources for primary school children.`,
    }, {
        btsimg: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        btstitle: "Teacher Training & Support",
        btstext: "To improve education. This initiative addresses the teacher shortage and ensures students get a great education that prepares them for the future.",
    }
];

export default function WhatWeDoSubGroup() {
  return (
    <>
        <div className='WhatWeDoSubGroup-wrapper'>
            {WhatWeDoSubDetails.map((WhatWeDoSubDetail, index) => 
            (
                <div className='WhatWeDoSubGroup-inner'>
                    <WhatWeDoSub 
                        key={index}
                        img={WhatWeDoSubDetail.btsimg}
                        title={WhatWeDoSubDetail.btstitle}
                        text={WhatWeDoSubDetail.btstext}
                    />
                </div>
            )
            )}
        </div>
        
    </>
  )
}

// {items.map(item => <li key={item.id}>{item.name}</li>)}
