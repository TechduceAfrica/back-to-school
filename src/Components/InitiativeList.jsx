import React from 'react'
import { NavLink } from 'react-router-dom';
import { HiOutlineChevronRight } from "react-icons/hi2";
import "../Stylesheet/Initiative.css"

const initList = [
    {
        img: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        title: "Back-To-School Supplies Drive",
        text: `We believe that every child deserves the chance to excel in their education. 
                Our Back-to-School Supply Drive is a heartfelt initiative aimed at ensuring 
                that no child is left behind due to a lack of essential school supplies.`,
        link: `/back-to-school-supply-drive`,
    }, {
        img: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        title: "Sponsor A Child Campaign",
        text: `By becoming a sponsor, you have the opportunity to change the trajectory of 
                a child's life, providing them with access to quality education and a 
                brighter future.`,
        link: `/sponsor-a-child-campaign`,
    }, {
        img: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        title: "Teacher Training And Support",
        text: `Quality education begins with dedicated and skilled educators. BackToSchool's 
                Teacher Training and Support Campaign is committed to enhancing the 
                capabilities of teachers in underserved communities.`,
        link: `/teacher-training-and-Support`,
    }, {
        img: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        title: "Skill Acquisition Campaign",
        text: `Our Skill Acquisition Campaign focuses on equipping out-of-school youth with 
                practical skills that enhance their employability and open doors to 
                entrepreneurship.`,
        link: `/skill-acquisition-campaign`,
    }, {
        img: "https://backtoschool.ngo/backtoschool-assets/Open%20Book.png",
        title: "Digital Library For Primary Education",
        text: `The Digital Library for Primary Education is our commitment to providing free 
                and accessible educational resources to primary school children. This digital 
                library breaks down barriers and empowers children to learn and grow.`,
        link: `/digital-library`,
    }
];

export default function InitiativeList() {
    return (
        <div className='boxed pad'>
            {initList.map((initLists, index) => 
            (
                <div key={index} className='init-list-items'>
                    <div>
                        <img src={initLists.img} 
                                alt={initLists.title} 
                                title={initLists.title}
                                width="50px"
                                height="50px" />
                    </div>
                    <div>
                        <h4>
                            {initLists.title}
                        </h4>
                        <p>
                            {initLists.text}
                        </p>
                    </div>
                    <div className='init__list__btn'>
                        <NavLink to={initLists.link} 
                            title={initLists.title}>
                            <HiOutlineChevronRight/>
                        </NavLink>
                    </div>
                </div>
            )
            )}
        </div>
    )
}
