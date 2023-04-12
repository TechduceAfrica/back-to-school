import React from 'react';
import PrimaryBtn from '../Components/PrimaryBtn';
import HeroImg from '../assets/Back to school NGO Hero img.png';
import Book from '../assets/Open Book.png';
import Support from '../assets/Financial suport.png';
import './HomeHeroSection.css';

export default function HomeHeroSection() {
  return (
    <>
        <div className='homehero-wrapper'>
            <div className='homehero-left'>
                <h3>Back to school NGO</h3>
                <h1>Help A Child Back To School</h1>
                <p>Going back to school is an exciting time for students, 
                    but for many children around the world, this is a luxury 
                    they cannot afford. Lack of access to education has a 
                    profound impact on a child’s future, limiting their 
                    opportunities and perpetuating a cycle of poverty. 
                    That’s where our NGO comes in.
                </p>
                <PrimaryBtn 
                    btntext= 'read more'
                    btnlink= '/about'/>
            </div>

            <div className='homehero-right'>
                <img src={HeroImg} alt='Help A Child Back To School' />
            </div>
        </div>

        <div className='subhomehero-wrapper'>
            <div>
                <div>
                    <img src={Book} alt='Education for children and teenagers'/>
                </div>
                <div>
                    <h4>
                        EDUCATION FOR CHILDREN & TEENAGERS
                    </h4>
                    <p>
                        Education is a lifelong journey, and it’s never too late to start. 
                        At our organization, we believe that education is a fundamental human right, 
                        and we are committed to providing access to education for both youths and adults.
                    </p>
                </div>
            </div>
            
            <div>
                <div>
                    <img src={Support} alt='FINANCIAL SUPPORT FOR THE POOR'/>
                </div>
                <div>
                    <h4>
                        FINANCIAL SUPPORT FOR THE POOR
                    </h4>
                    <p>
                        Access to financial support can be a lifeline for those experiencing poverty. 
                        At our organization, we are committed to providing financial support to those who need it most.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
