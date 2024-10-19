import React from 'react';
import PrimaryBtn from './PrimaryBtn';
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
                <h1>Empowering Dreams, One Child at a Time</h1>
                <p>At BackToSchool, we're on a mission to change lives through the power of education. 
                    We firmly believe that education is not just a path to success but a fundamental 
                    right for every child, regardless of their circumstances. Our organization is 
                    dedicated to making this belief a reality.
                </p>
                <PrimaryBtn 
                    btntext= 'read more'
                    btnlink= '/whatwedo'/>
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
                    <img src={Support} alt='SUPPORT THE UNDERPRIVILEGED'/>
                </div>
                <div>
                    <h4>
                        SUPPORT THE UNDERPRIVILEGED
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
