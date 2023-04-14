import React from 'react';
import './Testimonial.css';

const testimonialsList = [
    {
        text: `BacktoSchool NGO has changed my life in so many ways. 
                I never would have been able to attend school without their support, 
                and now I have a chance to pursue my dreams and 
                make a better life for myself and my family.`,
        image: "https://backtoschool.ngo/backtoschool-assets/Oluwabunmi%20Mike.png",
        name: "Oluwabunmi Mike",
        who: "Student Beneficiary",
    }, {
        text: "BacktoSchool NGO has been a vital partner in my education and community assistance. I am delighted to support their initiatives, which have helped kids like me continue in school and follow our aspirations.",
        image: "https://backtoschool.ngo/backtoschool-assets/Oluwabunmi%20Mike.png",
        name: "Oluwabunmi mike",
        who: "Student Beneficiary",
    }, {
        text: "BacktoSchool NGO has changed my life in so many ways. I never would have been able to attend school without their support, and now I have a chance to pursue my dreams and make a better life for myself and my family.",
        image: "https://backtoschool.ngo/backtoschool-assets/Oluwabunmi%20Mike.png",
        name: "Oluwabunmi mike",
        who: "Student Beneficiary",
    }
];

export default function Testimonial() {
  return (
    <>
        <div className='testimoniallist-wrapper'>
    
            {testimonialsList.map((testimonialList, index) => 
                (
                    <div className='testimonial-wrapper' key={index}>
                        <p>
                            {testimonialList.text}
                        </p>

                        <div className='testimonial-img'>
                            <img src={testimonialList.image} alt='' />
                        </div>
                        
                        <div>
                            <h4>{testimonialList.name}</h4>
                            <h5>{testimonialList.who}</h5>
                        </div>
                    </div>
                )
            )}
        
        </div>
    </>
  )
}
