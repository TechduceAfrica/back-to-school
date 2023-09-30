import React from 'react';
import './Testimonial.css';

// testimonial api
const testimonialsList = [
    {
        text: `Back To School NGO embodies the true spirit of community and education. 
                Their dedication to helping teachers and students is inspiring. With their assistance, 
                we've created a more conducive learning environment, 
                and I've seen our students flourish academically and personally.`,
        image: "https://backtoschool.ngo/backtoschool-assets/Back%20to%20school%20NGO%20-%20Ogunrinde.webp",
        name: "Ogunrinde B. B",
        who: "Community Leader",
    }, {
        text: `I cannot express how grateful I am to Back To School NGO for the incredible work they do. As a parent, 
                I've struggled to provide my child with the education they deserve. This organization has not only 
                eased my financial burden but also ensured my child gets the education they need to succeed in life. 
                Thank you from the bottom of my heart`,
        image: "https://backtoschool.ngo/backtoschool-assets/Back%20to%20school%20NGO%20-%20Michael.webp",
        name: "Michael O. A",
        who: "Parent, Beneficiary",
    }, {
        text: `Back To School NGO is a true partner in education. Their commitment to helping both teachers and 
                students is commendable. The teaching materials they provide have transformed my classroom, 
                making learning more engaging and effective. Our students are thriving because of their support.`,
        image: "https://backtoschool.ngo/backtoschool-assets/Back%20to%20School%20NGO%20-%20Shade.webp",
        name: "Shade A. J",
        who: "Teacher, Beneficiary",
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
                            <img src={testimonialList.image} alt={testimonialList.name} title={testimonialList.name} />
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
