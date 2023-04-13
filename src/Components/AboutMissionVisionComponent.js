import React from 'react';
import './AboutMissionVisionComponent.css'

export default function AboutMissionVisionComponent() {
  return (
    <>
        <div className='about-mv-section-wrapper'>
            <div>
                <img src='https://backtoschool.ngo/backtoschool-assets/Purposeful%20man.png' alt='about back to school mission' />
                <h3>Our mission</h3>
                <p>
                    Our goal is to provide disadvantaged children 
                    with the tools necessary to create a brighter 
                    future not just for themselves but also for 
                    the communities in which they live by providing 
                    them with a high-quality education, regardless 
                    of their family's socioeconomic standing.
                </p>
            </div>

            <div>
                <img src='https://backtoschool.ngo/backtoschool-assets/Back%20to%20school%20vision.png' alt='about back to school vision' />
                <h3>Our vision</h3>
                <p>
                    Our Vision is to live in a society in which 
                    every kid has access to a good education and has 
                    the opportunity to reach their full potential.
                </p>
            </div>
        </div>
    </>
  )
}
